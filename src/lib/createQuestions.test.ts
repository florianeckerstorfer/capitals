import ICountry from 'src/types/ICountry';
import IQuestion from 'src/types/IQuestion';
import createQuestions from './createQuestions';

const countries: ICountry[] = [
  { name: 'Austria', capital: 'Vienna', continents: ['Europe'] },
  { name: 'Germany', capital: 'Berlin', continents: ['Europe'] },
  { name: 'France', capital: 'Paris', continents: ['Europe'] },
  { name: 'Spain', capital: 'Madrid', continents: ['Europe'] },
  { name: 'Italy', capital: 'Rome', continents: ['Europe'] },
  { name: 'Sweden', capital: 'Stockholm', continents: ['Europe'] },
  { name: 'Denmark', capital: 'Copenhagen', continents: ['Europe'] },
  { name: 'United Kingkom', capital: 'London', continents: ['Europe'] },
  { name: 'Belgium', capital: 'Brussels', continents: ['Europe'] },
  { name: 'Poland', capital: 'Warsaw', continents: ['Europe'] },
  { name: 'Ukraine', capital: 'Kiev', continents: ['Europe'] },
];

test('createQuestions() should return 10 questions from countries', () => {
  const questions = createQuestions(countries);
  expect(questions.length).toBe(10);
  questions.forEach((question: IQuestion) => {
    // Question should have exactly one correct answer
    expect(question.answers.filter(answer => answer.correct).length).toBe(1);
    // Question should have exactly three incorrect answers
    expect(question.answers.filter(answer => !answer.correct).length).toBe(3);
  });
});
