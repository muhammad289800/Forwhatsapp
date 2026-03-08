# WhatsApp Messaging Agent

A Node.js-based WhatsApp messaging agent for sending promotional messages to multiple WhatsApp groups automatically.

## Features

- Send promotional messages to multiple WhatsApp groups
- Configurable groups and messages via JSON configuration
- Automatic rate limiting to avoid WhatsApp restrictions
- QR code authentication for easy setup
- Error handling and reporting

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- WhatsApp account (mobile number)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install dependencies:
```bash
npm install
```

## Configuration

The agent is configured via `config.json` file. It contains:

- **Groups**: Array of WhatsApp group IDs to send messages to
- **Messages**: Array of promotional messages to send

You can edit `config.json` to add/remove groups or modify messages.

### Current Configuration

- **8 Groups** configured:
  - Group 1: 120363406633082497@g.us
  - Group 2: 120363424090465707@g.us
  - Group 3: 120363421290200373@g.us
  - Group 4: 120363201426226661@g.us
  - Group 5: 120363305047078572@g.us
  - Group 6: 923000119420-1549600107@g.us
  - Group 7: 120363161021197632@g.us
  - Group 8: 120363248175093062@g.us

- **5 Promotional Messages** configured:
  1. Mercury Business Account
  2. USA Relay Business Account
  3. Fresh Amazon Seller Central
  4. Launch Your US Business
  5. USA Interlace.Money Business

## Usage

1. Start the agent:
```bash
npm start
```

2. Scan the QR code with your WhatsApp mobile app:
   - Open WhatsApp on your phone
   - Go to Settings > Linked Devices
   - Tap "Link a Device"
   - Scan the QR code displayed in the terminal

3. Wait for authentication and message sending:
   - The agent will automatically authenticate
   - Once ready, it will send all configured messages to all groups
   - A summary will be displayed showing successful and failed sends

## How It Works

1. The agent initializes a WhatsApp Web client using `whatsapp-web.js`
2. You authenticate by scanning a QR code
3. The agent reads the configuration from `config.json`
4. For each group, it sends all configured messages
5. Delays are added between messages (2 seconds) and groups (3 seconds) to avoid rate limiting
6. Results are logged to the console

## Important Notes

- **Rate Limiting**: The agent includes delays to prevent WhatsApp from blocking your account. Do not reduce these delays significantly.
- **Group Access**: Make sure your WhatsApp account is a member of all configured groups.
- **Authentication**: The authentication data is stored locally in `.wwebjs_auth/` directory. You only need to scan the QR code once.
- **Privacy**: Keep your authentication data secure and do not share it.

## Troubleshooting

- **QR Code not appearing**: Make sure your terminal supports QR code display
- **Authentication failure**: Try deleting `.wwebjs_auth/` folder and re-authenticating
- **Messages not sending**: 
  - Verify you're a member of all groups
  - Check group IDs are correct
  - Ensure your WhatsApp account is not restricted

## Project Structure

```
.
├── agent.js          # Main agent script
├── config.json       # Configuration file (groups and messages)
├── package.json      # Node.js dependencies
├── README.md         # This file
└── .gitignore        # Git ignore file
```

## License

This project is licensed under the MIT License.
