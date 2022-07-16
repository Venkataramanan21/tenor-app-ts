/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState } from "react";
import PresentGIF from "../PresentGIF/PresentGIF";
import SearchComponent from "../SearchComponent/SearchComponent";
import TrendingCarousel from "../TrendingCarousel/TrendingCarousel";
import { fetchNextSet, searchGIF, trendingGIF, trendingTenorSearches } from "./TenorIndex.services";
import { useNavigate, useLocation, useParams } from 'react-router';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from "../Loader/Loader";

// interface TenorIndexInputField {
//   searchValue: string;
// }


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



const TenorIndex = ():JSX.Element => {
  const params = useParams()
  const location = useLocation();
  const width = viewportSize();
  const [searchResult, setSearchResult] = useState<any>([]);
  const [trending, setTrending]= useState<any>();
  const [nextSearch, setNextSearch] = useState<any>('');
  const [isFetching,setIsFetching] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSearch = async (value:string) => {
    navigate(`/search/${value.replaceAll(' ','-')}`);
  }

  const handleInitailSearch = async (value:string) => {
    setSearchResult([]);
    setIsFetching(true);
    const result = await searchGIF(value);
    setNextSearch(result?.next);
    setSearchResult(result?.results);
    setIsFetching(false);
  }

  const fetchTrendingTenorSearches = async () => {
    const result = await trendingGIF();
    setTrending(result?.results);
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
  const loadMoreData = async () => {
    const a = await fetchNextSet(searchResult,params?.searchTerm ?? '',nextSearch);
    setIsFetching(true);
    if(a?.results?.length >10) {
      setSearchResult([...searchResult,...a.results]);
      setNextSearch(a.next);
      setIsFetching(false);
    }
  }

  return (
    <div>
    <div className = 'container' >
      <SearchComponent handleSearch={handleSearch}/>
      <h3 className="fw-bold">Trending Searches</h3>
      <TrendingCarousel trendingArray={trending} handleSearch={handleSearch} width={width}/>
      <h3 className="my-3 fw-bold">Featured GIFs</h3>
        <InfiniteScroll
          loadMore={loadMoreData}
          hasMore={!isFetching}
          loader={<Loader className='m-auto'/>}
          useWindow={true}
          >
        <PresentGIF datas = {searchResult} viewportSize = {width}/>
    </InfiniteScroll>
    </div>
    </div>
  )
}



export default TenorIndex;