/// <reference path="typings/jquery.d.ts" />
///<reference path="../../tools/typings/typescriptApp.d.ts"/>
import $ = require('jquery');
import interfaces = require('interfaces');
import painter = require('painter');
import painting = require('painting');
import renderer = require('renderer');

export class PainterLoader {
    painters: painter.Painters<interfaces.IPainter>;
    renderer: renderer.Renderer;

    constructor() {
        this.painters = new painter.Painters<interfaces.IPainter>();
        this.renderer = new renderer.Renderer();
    }

    load(url :string) {
        $.getJSON(url, (data) => {
            this.mapData(data);
        });
    }

    mapData(data) {
        var paintersData:any[] = data.famousPainters;

        paintersData.forEach((painterData) => {
            var painterObject = new painter.Painter({
                name: painterData.name,
                style: painterData.style,
                examples: this.getExamplePaintings(painterData)
            });
            this.painters.items.push(painterObject);
        });
        this.renderer.renderPainterSelect(this.painters);
    }

    getExamplePaintings(painterData):interfaces.IPainting[] {
        return painterData.examples.map((example) => {
            return new painting.Painting({name: example});
        });
    }

    loadPainter() {
        var el = (<HTMLSelectElement> document.getElementById('painter'));
        try {
            var painter = this.painters.items
                //Find selected item by name
                .filter(item => item.name === el.value)
                //return the item
                .reduce(item => new painter.Painter({
                    name: el.value,
                    style: item.style,
                    examples: item.examples
                }));
            this.renderer.renderPainter(painter);
        }
        catch (ex) { alert(ex.message) }
    }
}