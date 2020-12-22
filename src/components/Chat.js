import React, { Component } from 'react';

import './Chat.css';

class Chat extends Component {
  render() {
    return (
      <div className="chat__container">
        <div className="chat__messageBody">
          <div className="chat__header">
            <div className="chat__userInfo">
              <img
                alt={`Photo of ${this.props.message.name}`}
                className="chat__image"
                src={this.props.message.imageURL}
              />
              <div>
                <h1>{this.props.message.name}</h1>
                <label>{this.props.message.title}</label>
              </div>
            </div>

            <a href="#">
              <img alt="Dismiss Chat" src="/assets/iconClose.png" />
            </a>
          </div>

          <p className="chat_message">{this.props.message.message}</p>
        </div>
        <div className="chat__reply">
          <input type="text" placeholder="Type your message…" />
          <button>Send</button>
        </div>
      </div>
    );
  }
}

export { Chat };
