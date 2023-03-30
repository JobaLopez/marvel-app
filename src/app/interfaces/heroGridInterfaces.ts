interface RootObject {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: Data;
  etag: string;
}

interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Hero[];
}

interface Hero {
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

interface Stories {
  available: number;
  returned: number;
  collectionURI: string;
  items: StoriesItem[];
}

interface StoriesItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface CESData {
  available: number;
  returned: number;
  collectionURI: string;
  items: CESDataItem[];
}

interface CESDataItem {
  resourceURI: string;
  name: string;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Url {
  type: string;
  url: string;
}
