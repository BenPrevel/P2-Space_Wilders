export class SocialLink {
  href: string;
  image: string;
  alt: string;
  constructor(href: string, image: string, alt: string) {
    (this.href = href), (this.image = image), (this.alt = alt);
  }
}
