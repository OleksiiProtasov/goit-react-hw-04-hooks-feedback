import { useState } from "react";

import Sections from "./Components/Sections/Section";
import Notification from "./Components/Notification/Notifications";
import FeedbackOptions from "./Components/Options/Options";
import Stats from "./Components/stats/stats";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allCount = { good, neutral, bad };

  const handleChangeStats = (name) => {
    switch (name) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const getTotal = good + bad + neutral;

  const getPositivePercentage = () => Math.round((good / getTotal) * 100);

  return (
    <>
      <Sections>
        <FeedbackOptions onChangeStats={handleChangeStats} />
        {getTotal ? (
          <Stats
            statistics={allCount}
            total={getTotal}
            getPositive={getPositivePercentage()}
          />
        ) : (
          <Notification message="𝙽𝚘 𝚏𝚎𝚎𝚍𝚋𝚊𝚌𝚔 𝚐𝚒𝚟𝚎𝚗" />
        )}
      </Sections>
    </>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleChangeStats = (name) => {
//     this.setState((prev) => ({

//       [name]: prev[name] + 1,

//     }));
//   };

//   getTotal = () => {
//     const { good, bad, neutral } = this.state;
//     return good + bad + neutral;
//   };

//   getPositivePercentage = () => {
//     const { good } = this.state;
//     return Math.round((good / this.getTotal()) * 100);
//   };

//   render() {
//     return (
//       <>
//         <Container>
//           <Sections>
//             <FeedbackOptions onChangeStats={this.handleChangeStats} />
//             {this.getTotal() ? (
//               <Stats
//                 stats={this.state}
//                 total={this.getTotal()}
//                 getPositive={this.getPositivePercentage()}
//               />
//             ) : (
//               <Notification message="𝙽𝚘 𝚏𝚎𝚎𝚍𝚋𝚊𝚌𝚔 𝚐𝚒𝚟𝚎𝚗" />
//             )}
//           </Sections>
//         </Container>
//       </>
//     );
//   }
// }

// export default App;
