// import Styles from './PresentGIF.module.scss';

const PresentGIF = ({datas, viewportSize}:any):JSX.Element => {

  const noRows = findNoOfRows(viewportSize);
  // const allCompiledData;
  console.log(noRows,viewportSize)
  const splitedVal = splitData(datas?.results,noRows);
  
  return (
    <div className='d-flex'>
      {/* {datas?.results?.length && datas.results.map((gifData:any,index:number) => {
        return (
          <>
            <div key = {index} className='p-2 d-inline-block'>
              <img src={gifData.media[0].gif.url} width={200} />
            </div>
          </>

        )
      })} */}
      
      {splitedVal.length && splitedVal.map((val:any,indexParent:number) => (
        <div key = {indexParent} className='d-flex flex-column col'>
          {
          val.map((innerVal:any,index:number) => (
            <>
            <div key = {index} className='p-2 d-inline-block'>
              <img src={innerVal.media[0].gif.url} width={200} />
            </div>
          </>
          ))
}
        </div>
      ))}
    </div>
  );
}

const splitData = (allData:any[],rows:number) => {
  if (!allData?.length) return [];
  const arr:any=[[],[],[],[]];
  const heightArr = [];
  for (let i=0;i<allData.length;i=i+rows) {
    const tempArr = allData.slice(i,i+rows)
    console.log(tempArr,rows)
    for (let j=0;j<rows;j++) {
      // arr[j]=[...arr[j],tempArr[j]];
      tempArr[j] && arr[j].push(tempArr[j]);
    }
  }
  return arr;
}

const findNoOfRows = (width: number):number => {
  if (width >=1024 ) return 4;
  else if (width >=768) return 3;
  return 2;
}

const findCurrentViewIndex = (width:number): number => {
  if (width >= 1440) return 3;
  else if (width >=1024) return 2;
  else if (width >= 768) return 1;
  else if (width > 0) return 0;
  return -1;
}

export default PresentGIF;