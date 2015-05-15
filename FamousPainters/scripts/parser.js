define(["require", "exports", 'jquery', 'painter', 'painting', 'renderer'], function (require, exports, $, painter, painting, renderer) {
    var PainterLoader = (function () {
        function PainterLoader() {
            this.painters = new painter.Painters();
            this.renderer = new renderer.Renderer();
        }
        PainterLoader.prototype.load = function (url) {
            var _this = this;
            $.getJSON(url, function (data) {
                _this.mapData(data);
            });
        };
        PainterLoader.prototype.mapData = function (data) {
            var _this = this;
            var paintersData = data.famousPainters;
            paintersData.forEach(function (painterData) {
                var painterObject = new painter.Painter({
                    name: painterData.name,
                    style: painterData.style,
                    examples: _this.getExamplePaintings(painterData)
                });
                _this.painters.items.push(painterObject);
            });
            this.renderer.renderPainterSelect(this.painters);
        };
        PainterLoader.prototype.getExamplePaintings = function (painterData) {
            return painterData.examples.map(function (example) {
                return new painting.Painting({ name: example });
            });
        };
        PainterLoader.prototype.loadPainter = function () {
            var el = document.getElementById('painter');
            try {
                var painter = this.painters.items.filter(function (item) { return item.name === el.value; }).reduce(function (item) { return new painter.Painter({
                    name: el.value,
                    style: item.style,
                    examples: item.examples
                }); });
                this.renderer.renderPainter(painter);
            }
            catch (ex) {
                alert(ex.message);
            }
        };
        return PainterLoader;
    })();
    exports.PainterLoader = PainterLoader;
});
//# sourceMappingURL=parser.js.map