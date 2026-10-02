/*
nombre: se copia directamente porque es un dato simple e independiente de la unidad original.

vida: se copia directamente porque es un valor propio de cada unidad y puede modificarse sin 
afectar a la original.

habilidades: se clona cada elemento porque son objetos que pertenecen a la unidad y podrían 
modificarse de manera independiente.

inventario: se clona cada `Objeto` porque los objetos equipados deben ser independientes entre 
la unidad original y sus clones.

aspecto: se comparte deliberadamente porque es inmutable. Como su color y sprite no pueden 
modificarse, no es necesario crear una copia; todas las unidades pueden referenciar el mismo 
Aspecto sin riesgo de que una modificación afecte a las demás.
*/

class Habilidad {
    constructor(private nombre:string) {}

    clonar() : Habilidad {
        return new Habilidad (this.nombre);
    }
}

class Objeto {
    constructor (private nombre:string){}

    clonar() : Objeto {
        return new Objeto (this.nombre);
    }
}

class Aspecto {
    constructor (
        public readonly color:string, 
        public readonly sprite:string
    ){}
}

class Unidad {
    constructor(
        private nombre: string,
        private vida: number,
        private habilidades: Habilidad[],
        private inventario: Objeto[],
        private readonly aspecto: Aspecto, // inmutable: color y sprite
    ) {}

    clonar(): Unidad {
        const nuevasHabilidades:Habilidad[] = [];
        const nuevoInventario:Objeto[] = [];

        for (const habilidad of this.habilidades) {
            nuevasHabilidades.push(habilidad.clonar());
        }

        for (const objeto of this.inventario) {
            nuevoInventario.push(objeto.clonar());
        }

        return new Unidad (
            this.nombre,
            this.vida,
            nuevasHabilidades,
            nuevoInventario,
            this.aspecto
        )
    }

    recibirDanio(n: number): void { this.vida -= n; }

    equipar(o: Objeto): void { this.inventario.push(o); }
}



// Prueba de dos Unidades clonadas a partir de la misma plantilla
const habilidad = new Habilidad("Disparo preciso");
const objeto = new Objeto("Arco de élite");
const aspecto = new Aspecto("verde", "arquero-elite.png");

const plantilla = new Unidad(
    "Arquero de Élite",
    100,
    [habilidad],
    [objeto],
    aspecto
);

const unidad1 = plantilla.clonar();
const unidad2 = plantilla.clonar();

unidad1.recibirDanio(30);

console.log("Unidad 1:", unidad1);
console.log("Unidad 2:", unidad2);
console.log("Plantilla:", plantilla);

// Prueba para verificar que inventario es independiente
const objeto2 = new Objeto("Flechas élite");
unidad1.equipar(objeto2);

console.log("Unidad 1:", unidad1);
console.log("Unidad 2:", unidad2);