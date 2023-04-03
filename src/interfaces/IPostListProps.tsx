export default interface IPostListProps {
  data: Data;
  query: string;
  variables: Variables;
}

export interface Data {
  postConnection: PostConnection;
}

export interface PostConnection {
  pageInfo: PageInfo;
  totalCount: number;
  edges: Edge[];
}

export interface Edge {
  cursor: string;
  node: Node;
}

export interface Node {
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

export interface PageInfo {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface Variables {}
