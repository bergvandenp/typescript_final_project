///<reference path="interfaces.ts"/>
import interfaces = require('interfaces');

export class Painting implements interfaces.IPainting {

    name:string;

    constructor(painting:interfaces.IPainting) {
        this.name = painting.name;
    }
}