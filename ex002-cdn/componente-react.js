'use strict';

const e = React.createElement;

class GrandeBotao extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e(
        'button', 
        {}, 
        'Uau! Você clicou em mim'
      );
      //return 'Você clicou neste maravilhoso botão cujo criador foi o React!.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Sou um botão feito no React!'
    );
  }
}

// Este trecho é responsável por encontrar a div que foi adicionada e inserir o componente React dentro dele
const domContainer = document.querySelector('#container-react');
ReactDOM.render(e(GrandeBotao), domContainer);