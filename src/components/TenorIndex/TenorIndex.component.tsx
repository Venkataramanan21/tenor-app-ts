/* eslint-disable react/react-in-jsx-scope */
import React, {useEffect, useState } from "react";
// import { Router } from "react-router";
import PresentGIF from "../PresentGIF/PresentGIF";
import SearchComponent from "../SearchComponent/SearchComponent";
import TrendingCarousel from "../TrendingCarousel/TrendingCarousel";
import { fetchNextSet, searchGIF, trendingGIF, trendingTenorSearches } from "./TenorIndex.services";
import { useNavigate, useLocation, useParams } from 'react-router';

interface TenorIndexInputField {
  searchValue: string;
}


export const viewportSize = (): number => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize',updateWidth);
    updateWidth();
    return (() => window.removeEventListener('resize',updateWidth));
  });
  return width;
};



const TenorIndex = (props:any):JSX.Element => {
  // console.log('NotFound',props)
  const params = useParams()
  const location = useLocation();
  console.log(location)
  const width = viewportSize();
  // const [inputFields,setInputFields] = useState<TenorIndexInputField>({searchValue:''});
  const [searchResult, setSearchResult] = useState<any>([]);
  const [trending, setTrending]= useState<any>();
  const [nextSearch, setNextSearch] = useState<any>('');
  const navigate = useNavigate();

  // const handleSearchValue = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   setInputFields({...inputFields,[e.target.name]:e.target.value})
  // }

  const handleSearch = async (value:string) => {
    navigate(`/search/${value}`);
  }

  const handleInitailSearch = async (value:string) => {
    setSearchResult([]);
    const result = await searchGIF(value);
    setNextSearch(result?.next);
    setSearchResult(result?.results);
  }

  const handleNextAPI = async () => {
    const a = fetchNextSet(searchResult,params?.searchTerm ?? '',nextSearch);
    console.log(nextSearch,'What do you understand?')
  }

  console.log(nextSearch)

  const fetchTrendingTenorSearches = async () => {
    const result = await trendingGIF();
    setTrending(result?.results);
    // setSearchResult(result);
  }
  useEffect(() => {
    const path = location.pathname.split('/');
    const searchTerm=params?.searchTerm?.replaceAll('%20',' ');
    if (path.length > 3) {
      navigate(path.splice(0,3).join('/'));
    } else if (searchTerm) {
      handleInitailSearch(searchTerm);
      fetchTrendingTenorSearches();
    } else {
      fetchTrendingTenorSearches();
    }
  },[params]);

  return (
    <div className = 'container'>
      {/* {isNotFoundPage && <div>Page does not exist</div>} */}
      <SearchComponent handleSearch={handleSearch}/>
      {/* <input value={inputFields.searchValue} onChange={handleSearchValue} name='searchValue'/>
      <button className='btn' onClick={handleSearch}>CLICK TO SEARCH</button> */}
      <TrendingCarousel trendingArray={trending}/>
      <PresentGIF datas = {searchResult} viewportSize = {width} triggerNext={handleNextAPI}/>
    </div>
  )
}



export default TenorIndex;