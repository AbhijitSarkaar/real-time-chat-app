import React,{Component} from 'react';
import './index.scss';

export default class Message extends Component {
    render() {
        return (
            <div className="message">
                <p className="user-name">{this.props.message.username}</p>
                <div className="text-div">
                    <p className="text">{this.props.message.message}</p>
                </div>
            </div>
        )
    }
}
