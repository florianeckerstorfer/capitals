import ICountry from 'src/types/ICountry';
import IQuestion from 'src/types/IQuestion';
import createQuestions from './createQuestions';

const countries: ICountry[] = [
  { name: 'Austria', capital: 'Vienna' },
  { name: 'Germany', capital: 'Berlin' },
  { name: 'France', capital: 'Paris' },
  { name: 'Spain', capital: 'Madrid' },
  { name: 'Italy', capital: 'Rome' },
  { name: 'Sweden', capital: 'Stockholm' },
  { name: 'Denmark', capital: 'Copenhagen' },
  { name: 'United Kingkom', capital: 'London' },
  { name: 'Belgium', capital: 'Brussels' },
  { name: 'Poland', capital: 'Warsaw' },
  { name: 'Ukraine', capital: 'Kiev' },
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
