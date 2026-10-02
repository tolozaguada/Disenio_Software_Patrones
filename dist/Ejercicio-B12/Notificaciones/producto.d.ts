export interface Redactor {
    redactar(mensaje: string): string;
}
export interface Emisor {
    enviar(mensaje: string): void;
}
export declare class RedactorMail implements Redactor {
    redactar(mensaje: string): string;
}
export declare class RedactorMensajeria implements Redactor {
    redactar(mensaje: string): string;
}
export declare class EmisorMail implements Emisor {
    enviar(mensaje: string): void;
}
export declare class EmisorMensajeria implements Emisor {
    enviar(mensaje: string): void;
}
//# sourceMappingURL=producto.d.ts.map