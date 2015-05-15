define(["require", "exports", 'parser'], function (require, exports, parser) {
    var painters;
    (function () {
        var loader = new parser.PainterLoader();
        var painterSelect = document.getElementById('painter');
        painterSelect.onchange = function () { return loader.loadPainter(); };
        loader.load("../FamousPainters/JSON/famousPainters.json");
    })();
});
//# sourceMappingURL=app.js.map