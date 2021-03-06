import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';

/*import styled from 'styled-components';
const RandomBlock  = styled.div`
background-color: #fff;
padding: 25px 25px 15px 25px;
margin-bottom: 40px;
`;

const RandomCharacter  = styled.h4`
margin-bottom: 20px;
    text-align: center;
`;

const Term  = styled.span`
font-weight: bold;
`;

 */
/*
export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlock>
                <RandomCharacter>Random Character: John</RandomCharacter>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Gender </Term>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Born </Term>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Died </Term>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Culture </Term>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </RandomBlock>
        );
    }
}
*/


export default class RandomChar extends Component {

    constructor(){
        super();
        this.updateChar();
    }
    gotService = new gotService();
    state = {
      char:{},
      loading: true
    }
    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    updateChar(){
        const id = Math.floor(Math.random()*140 + 11);
        this.gotService.getCharacter(id)
        .then(this.onCharLoaded);
    }

    render() {
        const{ char: {name, gender, born, died, culture}, loading } = this.state;
        if (loading){
            return<Spinner/>
        }
        return (
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
