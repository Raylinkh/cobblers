import { Persona } from "./personas.js";
export interface CouncilConfig {
    agents: number;
    rounds: number;
    models: string[];
    stream?: boolean;
    onToken?: (token: string) => void;
    onRoundStart?: (round: number, persona: Persona) => void;
}
export interface Turn {
    persona: Persona;
    model: string;
    content: string;
}
export interface Round {
    number: number;
    turns: Turn[];
}
export interface DeliberationResult {
    question: string;
    rounds: Round[];
    synthesis: string;
}
export declare class Council {
    private client;
    private config;
    private personas;
    constructor(config?: Partial<CouncilConfig>);
    deliberate(question: string): Promise<DeliberationResult>;
    private buildPrompt;
    private synthesize;
    review(filePath: string, fileContent: string): Promise<DeliberationResult>;
    decide(options: string[]): Promise<DeliberationResult>;
}
export declare function formatResult(result: DeliberationResult, color?: boolean): string;
