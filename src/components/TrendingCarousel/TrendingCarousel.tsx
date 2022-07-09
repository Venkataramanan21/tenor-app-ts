/* eslint-disable react/react-in-jsx-scope */

const TrendingCarousel = ({trendingArray}:any):JSX.Element => {
  console.log(trendingArray)
  return (
    <div>
      {trendingArray?.results?.length && trendingArray.results.map((gifData:any) => {
        return (
          <>
            <img src={gifData.media[0].gif.url} width={200} />
          </>
        )
      })}
    </div>
  );
}

export default TrendingCarousel;