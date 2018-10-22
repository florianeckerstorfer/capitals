import * as React from "react";
import ICountryQuestion from "src/types/ICountryQuestion";

interface IProps {
  question: ICountryQuestion;
  onAnswer: (answer: string) => void;
}

class CountryQuestion extends React.PureComponent<IProps> {
  public render() {
    const { question } = this.props;
    return (
      <form className="question question--country">
        <div className="question__text">
          What country is{" "}
          <strong className="question__capital">
            {question.country.capital}
          </strong>{" "}
          the capital of?
        </div>
        <ul className="question__answers">
          {question.options.map(option => (
            <li key={option}>
              <label htmlFor={`answer-${option.toLowerCase()}`}>
                <input
                  type="radio"
                  id={`answer-${option.toLowerCase()}`}
                  name="answer"
                  value={option}
                  onChange={this.handleAnswer}
                />{" "}
                {option}
              </label>
            </li>
          ))}
        </ul>
      </form>
    );
  }

  private handleAnswer = ({ nativeEvent }: React.ChangeEvent) => {
    const target = nativeEvent.target as HTMLInputElement;
    this.props.onAnswer(target.value);
  };
}

export default CountryQuestion;
