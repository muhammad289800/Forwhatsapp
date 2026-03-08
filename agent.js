const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');
const http = require('http');

// Load configuration
const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

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

// QR Code generation
client.on('qr', async (qr) => {
    console.log('\n========================================');
    console.log('QR Code received! Scan it with your WhatsApp:');
    console.log('========================================\n');
    
    // Display QR code in terminal
    qrcode.generate(qr, { small: true });
    
    try {
        // Save QR code as PNG image
        const qrImagePath = path.join(__dirname, 'qr-code.png');
        await QRCode.toFile(qrImagePath, qr, {
            width: 500,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        });
        
        console.log(`\n✓ QR Code saved as image: ${qrImagePath}`);
        console.log(`  You can open this file to scan with your phone.\n`);
        
        // Generate data URL for web viewing
        const dataUrl = await QRCode.toDataURL(qr, {
            width: 500,
            margin: 2
        });
        
        // Start a simple HTTP server to display QR code
        const server = http.createServer((req, res) => {
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>WhatsApp QR Code</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                min-height: 100vh;
                                margin: 0;
                                background: #f0f0f0;
                            }
                            .container {
                                background: white;
                                padding: 30px;
                                border-radius: 10px;
                                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                                text-align: center;
                            }
                            h1 {
                                color: #25D366;
                                margin-bottom: 20px;
                            }
                            img {
                                max-width: 500px;
                                border: 2px solid #ddd;
                                border-radius: 5px;
                            }
                            p {
                                color: #666;
                                margin-top: 20px;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>WhatsApp QR Code</h1>
                            <p>Scan this QR code with your WhatsApp mobile app</p>
                            <p>Go to: Settings → Linked Devices → Link a Device</p>
                            <img src="${dataUrl}" alt="WhatsApp QR Code">
                            <p style="margin-top: 20px; font-size: 14px;">
                                Keep this page open and scan the code with your phone
                            </p>
                        </div>
                    </body>
                    </html>
                `);
            } else {
                res.writeHead(404);
                res.end('Not Found');
            }
        });
        
        const port = 3000;
        server.listen(port, () => {
            console.log(`\n🌐 QR Code available at: http://localhost:${port}`);
            console.log(`   Open this URL in your browser to view and scan the QR code\n`);
        });
        
        // Stop server after authentication
        client.once('authenticated', () => {
            setTimeout(() => {
                server.close();
                console.log('\n✓ Authentication successful! Server closed.');
            }, 2000);
        });
        
    } catch (error) {
        console.error('Error generating QR code image:', error.message);
        console.log('You can still scan the QR code displayed above in the terminal.');
    }
});

// Client ready
client.on('ready', async () => {
    console.log('WhatsApp client is ready!');
    console.log(`Sending messages to ${config.groups.length} groups...`);
    
    try {
        await sendPromotionalMessages();
        console.log('All messages sent successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error sending messages:', error);
        process.exit(1);
    }
});

// Authentication events
client.on('authenticated', () => {
    console.log('Client authenticated');
});

client.on('auth_failure', (msg) => {
    console.error('Authentication failure:', msg);
});

client.on('disconnected', (reason) => {
    console.log('Client disconnected:', reason);
});

// Function to send promotional messages
async function sendPromotionalMessages() {
    const results = {
        successful: [],
        failed: []
    };

    for (const group of config.groups) {
        console.log(`\nProcessing ${group.name} (${group.id})...`);
        
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
