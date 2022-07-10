/* eslint-disable react/react-in-jsx-scope */

import { Carousel } from "react-bootstrap";

const TrendingCarousel = ({trendingArray}:any):JSX.Element => {

  const getElementsInArray = (arr:any,size:number) => {
    const appArr:any[] = [];
    let tempArr:any = [];
    arr?.length && arr.map((singleElment:any, index:number) => {
      if (index%size == size-1 && tempArr.length) {
        appArr.push(tempArr);
        tempArr =[];
      }
      tempArr.push(singleElment);
    })
    return appArr;
  }
  const appArr = getElementsInArray(trendingArray,5);
  return (
    <>
    {Boolean(appArr?.length) && 
    <Carousel 
    indicators={false} 
    interval={null} 
    variant="dark" 
    prevIcon = {<div className='fs-lg'>&#60;</div>}>
    {appArr.map((gifDatas:any, index:number) => (
      // eslint-disable-next-line react/jsx-key
      <Carousel.Item key ={index}>
        <div className='d-flex'>
        {gifDatas?.length && gifDatas.map((gifData:any,ind:number) => (
          <div key = {ind} className = 'w-25 p-2'>
            <img src={gifData.media[0].tinygif.url} height={100} className='rounded'/>
          </div>
        ))}
        </div>
      </Carousel.Item>
    ))}
    </Carousel>}
    </>
  );
}

export default TrendingCarousel;