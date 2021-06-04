export type Option = {
  value: string;
  isCorrect: boolean;
};

export type Question = {
  question: string;
  options: Option[];
  point: number;
  selectedOption: string | null;
};

export type Quiz = {
  _id: number;
  title: string;
  image: string;
  questions: Question[];
};

export type Data = {
  name: string;
  quizzes: Quiz[];
};
