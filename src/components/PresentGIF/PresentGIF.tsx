/* eslint-disable react/react-in-jsx-scope */
const PresentGIF = ({datas}:any):JSX.Element => {
  return (
    <div>
      {datas?.results?.length && datas.results.map((gifData:any) => {
        return (
          <>
            <img src={gifData.media[0].gif.url} height={100} />
          </>
        )
      })}
    </div>
  );
}

export default PresentGIF;