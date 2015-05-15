///<reference path="../../tools/typings/typescriptApp.d.ts"/>
import interfaces = require('interfaces');

export class Painter implements interfaces.IPainter{
    name: string;
    style: string;
    examples: interfaces.IPainting[];

    constructor(painter: interfaces.IPainter) {
        this.name = painter.name;
        this.style = painter.style;
        this.examples = painter.examples;
    }
}

export class Painters<T> {
    items: T[] = [];
}
