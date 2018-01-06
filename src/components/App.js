import React, { Component } from "react";
import { toEmoji } from "../helpers/emoji";
import "./style.css";

class App extends Component {
  state = {
    currentIndex: 0,
    phrase: "",
    speaking: false
  };

  handleChange = e => {
    const phrase = e.target.value;
    this.setState(() => ({ phrase }));
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.phrase) {
      return;
    }

    this.setState(() => ({ speaking: true }));
    this.interval = setInterval(() => {
      this.animate();
    }, 97);
  };

  animate = () => {
    const { currentIndex, phrase } = this.state;

    if (currentIndex < phrase.length - 1) {
      return this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }));
    }

    clearInterval(this.interval);
    this.setState(() => ({
      currentIndex: 0,
      phrase: "",
      speaking: false
    }));
  };

  render() {
    const { phrase, currentIndex, speaking } = this.state;

    return (
      <div className="emogif">
        <div>
          <span className="emogif__face">
            {speaking ? toEmoji(phrase[currentIndex]) : "🙂"}
          </span>
        </div>
        <form className="emogif__form" onSubmit={this.handleSubmit}>
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
    );
  }
}

export default App;
