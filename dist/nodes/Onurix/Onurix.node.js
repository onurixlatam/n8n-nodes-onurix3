"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Onurix = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class Onurix {
    constructor() {
        this.description = {
            displayName: "Onurix",
            name: "onurix",
            icon: "file:onurix.svg",
            group: ["transform"],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: "Interact with Onurix API - SMS, WhatsApp, Calls, URL Shortener",
            defaults: {
                name: "Onurix",
            },
            inputs: ["main"],
            outputs: ["main"],
            credentials: [
                {
                    name: "onurixApi",
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: "Resource",
                    name: "resource",
                    type: "options",
                    noDataExpression: true,
                    options: [
                        {
                            name: "SMS",
                            value: "sms",
                        },
                        {
                            name: "Call",
                            value: "call",
                        },
                        {
                            name: "WhatsApp",
                            value: "whatsapp",
                        },
                        {
                            name: "URL",
                            value: "url",
                        },
                        {
                            name: "Group",
                            value: "group",
                        },
                        {
                            name: "Contact",
                            value: "contact",
                        },
                        {
                            name: "General",
                            value: "general",
                        },
                    ],
                    default: "sms",
                },
                // SMS Operations
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ["sms"],
                        },
                    },
                    options: [
                        {
                            name: "Send SMS",
                            value: "send",
                            description: "Send a text message",
                            action: "Send an SMS",
                        },
                        {
                            name: "Send SMS 2FA",
                            value: "send2fa",
                            description: "Send a 2FA verification code via SMS",
                            action: "Send an SMS with 2FA code",
                        },
                    ],
                    default: "send",
                },
                // Call Operations
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ["call"],
                        },
                    },
                    options: [
                        {
                            name: "Send Call",
                            value: "send",
                            description: "Make a voice call",
                            action: "Make a voice call",
                        },
                        {
                            name: "Send Call 2FA",
                            value: "send2fa",
                            description: "Send a 2FA verification code via call",
                            action: "Make a call with 2FA code",
                        },
                    ],
                    default: "send",
                },
                // WhatsApp Operations
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ["whatsapp"],
                        },
                    },
                    options: [
                        {
                            name: "Send with Template",
                            value: "sendTemplate",
                            description: "Send a WhatsApp message using a template",
                            action: "Send a WhatsApp message with template",
                        },
                        {
                            name: "Send without Template",
                            value: "sendWithoutTemplate",
                            description: "Send a WhatsApp message without a template",
                            action: "Send a WhatsApp message without template",
                        },
                        {
                            name: "Send WhatsApp 2FA",
                            value: "send2fa",
                            description: "Send a 2FA verification code via WhatsApp",
                            action: "Send a WhatsApp 2FA code",
                        },
                    ],
                    default: "sendTemplate",
                },
                // URL Operations
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ["url"],
                        },
                    },
                    options: [
                        {
                            name: "Shorten URL",
                            value: "shorten",
                            description: "Create a shortened URL",
                            action: "Shorten a URL",
                        },
                        {
                            name: "Get Statistics",
                            value: "statistics",
                            description: "Get statistics for a shortened URL",
                            action: "Get URL statistics",
                        },
                    ],
                    default: "shorten",
                },
                // Group Operations
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ["group"],
                        },
                    },
                    options: [
                        {
                            name: "Create",
                            value: "create",
                            description: "Create a new group",
                            action: "Create a group",
                        },
                        {
                            name: "Update",
                            value: "update",
                            description: "Update a group",
                            action: "Update a group",
                        },
                        {
                            name: "Delete",
                            value: "delete",
                            description: "Delete a group",
                            action: "Delete a group",
                        },
                        {
                            name: "List",
                            value: "list",
                            description: "List all groups",
                            action: "List groups",
                        },
                        {
                            name: "List Contacts",
                            value: "listContacts",
                            description: "List contacts in a group",
                            action: "List group contacts",
                        },
                    ],
                    default: "list",
                },
                // Contact Operations
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ["contact"],
                        },
                    },
                    options: [
                        {
                            name: "Create",
                            value: "create",
                            description: "Create a new contact",
                            action: "Create a contact",
                        },
                        {
                            name: "Update",
                            value: "update",
                            description: "Update a contact",
                            action: "Update a contact",
                        },
                        {
                            name: "Delete",
                            value: "delete",
                            description: "Delete a contact",
                            action: "Delete a contact",
                        },
                        {
                            name: "Associate to Group",
                            value: "associateGroup",
                            description: "Associate a contact to a group",
                            action: "Associate contact to group",
                        },
                        {
                            name: "Disassociate from Group",
                            value: "disassociateGroup",
                            description: "Disassociate a contact from a group",
                            action: "Disassociate contact from group",
                        },
                    ],
                    default: "create",
                },
                // General Operations
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ["general"],
                        },
                    },
                    options: [
                        {
                            name: "Get Balance",
                            value: "balance",
                            description: "Check account credit balance",
                            action: "Get account balance",
                        },
                        {
                            name: "Block Phone",
                            value: "security",
                            description: "Block a phone number from receiving communications",
                            action: "Block a phone number",
                        },
                        {
                            name: "Verify Message",
                            value: "verifyMessage",
                            description: "Verify the status of a sent message",
                            action: "Verify message status",
                        },
                        {
                            name: "Verify 2FA Code",
                            value: "verify2fa",
                            description: "Verify a 2FA code",
                            action: "Verify 2FA code",
                        },
                    ],
                    default: "balance",
                },
                // SMS Fields
                {
                    displayName: "Phone",
                    name: "phone",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["sms"],
                            operation: ["send"],
                        },
                    },
                    default: "",
                    description: "Phone number(s) to send SMS to. For multiple numbers, separate with commas.",
                },
                {
                    displayName: "Message",
                    name: "sms",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["sms"],
                            operation: ["send"],
                        },
                    },
                    default: "",
                    description: "The SMS message to send",
                },
                {
                    displayName: "Groups",
                    name: "groups",
                    type: "string",
                    displayOptions: {
                        show: {
                            resource: ["sms"],
                            operation: ["send"],
                        },
                    },
                    default: "",
                    description: "Group IDs to send SMS to (comma-separated)",
                },
                // SMS 2FA Fields
                {
                    displayName: "Phone",
                    name: "phone",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["sms"],
                            operation: ["send2fa"],
                        },
                    },
                    default: "",
                    description: "Phone number to send 2FA code to",
                },
                {
                    displayName: "App Name",
                    name: "appName",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["sms"],
                            operation: ["send2fa"],
                        },
                    },
                    default: "",
                    description: "Name of your 2FA application created in Onurix",
                },
                // Call Fields
                {
                    displayName: "Phone",
                    name: "phone",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["call"],
                            operation: ["send"],
                        },
                    },
                    default: "",
                    description: "Phone number(s) to call. For multiple numbers, separate with commas.",
                },
                {
                    displayName: "Message",
                    name: "message",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["call"],
                            operation: ["send"],
                        },
                    },
                    default: "",
                    description: "The message to be read in the call",
                },
                {
                    displayName: "Voice",
                    name: "voice",
                    type: "options",
                    displayOptions: {
                        show: {
                            resource: ["call"],
                            operation: ["send"],
                        },
                    },
                    options: [
                        {
                            name: "Mariana",
                            value: "Mariana",
                        },
                        {
                            name: "Penelope",
                            value: "Penelope",
                        },
                    ],
                    default: "Mariana",
                    description: "Voice to use for the call",
                },
                {
                    displayName: "Audio Code",
                    name: "audioCode",
                    type: "string",
                    displayOptions: {
                        show: {
                            resource: ["call"],
                            operation: ["send"],
                        },
                    },
                    default: "",
                    description: "ID of a pre-uploaded audio file (optional)",
                },
                {
                    displayName: "Groups",
                    name: "groups",
                    type: "string",
                    displayOptions: {
                        show: {
                            resource: ["call"],
                            operation: ["send"],
                        },
                    },
                    default: "",
                    description: "Group IDs to call (comma-separated)",
                },
                // Call 2FA Fields
                {
                    displayName: "Phone",
                    name: "phone",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["call"],
                            operation: ["send2fa"],
                        },
                    },
                    default: "",
                    description: "Phone number to call with 2FA code",
                },
                {
                    displayName: "App Name",
                    name: "appName",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["call"],
                            operation: ["send2fa"],
                        },
                    },
                    default: "",
                    description: "Name of your 2FA application created in Onurix",
                },
                // WhatsApp Fields - Send with Template
                {
                    displayName: "From Phone Meta ID",
                    name: "fromPhoneMetaId",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["whatsapp"],
                            operation: ["sendTemplate"],
                        },
                    },
                    default: "",
                    description: "Your WhatsApp Business phone number ID from Meta",
                },
                {
                    displayName: "Phone",
                    name: "phone",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["whatsapp"],
                            operation: ["sendTemplate"],
                        },
                    },
                    default: "",
                    description: "Phone number(s) to send WhatsApp to",
                },
                {
                    displayName: "Template ID",
                    name: "templateId",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["whatsapp"],
                            operation: ["sendTemplate"],
                        },
                    },
                    default: "",
                    description: "WhatsApp template ID approved by Meta",
                },
                {
                    displayName: "Template Variables (JSON)",
                    name: "templateData",
                    type: "json",
                    displayOptions: {
                        show: {
                            resource: ["whatsapp"],
                            operation: ["sendTemplate"],
                        },
                    },
                    default: '{\n  "1": {"type": "text", "value": "John Doe"},\n  "2": {"type": "text", "value": "ORD-12345"}\n}',
                    description: "JSON object with template variable values",
                },
                // WhatsApp Fields - Send without Template
                {
                    displayName: "From Phone Meta ID",
                    name: "fromPhoneMetaId",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["whatsapp"],
                            operation: ["sendWithoutTemplate"],
                        },
                    },
                    default: "",
                    description: "Your WhatsApp Business phone number ID from Meta",
                },
                {
                    displayName: "Phone",
                    name: "phone",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["whatsapp"],
                            operation: ["sendWithoutTemplate"],
                        },
                    },
                    default: "",
                    description: "Phone number to send WhatsApp to",
                },
                {
                    displayName: "Message Type",
                    name: "messageType",
                    type: "options",
                    displayOptions: {
                        show: {
                            resource: ["whatsapp"],
                            operation: ["sendWithoutTemplate"],
                        },
                    },
                    options: [
                        {
                            name: "Text",
                            value: "text",
                        },
                        {
                            name: "Image",
                            value: "image",
                        },
                        {
                            name: "Document",
                            value: "document",
                        },
                        {
                            name: "Video",
                            value: "video",
                        },
                        {
                            name: "Audio",
                            value: "audio",
                        },
                    ],
                    default: "text",
                    description: "Type of message to send",
                },
                {
                    displayName: "Message Value",
                    name: "messageValue",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["whatsapp"],
                            operation: ["sendWithoutTemplate"],
                        },
                    },
                    default: "",
                    description: "Message content or URL (for media types)",
                },
                // WhatsApp 2FA Fields
                {
                    displayName: "From Phone Meta ID",
                    name: "fromPhoneMetaId",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["whatsapp"],
                            operation: ["send2fa"],
                        },
                    },
                    default: "",
                    description: "Your WhatsApp Business phone number ID from Meta",
                },
                {
                    displayName: "Phone",
                    name: "phone",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["whatsapp"],
                            operation: ["send2fa"],
                        },
                    },
                    default: "",
                    description: "Phone number to send 2FA code to",
                },
                {
                    displayName: "App Name",
                    name: "appName",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["whatsapp"],
                            operation: ["send2fa"],
                        },
                    },
                    default: "",
                    description: "Name of your 2FA application created in Onurix",
                },
                // URL Fields
                {
                    displayName: "Long URL",
                    name: "urlLong",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["url"],
                            operation: ["shorten"],
                        },
                    },
                    default: "",
                    description: "The long URL to shorten",
                },
                {
                    displayName: "Alias",
                    name: "alias",
                    type: "string",
                    displayOptions: {
                        show: {
                            resource: ["url"],
                            operation: ["shorten"],
                        },
                    },
                    default: "",
                    description: "Custom alias for the shortened URL (optional)",
                },
                {
                    displayName: "Short URL ID",
                    name: "id",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["url"],
                            operation: ["statistics"],
                        },
                    },
                    default: "",
                    description: "ID of the shortened URL",
                },
                // Group Fields
                {
                    displayName: "Group Name",
                    name: "name",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["group"],
                            operation: ["create", "update"],
                        },
                    },
                    default: "",
                    description: "Name of the group",
                },
                {
                    displayName: "Group ID",
                    name: "id",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["group"],
                            operation: ["update", "delete", "listContacts"],
                        },
                    },
                    default: "",
                    description: "ID of the group",
                },
                // Contact Fields
                {
                    displayName: "Phone",
                    name: "phone",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["contact"],
                            operation: [
                                "create",
                                "update",
                                "delete",
                                "associateGroup",
                                "disassociateGroup",
                            ],
                        },
                    },
                    default: "",
                    description: "Phone number of the contact",
                },
                {
                    displayName: "Name",
                    name: "name",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["contact"],
                            operation: ["create", "update"],
                        },
                    },
                    default: "",
                    description: "First name of the contact",
                },
                {
                    displayName: "Last Name",
                    name: "lastname",
                    type: "string",
                    displayOptions: {
                        show: {
                            resource: ["contact"],
                            operation: ["create", "update"],
                        },
                    },
                    default: "",
                    description: "Last name of the contact",
                },
                {
                    displayName: "Email",
                    name: "email",
                    type: "string",
                    displayOptions: {
                        show: {
                            resource: ["contact"],
                            operation: ["create", "update"],
                        },
                    },
                    default: "",
                    description: "Email address of the contact",
                },
                {
                    displayName: "Group ID",
                    name: "groupId",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["contact"],
                            operation: ["associateGroup", "disassociateGroup"],
                        },
                    },
                    default: "",
                    description: "ID of the group",
                },
                // General Fields
                {
                    displayName: "Phone",
                    name: "phone",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["general"],
                            operation: ["security"],
                        },
                    },
                    default: "",
                    description: "Phone number to block",
                },
                {
                    displayName: "Message ID",
                    name: "id",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["general"],
                            operation: ["verifyMessage"],
                        },
                    },
                    default: "",
                    description: "ID of the message to verify",
                },
                {
                    displayName: "Phone",
                    name: "phone",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["general"],
                            operation: ["verify2fa"],
                        },
                    },
                    default: "",
                    description: "Phone number for 2FA verification",
                },
                {
                    displayName: "App Name",
                    name: "appName",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["general"],
                            operation: ["verify2fa"],
                        },
                    },
                    default: "",
                    description: "Name of your 2FA application",
                },
                {
                    displayName: "Code",
                    name: "code",
                    type: "string",
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ["general"],
                            operation: ["verify2fa"],
                        },
                    },
                    default: "",
                    description: "The 2FA code to verify",
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const credentials = await this.getCredentials("onurixApi");
        for (let i = 0; i < items.length; i++) {
            try {
                const resource = this.getNodeParameter("resource", i);
                const operation = this.getNodeParameter("operation", i);
                let responseData = {};
                // SMS Operations
                if (resource === "sms") {
                    if (operation === "send") {
                        const phone = this.getNodeParameter("phone", i);
                        const sms = this.getNodeParameter("sms", i);
                        const groups = this.getNodeParameter("groups", i, "");
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            phone,
                            sms,
                        };
                        if (groups) {
                            body.groups = groups;
                        }
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/sms/send",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                    else if (operation === "send2fa") {
                        const phone = this.getNodeParameter("phone", i);
                        const appName = this.getNodeParameter("appName", i);
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            phone,
                            "app-name": appName,
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/sms/2fa",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                }
                // Call Operations
                if (resource === "call") {
                    if (operation === "send") {
                        const phone = this.getNodeParameter("phone", i);
                        const message = this.getNodeParameter("message", i);
                        const voice = this.getNodeParameter("voice", i, "Mariana");
                        const audioCode = this.getNodeParameter("audioCode", i, "");
                        const groups = this.getNodeParameter("groups", i, "");
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            phone,
                            message,
                            voice,
                        };
                        if (audioCode) {
                            body["audio-code"] = audioCode;
                        }
                        if (groups) {
                            body.groups = groups;
                        }
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/call/send",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                    else if (operation === "send2fa") {
                        const phone = this.getNodeParameter("phone", i);
                        const appName = this.getNodeParameter("appName", i);
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            phone,
                            "app-name": appName,
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/call/2fa",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                }
                // WhatsApp Operations
                if (resource === "whatsapp") {
                    if (operation === "sendTemplate") {
                        const fromPhoneMetaId = this.getNodeParameter("fromPhoneMetaId", i);
                        const phone = this.getNodeParameter("phone", i);
                        const templateId = this.getNodeParameter("templateId", i);
                        const templateData = this.getNodeParameter("templateData", i, "{}");
                        let parsedData;
                        try {
                            parsedData =
                                typeof templateData === "string"
                                    ? JSON.parse(templateData)
                                    : templateData;
                        }
                        catch (error) {
                            throw new n8n_workflow_1.NodeOperationError(this.getNode(), "Template data must be valid JSON", { itemIndex: i });
                        }
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            from_phone_meta_id: fromPhoneMetaId,
                            phones: phone,
                            templateId,
                            body: parsedData,
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/whatsapp/general/send",
                            body: JSON.stringify(body),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                    }
                    else if (operation === "sendWithoutTemplate") {
                        const fromPhoneMetaId = this.getNodeParameter("fromPhoneMetaId", i);
                        const phone = this.getNodeParameter("phone", i);
                        const messageType = this.getNodeParameter("messageType", i);
                        const messageValue = this.getNodeParameter("messageValue", i);
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            from_phone_meta_id: fromPhoneMetaId,
                            phone,
                            message: {
                                type: messageType,
                                value: messageValue,
                            },
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/whatsapp/send",
                            body: JSON.stringify(body),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                    }
                    else if (operation === "send2fa") {
                        const fromPhoneMetaId = this.getNodeParameter("fromPhoneMetaId", i);
                        const phone = this.getNodeParameter("phone", i);
                        const appName = this.getNodeParameter("appName", i);
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            from_phone_meta_id: fromPhoneMetaId,
                            phone,
                            "app-name": appName,
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/whatsapp/2fa",
                            body: JSON.stringify(body),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                    }
                }
                // URL Operations
                if (resource === "url") {
                    if (operation === "shorten") {
                        const urlLong = this.getNodeParameter("urlLong", i);
                        const alias = this.getNodeParameter("alias", i, "");
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            "url-long": urlLong,
                        };
                        if (alias) {
                            body.alias = alias;
                        }
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/url/shortener",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                    else if (operation === "statistics") {
                        const id = this.getNodeParameter("id", i);
                        responseData = await this.helpers.httpRequest({
                            method: "GET",
                            url: "https://www.onurix.com/api/v1/url/statistics",
                            qs: {
                                client: credentials.clientId,
                                key: credentials.apiKey,
                                id,
                            },
                        });
                    }
                }
                // Group Operations
                if (resource === "group") {
                    if (operation === "create") {
                        const name = this.getNodeParameter("name", i);
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            name,
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/group/create",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                    else if (operation === "update") {
                        const id = this.getNodeParameter("id", i);
                        const name = this.getNodeParameter("name", i);
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            id,
                            name,
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/group/update",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                    else if (operation === "delete") {
                        const id = this.getNodeParameter("id", i);
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            id,
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/group/delete",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                    else if (operation === "list") {
                        responseData = await this.helpers.httpRequest({
                            method: "GET",
                            url: "https://www.onurix.com/api/v1/group/list",
                            qs: {
                                client: credentials.clientId,
                                key: credentials.apiKey,
                            },
                        });
                    }
                    else if (operation === "listContacts") {
                        const id = this.getNodeParameter("id", i);
                        responseData = await this.helpers.httpRequest({
                            method: "GET",
                            url: "https://www.onurix.com/api/v1/contact/group/list",
                            qs: {
                                client: credentials.clientId,
                                key: credentials.apiKey,
                                "group-id": id,
                            },
                        });
                    }
                }
                // Contact Operations
                if (resource === "contact") {
                    if (operation === "create") {
                        const phone = this.getNodeParameter("phone", i);
                        const name = this.getNodeParameter("name", i);
                        const lastname = this.getNodeParameter("lastname", i, "");
                        const email = this.getNodeParameter("email", i, "");
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            phone,
                            name,
                        };
                        if (lastname)
                            body.lastname = lastname;
                        if (email)
                            body.email = email;
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/contact/create",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                    else if (operation === "update") {
                        const phone = this.getNodeParameter("phone", i);
                        const name = this.getNodeParameter("name", i);
                        const lastname = this.getNodeParameter("lastname", i, "");
                        const email = this.getNodeParameter("email", i, "");
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            phone,
                            name,
                        };
                        if (lastname)
                            body.lastname = lastname;
                        if (email)
                            body.email = email;
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/contact/update",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                    else if (operation === "delete") {
                        const phone = this.getNodeParameter("phone", i);
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            phone,
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/contact/delete",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                    else if (operation === "associateGroup") {
                        const phone = this.getNodeParameter("phone", i);
                        const groupId = this.getNodeParameter("groupId", i);
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            phone,
                            "group-id": groupId,
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/contact/group/associate",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                    else if (operation === "disassociateGroup") {
                        const phone = this.getNodeParameter("phone", i);
                        const groupId = this.getNodeParameter("groupId", i);
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            phone,
                            "group-id": groupId,
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/contact/group/disassociate",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                }
                // General Operations
                if (resource === "general") {
                    if (operation === "balance") {
                        responseData = await this.helpers.httpRequest({
                            method: "GET",
                            url: "https://www.onurix.com/api/v1/balance",
                            qs: {
                                client: credentials.clientId,
                                key: credentials.apiKey,
                            },
                        });
                    }
                    else if (operation === "security") {
                        const phone = this.getNodeParameter("phone", i);
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            phone,
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/security",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                    else if (operation === "verifyMessage") {
                        const id = this.getNodeParameter("id", i);
                        responseData = await this.helpers.httpRequest({
                            method: "GET",
                            url: "https://www.onurix.com/api/v1/verification/message",
                            qs: {
                                client: credentials.clientId,
                                key: credentials.apiKey,
                                id,
                            },
                        });
                    }
                    else if (operation === "verify2fa") {
                        const phone = this.getNodeParameter("phone", i);
                        const appName = this.getNodeParameter("appName", i);
                        const code = this.getNodeParameter("code", i);
                        const body = {
                            client: credentials.clientId,
                            key: credentials.apiKey,
                            phone,
                            "app-name": appName,
                            code,
                        };
                        responseData = await this.helpers.httpRequest({
                            method: "POST",
                            url: "https://www.onurix.com/api/v1/verification/code",
                            body,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                        });
                    }
                }
                returnData.push(responseData);
            }
            catch (error) {
                if (this.continueOnFail()) {
                    const errorMessage = error instanceof Error ? error.message : "Unknown error";
                    returnData.push({ error: errorMessage });
                    continue;
                }
                throw error;
            }
        }
        return [this.helpers.returnJsonArray(returnData)];
    }
}
exports.Onurix = Onurix;
