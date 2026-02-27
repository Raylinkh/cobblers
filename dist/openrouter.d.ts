export interface Message {
    role: "system" | "user" | "assistant";
    content: string;
}
export interface ChatCompletionResponse {
    id: string;
    choices: Array<{
        message: {
            role: string;
            content: string;
        };
        finish_reason: string;
    }>;
    model: string;
    usage?: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
}
export declare const DEFAULT_MODELS: string[];
export interface ModelInfo {
    id: string;
    name: string;
    pricing: {
        prompt: number;
        completion: number;
    };
    context_length: number;
    top_provider?: {
        is_moderated: boolean;
    };
}
export interface ModelsResponse {
    data: ModelInfo[];
}
export declare function fetchModels(options?: {
    free?: boolean;
    maxCost?: number;
    limit?: number;
}): Promise<ModelInfo[]>;
export declare function formatModelInfo(model: ModelInfo): string;
export declare class OpenRouterClient {
    private apiKey;
    private baseUrl;
    constructor(apiKey?: string);
    chat(messages: Message[], model: string, options?: {
        temperature?: number;
        maxTokens?: number;
    }): Promise<string>;
    chatStream(messages: Message[], model: string, options?: {
        temperature?: number;
        maxTokens?: number;
    }): AsyncGenerator<string>;
}
