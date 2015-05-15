///<reference path="../../tools/typings/typescriptApp.d.ts"/>
import interfaces = require('interfaces');
import painter = require('painter');

export class Renderer {

    renderPainterSelect(painters: painter.Painters<interfaces.IPainter>) {
        var painterSelect = document.getElementById('painter');
        painters.items.forEach((painter) => {
            var opt = document.createElement('option');
            opt.setAttribute('title', painter.name);
            opt.innerHTML = painter.name;
            painterSelect.appendChild(opt);
        });
    }

    renderPainter(painter: interfaces.IPainter) {
        var painterNameElement = (<HTMLDivElement> document.getElementById('paintername'));
        var painterStyleElement = (<HTMLDivElement> document.getElementById('painterstyle'));

        painterNameElement.innerHTML = '<p>' + painter.name + '</p>';
        painterStyleElement.innerHTML = '<p>' + painter.style + '</p>';

        this.renderPaintings(painter);
    }

    renderPaintings(painter: interfaces.IPainter) {
        var paintings = (<HTMLDivElement> document.getElementById('paintings'));
        var html = '';
        for (var i = 0, len = painter.examples.length; i < len; i++) {
            html += '<li>' + painter.examples[i].name + '</li>';
        }

        paintings.innerHTML = html;
    }
}