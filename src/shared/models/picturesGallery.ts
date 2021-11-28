export class PicturesGallery {
  title: string;
  href: string;
  description: string;
  date_created: any;
  media_type: string;
  secondary_creator: string;

  constructor(
    title: string,
    href: string,
    description: string,
    date_created: any,
    media_type: string,
    secondary_creator: string
  ) {
    (this.title = title),
      (this.href = href),
      (this.description = description),
      (this.date_created = date_created),
      (this.media_type = media_type);
    this.secondary_creator = secondary_creator;
  }
}
