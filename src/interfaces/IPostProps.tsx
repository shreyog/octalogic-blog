export default interface IPostProps {
  data: Data;
  query: string;
  variables: Variables;
}

export interface Data {
  post: Post;
}

export interface Post {
  _sys: Sys;
  id: string;
  title: string;
  subtitle: string;
  categories: string;
  postDate: string;
  tags: null;
  slug: string;
  seo: SEO;
  body: Body;
}

export interface Sys {
  filename: string;
  basename: string;
  breadcrumbs: string[];
  path: string;
  relativePath: string;
  extension: string;
}

export interface Body {
  type: string;
  children: BodyChild[];
}

export interface BodyChild {
  type: string;
  children: ChildChild[];
}

export interface ChildChild {
  type: string;
  text: string;
}

export interface SEO {
  __typename: string;
  title: string;
  description: string;
}

export interface Variables {
  relativePath: string;
}
