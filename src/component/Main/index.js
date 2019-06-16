import React,{Component} from 'react';
import Title from './Title';
import MessageBody from './MessageBody';
import './index.scss';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    senderId: "perborgen",
                    text: "who'll win?"
                  },
                  {
                    senderId: "janedoe",
                    text: "who'll win?"
                  }
            ]
        }
    }
    render() {
        return (
            <div className="main">
                <Title />
                <MessageBody messages={this.state.messages} />
            </div>
        )
    }
}
