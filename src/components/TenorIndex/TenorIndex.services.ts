import { GIFTrendingSearchTerms, GIFSearchEndpoint, GIFTrendingEndpoint } from "../../services/ApiConstants"

// export const searchGIF = (payload: string) => {
//   // console.log(payload)
//  fetch(GIFSearchEndpoint).then((val) => console.log(val.json(),'is the final value')).catch((e:Error) => console.log(e,'This is the error'));
// }

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
  console.log(previousArray,'HERE IS THE PROVIOUS ARAY')
    const parameters = `?q=${payload}&key=LIVDSRZULELA&limit=50&next=${next}`
    const url = GIFSearchEndpoint+parameters;
    const response = await fetch(url).then((val) => {return val.json()});
    response.result = [...previousArray,...response.result]
    return response;
  }