define(["require", "exports"], function (require, exports) {
    var Painter = (function () {
        function Painter(painter) {
            this.name = painter.name;
            this.style = painter.style;
            this.examples = painter.examples;
        }
        return Painter;
    })();
    exports.Painter = Painter;
    var Painters = (function () {
        function Painters() {
            this.items = [];
        }
        return Painters;
    })();
    exports.Painters = Painters;
});
//# sourceMappingURL=painter.js.map