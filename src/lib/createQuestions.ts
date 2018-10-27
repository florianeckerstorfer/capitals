import IAnswer from 'src/types/IAnswer';
import ICountry from '../types/ICountry';
import IQuestion from '../types/IQuestion';
import shuffle from './shuffle';

const sameContinent = (country1: ICountry, country2: ICountry): boolean =>
  country1.continents.filter(
    continent => country2.continents.indexOf(continent) >= 0,
  ).length > 0;

const createAnswers = (answer: ICountry, countries: ICountry[]): IAnswer[] => {
  return [{ answer: answer.capital, correct: true }].concat(
    shuffle(
      countries.filter(c => c.name !== answer.name && sameContinent(answer, c)),
    )
      .slice(0, 3)
      .map(c => ({ answer: c.capital, correct: false })),
  );
};

const createQuestions = (countries: ICountry[]): IQuestion[] => {
  return shuffle(countries)
    .slice(0, 10)
    .map(
      (country: ICountry): IQuestion => ({
        answers: shuffle(createAnswers(country, countries)),
        question: country.name,
      }),
    );
};

export default createQuestions;
