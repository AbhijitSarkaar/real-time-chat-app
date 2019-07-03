import React,{Component} from 'react';
import Title from './Title';
import MessageBody from './MessageBody';
import MessageInput from './MessageInput';
import io from 'socket.io-client';
import './index.scss';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.socket = io('http://localhost:5000').connect();
        this.state = {
            messages: []
        }
    }
    onSend = (text) => {
        let messages = [...this.state.messages];
        messages.push({
            senderId: this.props.username,
            text: text
        });
        this.setState({
            messages
        });
    }
    render() {
        return (
            <div className="main">
                <Title />
                <MessageBody messages={this.state.messages} />
                <MessageInput onSend={this.onSend} />
            </div>
        )
    }
}
