import React,{Component} from 'react';
import './index.scss';

export default class Message extends Component {
    render() {
        return (
            <div className="message">
                <p className="user-name">{this.props.message.senderId}</p>
                <div className="text-div">
                    <p className="text">{this.props.message.text}</p>
                </div>
            </div>
        )
    }
}
