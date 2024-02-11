export class ProjectModel {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  link: string;

  constructor(
    title: string,
    subTitle: string,
    description: string,
    imageUrl: string,
    link: string,
    id: number = Math.floor(Math.random() * 10000)
  ) {
    this.id = id;
    this.title = title;
    this.subTitle = subTitle;
    this.description = description;
    this.imageUrl = imageUrl;
    this.link = link;
  }
}
