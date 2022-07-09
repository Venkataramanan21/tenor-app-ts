/* eslint-disable react/react-in-jsx-scope */

const TrendingCarousel = ({trendingArray}:any):JSX.Element => {
  console.log(trendingArray)
  return (
    <div className="d-flex">
      {trendingArray?.results?.length && trendingArray.results.map((gifData:any) => {
        return (
          <>
            <img src={gifData.media[0].gif.url} height={100} />
          </>
        )
      })}
    </div>
  );
}

export default TrendingCarousel;