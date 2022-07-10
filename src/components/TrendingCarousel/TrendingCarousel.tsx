/* eslint-disable react/react-in-jsx-scope */

const TrendingCarousel = ({trendingArray}:any):JSX.Element => {
  console.log(trendingArray)
  return (
    <div className="d-flex">
      {trendingArray?.length && trendingArray.map((gifData:any, index:number) => {
        return (
          <div key = {index} className = 'w-25 p-2'>
            <img src={gifData.media[0].tinygif.url} height={100} className='rounded'/>
          </div>
        )
      })}
    </div>
  );
}

export default TrendingCarousel;