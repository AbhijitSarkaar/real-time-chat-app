import React,{Component} from 'react';
import './index.scss';

export default class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    onSubmit = () => {
        this.props.onSend(this.state.text);
        this.setState({
            text: ''
        });
    }
    render() {
        return (
            <div className="message-input">
                <input 
                    placeholder={'Enter your message...'}
                    value={this.state.text}
                    onChange={(e) => this.setState({text: e.target.value})}
                />
                <div className="submit" onClick={this.onSubmit}>
                    <p>Submit</p>
                </div>
            </div>
        )
    }
}
