const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');
const express = require('express');

// Load configuration
const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Store QR code and status
let qrCodeDataUrl = null;
let clientStatus = 'initializing';
let lastError = null;
let sendingStatus = null;

// Initialize WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: './.wwebjs_auth'
    }),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--disable-gpu'
        ]
    }
});

// Express routes
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>WhatsApp Messaging Agent</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }
                .container {
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    padding: 40px;
                    max-width: 600px;
                    width: 100%;
                    text-align: center;
                }
                h1 {
                    color: #25D366;
                    margin-bottom: 10px;
                    font-size: 2em;
                }
                .status {
                    padding: 15px;
                    border-radius: 10px;
                    margin: 20px 0;
                    font-weight: 600;
                }
                .status.initializing {
                    background: #fff3cd;
                    color: #856404;
                }
                .status.ready {
                    background: #d4edda;
                    color: #155724;
                }
                .status.authenticating {
                    background: #cfe2ff;
                    color: #084298;
                }
                .status.error {
                    background: #f8d7da;
                    color: #721c24;
                }
                .status.sending {
                    background: #d1ecf1;
                    color: #0c5460;
                }
                .qr-container {
                    margin: 30px 0;
                }
                .qr-container img {
                    max-width: 100%;
                    border: 3px solid #25D366;
                    border-radius: 10px;
                    padding: 10px;
                    background: white;
                }
                .instructions {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 10px;
                    margin: 20px 0;
                    text-align: left;
                }
                .instructions h3 {
                    color: #25D366;
                    margin-bottom: 10px;
                }
                .instructions ol {
                    margin-left: 20px;
                    line-height: 1.8;
                }
                .info {
                    margin-top: 20px;
                    padding: 15px;
                    background: #e7f3ff;
                    border-radius: 10px;
                    color: #004085;
                }
                .error-message {
                    background: #f8d7da;
                    color: #721c24;
                    padding: 15px;
                    border-radius: 10px;
                    margin: 20px 0;
                }
                .sending-status {
                    background: #d1ecf1;
                    padding: 15px;
                    border-radius: 10px;
                    margin: 20px 0;
                    color: #0c5460;
                }
                .refresh-btn {
                    background: #25D366;
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 8px;
                    font-size: 16px;
                    cursor: pointer;
                    margin-top: 20px;
                    transition: background 0.3s;
                }
                .refresh-btn:hover {
                    background: #1da851;
                }
            </style>
            <script>
                // Auto-refresh every 3 seconds
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            </script>
        </head>
        <body>
            <div class="container">
                <h1>📱 WhatsApp Messaging Agent</h1>
                <div class="status ${clientStatus}">
                    Status: ${clientStatus.toUpperCase()}
                </div>
                
                ${qrCodeDataUrl ? `
                    <div class="qr-container">
                        <img src="${qrCodeDataUrl}" alt="WhatsApp QR Code">
                    </div>
                    <div class="instructions">
                        <h3>📋 How to Connect:</h3>
                        <ol>
                            <li>Open WhatsApp on your phone</li>
                            <li>Go to <strong>Settings</strong> → <strong>Linked Devices</strong></li>
                            <li>Tap <strong>"Link a Device"</strong></li>
                            <li>Scan the QR code above</li>
                        </ol>
                    </div>
                ` : ''}
                
                ${lastError ? `
                    <div class="error-message">
                        <strong>Error:</strong> ${lastError}
                    </div>
                ` : ''}
                
                ${sendingStatus ? `
                    <div class="sending-status">
                        ${sendingStatus}
                    </div>
                ` : ''}
                
                ${clientStatus === 'ready' ? `
                    <div class="info">
                        <strong>✓ Agent is ready!</strong><br>
                        Messages will be sent automatically to ${config.groups.length} groups.
                    </div>
                ` : ''}
                
                <button class="refresh-btn" onclick="window.location.reload()">🔄 Refresh</button>
            </div>
        </body>
        </html>
    `);
});

// Health check endpoint for Railway
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        clientStatus: clientStatus,
        timestamp: new Date().toISOString()
    });
});

// Start Express server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🌐 Server running on port ${PORT}`);
    console.log(`   Access your agent at: http://localhost:${PORT}`);
    if (process.env.RAILWAY_ENVIRONMENT) {
        console.log(`   Railway URL will be available in your Railway dashboard\n`);
    }
});

// QR Code generation
client.on('qr', async (qr) => {
    console.log('\n========================================');
    console.log('QR Code received! Scan it with your WhatsApp:');
    console.log('========================================\n');
    
    // Display QR code in terminal
    qrcode.generate(qr, { small: true });
    
    clientStatus = 'authenticating';
    
    try {
        // Generate data URL for web viewing
        qrCodeDataUrl = await QRCode.toDataURL(qr, {
            width: 500,
            margin: 2
        });
        
        console.log(`\n✓ QR Code is now available on the web interface`);
        console.log(`   Visit your Railway URL to view and scan the QR code\n`);
        
    } catch (error) {
        console.error('Error generating QR code:', error.message);
        lastError = error.message;
    }
});

// Client ready
client.on('ready', async () => {
    console.log('WhatsApp client is ready!');
    clientStatus = 'ready';
    qrCodeDataUrl = null; // Clear QR code after authentication
    
    console.log(`Sending messages to ${config.groups.length} groups...`);
    sendingStatus = `Sending messages to ${config.groups.length} groups...`;
    
    try {
        await sendPromotionalMessages();
        console.log('All messages sent successfully!');
        sendingStatus = `✓ All messages sent successfully! (${config.groups.length} groups × ${config.messages.length} messages)`;
        
        // Keep server running - don't exit
        console.log('\n✓ Agent is running. Server will stay active.');
        console.log('   You can check the status at your Railway URL\n');
    } catch (error) {
        console.error('Error sending messages:', error);
        lastError = error.message;
        sendingStatus = `Error: ${error.message}`;
    }
});

// Authentication events
client.on('authenticated', () => {
    console.log('Client authenticated');
    clientStatus = 'authenticated';
});

client.on('auth_failure', (msg) => {
    console.error('Authentication failure:', msg);
    clientStatus = 'error';
    lastError = `Authentication failed: ${msg}`;
});

client.on('disconnected', (reason) => {
    console.log('Client disconnected:', reason);
    clientStatus = 'disconnected';
    lastError = `Disconnected: ${reason}`;
});

// Function to send promotional messages
async function sendPromotionalMessages() {
    const results = {
        successful: [],
        failed: []
    };

    for (const group of config.groups) {
        console.log(`\nProcessing ${group.name} (${group.id})...`);
        sendingStatus = `Processing ${group.name}...`;
        
        for (let i = 0; i < config.messages.length; i++) {
            const message = config.messages[i];
            const messageNumber = i + 1;
            
            try {
                // Send message to group
                const chat = await client.getChatById(group.id);
                await chat.sendMessage(message);
                
                console.log(`  ✓ Message ${messageNumber} sent to ${group.name}`);
                results.successful.push({
                    group: group.name,
                    groupId: group.id,
                    messageNumber: messageNumber,
                    message: message.substring(0, 50) + '...'
                });
                
                // Add delay between messages to avoid rate limiting
                if (i < config.messages.length - 1) {
                    await sleep(2000); // 2 second delay between messages
                }
            } catch (error) {
                console.error(`  ✗ Failed to send message ${messageNumber} to ${group.name}:`, error.message);
                results.failed.push({
                    group: group.name,
                    groupId: group.id,
                    messageNumber: messageNumber,
                    error: error.message
                });
            }
        }
        
        // Add delay between groups
        if (group !== config.groups[config.groups.length - 1]) {
            await sleep(3000); // 3 second delay between groups
        }
    }

    // Print summary
    console.log('\n=== Sending Summary ===');
    console.log(`Successful: ${results.successful.length}`);
    console.log(`Failed: ${results.failed.length}`);
    
    if (results.failed.length > 0) {
        console.log('\nFailed messages:');
        results.failed.forEach(failure => {
            console.log(`  - ${failure.group} (Message ${failure.messageNumber}): ${failure.error}`);
        });
    }
}

// Helper function to sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Initialize client
console.log('Initializing WhatsApp client...');
client.initialize();

// Keep process alive
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully...');
    process.exit(0);
});
