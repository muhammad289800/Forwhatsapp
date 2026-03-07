const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');

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
client.on('qr', (qr) => {
    console.log('QR Code received, scan it with your WhatsApp:');
    qrcode.generate(qr, { small: true });
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
