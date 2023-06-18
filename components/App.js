import React from "react";
import TrelloBoard from "./TrelloBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <TrelloBoard />
      </div>
    );
  }
}

export default App;
