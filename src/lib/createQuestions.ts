import IAnswer from 'src/types/IAnswer';
import ICountry from '../types/ICountry';
import IQuestion from '../types/IQuestion';
import shuffle from './shuffle';

const createAnswers = (answer: ICountry, countries: ICountry[]): IAnswer[] => {
  return [{ answer: answer.capital, correct: true }].concat(
    shuffle(countries.filter(c => c.name !== answer.name)).slice(0, 3),
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
