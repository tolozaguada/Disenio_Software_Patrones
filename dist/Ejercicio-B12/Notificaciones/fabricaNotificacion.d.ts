import type { Redactor, Emisor } from "./producto.js";
export interface FabricaNotificacion {
    crearRedactor(): Redactor;
    crearEmisor(): Emisor;
}
export declare class FabricaMail implements FabricaNotificacion {
    crearRedactor(): Redactor;
    crearEmisor(): Emisor;
}
export declare class FabricaMensajeria implements FabricaNotificacion {
    crearRedactor(): Redactor;
    crearEmisor(): Emisor;
}
//# sourceMappingURL=fabricaNotificacion.d.ts.map