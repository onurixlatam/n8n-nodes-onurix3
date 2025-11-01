# n8n-nodes-onurix3

![n8n.io - Workflow Automation](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png)

This is an n8n community node that lets you use [Onurix](https://onurix.com) services in your n8n workflows.

Onurix is a communication platform that provides APIs for SMS, WhatsApp, voice calls, URL shortening, and contact management.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Community Node Installation

1. Go to **Settings > Community Nodes**.
2. Select **Install**.
3. Enter `n8n-nodes-onurix3` in **Enter npm package name**.
4. Agree to the [risks](https://docs.n8n.io/integrations/community-nodes/risks/) of using community nodes: select **I understand the risks of installing unverified code from a public source**.
5. Select **Install**.

After installation, you'll find the **Onurix** node in your nodes panel.

## Operations

This node supports all major Onurix API operations:

### SMS
- **Send SMS**: Send text messages to one or multiple phone numbers
- **Send SMS 2FA**: Send 2FA verification codes via SMS

### Call
- **Send Call**: Make voice calls with text-to-speech messages
- **Send Call 2FA**: Send 2FA verification codes via voice call

### WhatsApp
- **Send with Template**: Send WhatsApp messages using approved Meta templates
- **Send without Template**: Send direct WhatsApp messages (text, image, document, video, audio)
- **Send WhatsApp 2FA**: Send 2FA verification codes via WhatsApp

### URL
- **Shorten URL**: Create shortened URLs with optional custom aliases
- **Get Statistics**: Retrieve click statistics for shortened URLs

### Group
- **Create**: Create a new contact group
- **Update**: Update group information
- **Delete**: Delete a group
- **List**: List all groups
- **List Contacts**: List all contacts in a specific group

### Contact
- **Create**: Create a new contact
- **Update**: Update contact information
- **Delete**: Delete a contact
- **Associate to Group**: Add a contact to a group
- **Disassociate from Group**: Remove a contact from a group

### General
- **Get Balance**: Check your account credit balance
- **Block Phone**: Block a phone number from receiving communications
- **Verify Message**: Check the status of a sent message
- **Verify 2FA Code**: Verify a 2FA authentication code

## Credentials

You need to configure your Onurix API credentials:

1. **Client ID**: Your Onurix Client ID (found in the API Security section of your Onurix dashboard)
2. **API Key**: Your Onurix API Key (found in the API Security section of your Onurix dashboard)

To get your credentials:
1. Log in to your [Onurix account](https://onurix.com)
2. Navigate to the API Security section
3. Copy your Client ID and API Key

## Compatibility

This node has been developed and tested with:
- n8n version 1.0.0 and above
- Node.js version 18.x and above

## Usage

### Example: Send SMS

1. Add the **Onurix** node to your workflow
2. Select **SMS** as the resource
3. Select **Send SMS** as the operation
4. Configure your credentials
5. Enter the phone number (e.g., `573001234567`)
6. Enter your message text
7. (Optional) Add group IDs to send to multiple recipients

### Example: Send WhatsApp with Template

1. Add the **Onurix** node to your workflow
2. Select **WhatsApp** as the resource
3. Select **Send with Template** as the operation
4. Enter your WhatsApp Business phone number Meta ID
5. Enter recipient phone number
6. Enter your approved template ID
7. Provide template variables in JSON format:
```json
{
  "1": {"type": "text", "value": "John Doe"},
  "2": {"type": "text", "value": "ORD-12345"}
}
```

### Example: Shorten URL

1. Add the **Onurix** node to your workflow
2. Select **URL** as the resource
3. Select **Shorten URL** as the operation
4. Enter the long URL to shorten
5. (Optional) Provide a custom alias

### Example: Check Balance

1. Add the **Onurix** node to your workflow
2. Select **General** as the resource
3. Select **Get Balance** as the operation
4. The node will return your current credit balance

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Onurix official website](https://onurix.com)
- [Onurix API documentation](https://docs.onurix.com/)
- [Onurix support](mailto:soporte@onurix.com)

## License

[MIT](LICENSE.md)
