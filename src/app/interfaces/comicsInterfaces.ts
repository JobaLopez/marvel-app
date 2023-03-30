export interface ComicDataWrapper {
  code: string;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: ComicDataContainer;
  etag: string;
}

export interface ComicDataContainer {
  offset: string;
  limit: string;
  total: string;
  count: string;
  results: Comic[];
}

export interface Comic {
  id: string;
  digitalId: string;
  title: string;
  issueNumber: string;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: string;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Series[];
  collections: Series[];
  collectedIssues: Series[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: Creators;
  characters: Creators;
  stories: Stories;
  events: Events;
}

export interface Events {
  available: string;
  returned: string;
  collectionURI: string;
  items: Series[];
}

export interface Stories {
  available: string;
  returned: string;
  collectionURI: string;
  items: StoriesItem[];
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Creators {
  available: string;
  returned: string;
  collectionURI: string;
  items: CreatorsItem[];
}

export interface CreatorsItem {
  resourceURI: string;
  name: string;
  role: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Price {
  type: string;
  price: string;
}

export interface Date {
  type: string;
  date: string;
}

export interface Series {
  resourceURI: string;
  name: string;
}

export interface Url {
  type: string;
  url: string;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}
