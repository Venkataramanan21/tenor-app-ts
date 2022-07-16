/* eslint-disable react/react-in-jsx-scope */

import { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { trendingTenorSearches } from "../TenorIndex/TenorIndex.services";
import TrendingImages from "../TrendingImages/TrendingImages";

const TrendingCarousel = ({handleSearch, width}:any):JSX.Element => {

  const [trending,setTrending] = useState<any>([]);

  const getElementsInArray = (arr:any,size:number) => {
    const appArr:any[] = [];
    let tempArr:any = [];
    arr?.length && arr.map((singleElment:any, index:number) => {
      tempArr.push(singleElment);
      if (index%size == size-1 && tempArr.length) {
        appArr.push(tempArr);
        tempArr =[];
      }
    });
    return appArr;
  };
  const fetchTenorSearches = async () => {
    const result = await trendingTenorSearches();
    // console.log(result,'result')
    setTrending(result.results);
  }

  const findNoOfElementToShow = (size:number):number => {
    if (size >=1440) return 5;
    else if (size >=1024) return 4;
    else if (size >= 768) return 3;
    else return 2;
  }

  useEffect(() => {
    fetchTenorSearches();
  },[])

  const dispSize = findNoOfElementToShow(width);
  const appArr = getElementsInArray(trending,dispSize);
  
  return (
    <>
    {Boolean(appArr?.length) && 
    <Carousel 
    indicators={false} 
    interval={null} 
    variant="dark"
    >
    {Boolean(appArr.length) && appArr.map((gifDatas:any, index:number) => (
      // eslint-disable-next-line react/jsx-key
      <Carousel.Item key ={index}>
        <div className='d-flex justify-content-center'>
        {gifDatas?.length && gifDatas.map((gifData:any) => (
          <div key = {gifData} className = 'p-2'>
            <TrendingImages trend={gifData} triggerSearch={handleSearch}/>
          </div>
        ))}
        </div>
      </Carousel.Item>
    ))}
    {Boolean(!appArr.length) && <Loader className='m-auto'/>}
    </Carousel>}
    </>
  );
}

export default TrendingCarousel;