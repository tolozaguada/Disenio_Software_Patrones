export interface Redactor{
    redactar(mensaje: string): string
}

export interface Emisor{
    enviar(mensaje: string): void
}


export class RedactorMail implements Redactor{
    redactar(mensaje: string): string {
        return `Correo institucional: ${mensaje}`
    }
}

export class RedactorMensajeria implements Redactor{
    redactar(mensaje: string): string {
        return `Mensaje de mensajería: ${mensaje}`
    }
}


export class EmisorMail implements Emisor{
    enviar(mensaje: string): void {
        console.log(`Correo enviado. Mensaje: ${mensaje}`);
    }
}

export class EmisorMensajeria implements Emisor{
    enviar(mensaje: string): void {
        console.log(`Mensaje enviado. Mensaje: ${mensaje}`);
    }
}