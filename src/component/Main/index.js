import React,{Component} from 'react';
import Title from './Title';
import MessageBody from './MessageBody';
import './index.scss';

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <Title />
                <MessageBody />
            </div>
        )
    }
}
