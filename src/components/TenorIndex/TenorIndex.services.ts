import { GIFTrendingSearchTerms, GIFSearchEndpoint, GIFTrendingEndpoint } from "../../services/ApiConstants"

export async function searchGIF(payload: string) {
  const parameters = `?q=${payload}&key=LIVDSRZULELA&limit=50`
  const url = GIFSearchEndpoint+parameters;
  const response = await fetch(url).then((val) => {return val.json()});
  return response;
}

export async function trendingGIF() {
  const url = GIFTrendingEndpoint;
  const response = await fetch(url).then((val) => {return val.json()});
  return response;
}

export async function trendingTenorSearches() {
  const url = GIFTrendingSearchTerms;
  const response = await fetch(url).then((val) => {return val.json()});
  return response;
}

export async function fetchNextSet(previousArray:any,payload: string,next:any) {
    const parameters = `?q=${payload}&key=LIVDSRZULELA&limit=50&pos=${next}`
    const url = GIFSearchEndpoint+parameters;
    const response = await fetch(url).then((val) => {return val.json()});
    return response;
  }