import React, {Component} from 'react';
import "../Estilos/Header.css";

class Header extends Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <nav>
                <ul>
                    <li>{this.props.titulo}</li>
                    <li>Um link</li>
                    <li>Outro link</li>
                    <li>Mais um link</li>
                </ul>
            </nav>
        )
    }
}

export default Header;