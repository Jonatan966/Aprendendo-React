'use strict';

const e = React.createElement;

class BotaoJSX extends React.Component{
    constructor(props) {
        super(props);
        this.state = {texto: 0};
    }
    render() {
        return(
            <button onClick={() => this.setState({texto: this.state.texto+1})}>
                <h1>Você clicou em mim {this.state.texto} vezes</h1>
            </button>
        );
    }
}

const coiso = document.querySelector("#coiso");
ReactDOM.render(e(BotaoJSX), coiso);