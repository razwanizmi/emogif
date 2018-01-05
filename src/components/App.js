import React, { Component } from "react";
import { toEmoji } from "../helpers/emoji";
import "./style.css";

class App extends Component {
  state = {
    phrase: "",
    currentIndex: 0,
    speaking: false
  };

  handleChange = e => {
    const phrase = e.target.value;
    this.setState(() => ({ phrase }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { phrase } = this.state;

    this.setState(() => ({ speaking: true }));

    if (phrase.length === 0) {
      return this.setState(() => ({ speaking: false }));
    }

    this.interval = setInterval(() => {
      this.setState(
        prevState => {
          if (prevState.currentIndex !== phrase.length) {
            return {
              currentIndex: prevState.currentIndex + 1
            };
          }
          return prevState;
        },
        () => {
          if (this.state.currentIndex === phrase.length) {
            clearInterval(this.interval);
            this.setState(() => ({
              speaking: false,
              currentIndex: 0,
              phrase: ""
            }));
          }
        }
      );
    }, 97);
  };

  phraseArray = () => {
    return this.state.phrase.split("");
  };

  render() {
    const { phrase, currentIndex, speaking } = this.state;

    return (
      <div className="emogif-container">
        <div>
          <span className="emogif-face">
            {speaking ? toEmoji(this.phraseArray()[currentIndex]) : "🙂"}
          </span>
        </div>
        <div className="emogif-form-container">
          <form className="emogif-form" onSubmit={this.handleSubmit}>
            <div className="mdl-textfield">
              <input
                className="mdl-textfield__input mld-textfield__input--emogif"
                type="text"
                value={phrase}
                placeholder="What do you want me to say?"
                onChange={this.handleChange}
              />
            </div>
            <button
              className="mdl-button mdl-button--raised mdl-button--accent"
              disabled={speaking}
            >
              Talk
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
