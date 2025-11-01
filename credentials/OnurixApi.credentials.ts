import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class OnurixApi implements ICredentialType {
	name = 'onurixApi';
	displayName = 'Onurix API';
	documentationUrl = 'https://docs.onurix.com/';
	properties: INodeProperties[] = [
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
			description: 'Your Onurix Client ID (found in API Security section)',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'Your Onurix API Key (found in API Security section)',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			body: {
				client: '={{$credentials.clientId}}',
				key: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://www.onurix.com/api/v1',
			url: '/balance',
			method: 'GET',
			qs: {
				client: '={{$credentials.clientId}}',
				key: '={{$credentials.apiKey}}',
			},
		},
	};
}
