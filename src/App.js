import { Component } from "react";
import "./App.css";

import Container from "./Components/Container";
import Sections from "./Components/Sections/Section";
import Notification from "./Components/Notification/Notifications";
import FeedbackOptions from "./Components/Options/Options";
import Stats from "./Components/stats/stats";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeStats = (name) => {
    this.setState((prev) => ({
      [name]: prev[name] + 1,
    }));
  };

  getTotal = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  getPositivePercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.getTotal()) * 100);
  };

  render() {
    return (
      <>
        <Container>
          <Sections>
            <FeedbackOptions onChangeStats={this.handleChangeStats} />
            {this.getTotal() ? (
              <Stats
                stats={this.state}
                total={this.getTotal()}
                getPositive={this.getPositivePercentage()}
              />
            ) : (
              <Notification message="𝙽𝚘 𝚏𝚎𝚎𝚍𝚋𝚊𝚌𝚔 𝚐𝚒𝚟𝚎𝚗" />
            )}
          </Sections>
        </Container>
      </>
    );
  }
}

export default App;
