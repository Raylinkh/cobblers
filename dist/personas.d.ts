export interface Persona {
    name: string;
    role: string;
    systemPrompt: string;
}
export declare const DEFAULT_PERSONAS: Persona[];
export declare function getPersonas(count: number): Persona[];
