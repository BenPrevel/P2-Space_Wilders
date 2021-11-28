export class News {
  title: string;
  date: string;
  text: string;
  image: string;

  constructor(title: string, date: string, text: string, image: string) {
    (this.title = title), (this.date = date), (this.text = text), (this.image = image);
  }
}
