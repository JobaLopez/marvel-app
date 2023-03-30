export interface GridData {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: Data;
  etag: string;
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Hero[];
}

export interface Hero {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Thumbnail;
  comics: CESData;
  stories: Stories;
  events: CESData;
  series: CESData;
}

export interface Stories {
  available: number;
  returned: number;
  collectionURI: string;
  items: StoriesItem[];
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: string;
}

export interface CESData {
  available: number;
  returned: number;
  collectionURI: string;
  items: CESDataItem[];
}

export interface CESDataItem {
  resourceURI: string;
  name: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Url {
  type: string;
  url: string;
}
