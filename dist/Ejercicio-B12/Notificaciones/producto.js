export class RedactorMail {
    redactar(mensaje) {
        return `Correo institucional: ${mensaje}`;
    }
}
export class RedactorMensajeria {
    redactar(mensaje) {
        return `Mensaje de mensajería: ${mensaje}`;
    }
}
export class EmisorMail {
    enviar(mensaje) {
        console.log(`Correo enviado. Mensaje: ${mensaje}`);
    }
}
export class EmisorMensajeria {
    enviar(mensaje) {
        console.log(`Mensaje enviado. Mensaje: ${mensaje}`);
    }
}
//# sourceMappingURL=producto.js.map