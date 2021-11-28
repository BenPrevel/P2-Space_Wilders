import {Answer} from './answer.model';

export class Question {
  question: string;
  answers: Answer[];
  idAnswer: number;

  constructor(question: string, answers: Answer[], idAnswer: number) {
    this.question = question;
    this.answers = answers;
    this.idAnswer = idAnswer;
  }
}
