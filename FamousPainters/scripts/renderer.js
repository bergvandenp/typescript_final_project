define(["require", "exports"], function (require, exports) {
    var Renderer = (function () {
        function Renderer() {
        }
        Renderer.prototype.renderPainterSelect = function (painters) {
            var painterSelect = document.getElementById('painter');
            painters.items.forEach(function (painter) {
                var opt = document.createElement('option');
                opt.setAttribute('title', painter.name);
                opt.innerHTML = painter.name;
                painterSelect.appendChild(opt);
            });
        };
        Renderer.prototype.renderPainter = function (painter) {
            var painterNameElement = document.getElementById('paintername');
            var painterStyleElement = document.getElementById('painterstyle');
            painterNameElement.innerHTML = '<p>' + painter.name + '</p>';
            painterStyleElement.innerHTML = '<p>' + painter.style + '</p>';
            this.renderPaintings(painter);
        };
        Renderer.prototype.renderPaintings = function (painter) {
            var paintings = document.getElementById('paintings');
            var html = '';
            for (var i = 0, len = painter.examples.length; i < len; i++) {
                html += '<li>' + painter.examples[i].name + '</li>';
            }
            paintings.innerHTML = html;
        };
        return Renderer;
    })();
    exports.Renderer = Renderer;
});
//# sourceMappingURL=renderer.js.map