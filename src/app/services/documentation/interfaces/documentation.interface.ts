
export interface Documentation {
    title: string;
    description: string;
    contents: DocumentationContent[];
    path: string,
    index: number;
    api_rest_docs: ApiRest[];
    websocket_docs: WebSocketDocumentation[];
    mqtt_docs: MqttDocumentation[];
    type: 'documentation';
}

export interface DocumentationContent {
    type: string;
    content: any;
}

export interface WebSocketDocumentation {
    type: 'websocket';
    title: string;
    description: string;
    index: number;
    path: string;
    version:string;
    user_type: 'workspace' | 'smartmod';
    contents: DocumentationContent[];
    auth_type: 'smartmod_user_token' | 'workspace_user_token';
    auth_method: 'Bearer' | 'x-api-key' | 'websocket-token';
    request: any,
    auth_description: string;
    event: string;
    events: Event[];
    connection: WebSocketConnection;

}

export interface WebsocketError {
    error: string;
    description: string;
    contents?: DocumentationContent[];
}

export interface Event {
    event: string;
    title: string;
    description: string;
    path: string;
    contents: DocumentationContent[];
    data_request: {
        data: WebSocketDataRequest
    };
    data_response: any;
    sub_events?: Event[];
    errors?: WebsocketError[];
    type?:'websocket'
}

export interface WebSocketConnection {
    host: string;
    port: string;
}

export interface WebSocketDataRequest {
    api_key?: string;
    user_token?: string;
    fields?: { client?: string, variable?: string };
    prompt?: string;
    query?: any | { client: string, _measurement?: string, _field?: string };
    metadata?: any;
}

export interface ApiRest {
    type: 'api-rest';
    title: string;
    description: string;
    contents: DocumentationContent[];
    index: number;
    path: string;
    user_type: 'workspace' | 'smartmod' | 'api';
    host: string;
    port: string;
    version: string;
    endpoints: ApiRestEndpoint[];
}

export interface ApiRestEndpoint {
    endpoint: string;
    title: string;
    description: string;
    contents: DocumentationContent[];
    methods: ApiRestMethods[];
    sub_endpoints?: ApiRestEndpoint[];
    parameters?: any;
    type?:'api-rest'
}

export interface ApiRestMethods {
    method: string;
    title: string;
    description: string;
    contents: DocumentationContent[];
    body?: any;
    parameters?: any,
    user_type: 'workspace' | 'smartmod' | 'api';
    auth_method: 'Bearer' | 'x-api-key' | 'websocket-token' | false;
    responses: { status: number, description: string, contents: DocumentationContent[], body: any }[]
}

export interface AuthMethod {
    user_type: 'api_key' | 'workspace_user_token' | 'smartmod_user_token';
    auth_method: 'Bearer' | 'x-api-key' | 'websocket-token';
    description: string;
    contents: DocumentationContent[];
    request: any;
    response: any;
    error: any;
}

export interface MqttDocumentation {
    type: 'mqtt';
    title: string;
    description: string;
    contents: DocumentationContent[];
    path: string;
    host: string;
    version: string;
    ports: MqttPorts[];
    user_type: 'workspace' | 'smartmod';
    auth_type: 'user_password';
    index:number;
    pubsub: MqttDataPubSub[];
}

export interface MqttPorts{
    port: number;
    auth_type?: string;
}

export interface MqttDataPubSub {
    topic: string;
    title: string;
    path: string;
    description: string;
    contents: DocumentationContent[];
    index:number
    parameters: { workspace: string, user: string, client: boolean, type:'measurement' } | any;
    type: 'publish' | 'subscribe';
    payload: string | any;
}


