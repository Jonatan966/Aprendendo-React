var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.CreateElement;

var Item = function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                null,
                "oi\xEA ",
                this.props.texto
            );
        }
    }]);

    return Item;
}(React.Component);

var Label = function (_React$Component2) {
    _inherits(Label, _React$Component2);

    function Label(props) {
        _classCallCheck(this, Label);

        return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).call(this, props));
    }

    _createClass(Label, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                null,
                this.props.conteudo
            );
        }
    }]);

    return Label;
}(React.Component);

var MudaLabel = function (_React$Component3) {
    _inherits(MudaLabel, _React$Component3);

    function MudaLabel(props) {
        _classCallCheck(this, MudaLabel);

        var _this3 = _possibleConstructorReturn(this, (MudaLabel.__proto__ || Object.getPrototypeOf(MudaLabel)).call(this, props));

        _this3.mudarTexto = function (e) {
            _this3.setState({
                umTexto: e.target.value
            });
        };

        _this3.state = { umTexto: "inicial" };
        _this3.mudarTexto = _this3.mudarTexto.bind(_this3);
        return _this3;
    }

    _createClass(MudaLabel, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "mudaLabel" },
                React.createElement(Label, { conteudo: this.state.umTexto }),
                React.createElement("input", { type: "text", onChange: this.mudarTexto })
            );
        }
    }]);

    return MudaLabel;
}(React.Component);

ReactDOM.render(React.createElement(Item, { texto: "Sr. Botão" }), document.getElementById("item"));
ReactDOM.render(React.createElement(MudaLabel, null), document.getElementById("textoDinamico"));