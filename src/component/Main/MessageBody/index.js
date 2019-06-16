import React,{Component} from 'react';
import Message from './Message';
import './index.scss';

export default class MessageBody extends Component {
    render() {
        let messages = this.props.messages.map(message => {
            return <Message message={message} />
        });
        return (
            <div className="message-body">
                {messages}
            </div>
        )
    }
}
