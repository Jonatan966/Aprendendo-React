const e = React.CreateElement;

class Item extends React.Component{
    render() {
        return (
            <button>
                oiê {this.props.texto}
            </button>
        );
    }
}

class Label extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>{this.props.conteudo}</h1>);
    }
}

class MudaLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {umTexto: "inicial"};
        this.mudarTexto = this.mudarTexto.bind(this);
    }

    mudarTexto = (e) => {
        this.setState({
            umTexto: e.target.value
        });
    }
    render() {
        return (
            <div class="mudaLabel">
                <Label conteudo={this.state.umTexto}/>
                <input type="text" onChange={this.mudarTexto}></input>
            </div>
        );
    }
}
ReactDOM.render(<Item texto="Sr. Botão"/>, document.getElementById("item"));
ReactDOM.render(<MudaLabel/>, document.getElementById("textoDinamico"));