import * as React from "react";
import "./App.css";
import CountryQuestion from "./components/CountryQuestion/CountryQuestion";
import { COUNTRY_QUESTION } from "./constants/questions";
import ICountryQuestion from "./types/ICountryQuestion";

class App extends React.PureComponent {
  public render() {
    const question: ICountryQuestion = {
      country: { name: "Austria", capital: "Vienna" },
      options: ["Australia", "Switzerland", "Germany", "Austria"],
      type: COUNTRY_QUESTION
    };
    return (
      <div className="app">
        <CountryQuestion question={question} onAnswer={this.handleAnswer} />
      </div>
    );
  }

  private handleAnswer = () => {
    console.log("anser");
  };
}

export default App;
