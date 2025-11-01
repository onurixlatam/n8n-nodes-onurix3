"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnurixApi = void 0;
class OnurixApi {
    constructor() {
        this.name = "onurixApi";
        this.displayName = "Onurix API";
        this.documentationUrl = "https://docs.onurix.com/";
        this.properties = [
            {
                displayName: "Client ID",
                name: "clientId",
                type: "string",
                default: "",
                required: true,
                description: "Your Onurix Client ID (found in API Security section)",
            },
            {
                displayName: "API Key",
                name: "apiKey",
                type: "string",
                typeOptions: {
                    password: true,
                },
                default: "",
                required: true,
                description: "Your Onurix API Key (found in API Security section)",
            },
        ];
        this.authenticate = {
            type: "generic",
            properties: {
                body: {
                    client: "={{$credentials.clientId}}",
                    key: "={{$credentials.apiKey}}",
                },
            },
        };
        this.test = {
            request: {
                baseURL: "https://www.onurix.com/api/v1",
                url: "/balance",
                method: "GET",
                qs: {
                    client: "={{$credentials.clientId}}",
                    key: "={{$credentials.apiKey}}",
                },
            },
        };
    }
}
exports.OnurixApi = OnurixApi;
