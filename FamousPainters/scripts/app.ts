//Add your initialization logic here
///<reference path="../../tools/typings/typescriptApp.d.ts"/>
import interfaces = require('interfaces');
import painter = require('painter');
import parser = require('parser');
import renderer = require('renderer');

var painters: painter.Painters<interfaces.IPainter>;

(()=>{
    var loader = new parser.PainterLoader();
    var painterSelect = (<HTMLSelectElement> document.getElementById('painter'));
    painterSelect.onchange = () => loader.loadPainter();

    loader.load("../FamousPainters/JSON/famousPainters.json");

})();