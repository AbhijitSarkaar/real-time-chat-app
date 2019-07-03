import React,{Component} from 'react';
import Title from './Title';
import MessageBody from './MessageBody';
import MessageInput from './MessageInput';
import io from 'socket.io-client';
import './index.scss';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.socket = io('http://localhost:5000', { query: `username=${this.props.username}` }).connect();
        //sending the username to the server when the connection is established
        this.state = {
            messages: []
        }
        //
        this.socket.on('server', message => {
            this.addMessage(message);
        });
    }
    addMessage = (message) => {
        let messages = [...this.state.messages];
        messages.push(message);
        this.setState({
            messages
        });
    }
    onSend = (text) => {
        let message = {
            username: this.props.username,
            message: text
        }
        this.socket.emit('client', message);
        this.addMessage(message);
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
