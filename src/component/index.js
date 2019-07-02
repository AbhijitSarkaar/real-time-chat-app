import React, {Component} from 'react';
import Main from './Main';
import './index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameSubmitted: false,
      username: ''
    }
  }
  render() {
    if(this.state.userNameSubmitted) {
      return (
        <div className="chat-app">
            <Main username={this.state.username} />
        </div>
      );
    }
    return <div className="chat-app">
              <div className="username-input">
                  <div className="username-header">
                    <p> Chat application  </p>
                  </div>
                  <div className="user-input">
                    <input placeholder={'Enter your username...'} value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
                    <div className="submit" onClick={() => this.state.username.length && this.setState({userNameSubmitted: true})}>
                      <p>Submit</p>
                    </div>
                  </div>
              </div>
          </div>
  }
}

export default App;
