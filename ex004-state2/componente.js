'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var BotaoJSX = function (_React$Component) {
    _inherits(BotaoJSX, _React$Component);

    function BotaoJSX(props) {
        _classCallCheck(this, BotaoJSX);

        var _this = _possibleConstructorReturn(this, (BotaoJSX.__proto__ || Object.getPrototypeOf(BotaoJSX)).call(this, props));

        _this.state = { texto: 0 };
        return _this;
    }

    _createClass(BotaoJSX, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "button",
                { onClick: function onClick() {
                        return _this2.setState({ texto: _this2.state.texto + 1 });
                    } },
                React.createElement(
                    "h1",
                    null,
                    "Voc\xEA clicou em mim ",
                    this.state.texto,
                    " vezes"
                )
            );
        }
    }]);

    return BotaoJSX;
}(React.Component);

var coiso = document.querySelector("#coiso");
ReactDOM.render(e(BotaoJSX), coiso);