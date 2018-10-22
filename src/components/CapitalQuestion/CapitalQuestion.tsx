import * as React from "react";
import ICapitalQuestion from "../../types/ICapitalQuestion";

interface IProps {
  question: ICapitalQuestion;
  onAnswer: (answer: string) => void;
}

class CapitalQuestion extends React.PureComponent<IProps> {
  public render() {
    const { question } = this.props;
    return (
      <form className="question question--capital">
        <div className="question__text">
          What is the capital of{" "}
          <strong className="question__country">{question.country.name}</strong>
          ?
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

export default CapitalQuestion;
