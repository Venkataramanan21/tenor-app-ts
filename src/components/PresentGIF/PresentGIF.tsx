import GIFComp from "./../MediaComp/GIFComp";
import Loader from "./../Loader/Loader";

const PresentGIF = ({datas, viewportSize}:any):JSX.Element => {

  const noRows = findNoOfRows(viewportSize);
  const splitedVal = splitData(datas,noRows).filter((arr:any[]) => arr?.length);
  
  return (
    <div id='gif-container' className='d-flex' style={{cursor:'hover'}}>
      {Boolean(splitedVal.length) && splitedVal.map((val:any,indexParent:number) => (
        <div key = {indexParent} className='d-flex flex-column col'>
          {
          val.map((innerVal:any,index:number) => (
              <GIFComp key={index} src={innerVal}/>
          ))
}
        </div>
      ))}
      {Boolean(!splitedVal.length) && 
      <Loader className='m-auto' />
    }
    </div>
  );
}

const splitData = (allData:any[],rows:number) => {
  if (!allData?.length) return [];
  const arr:any=[[],[],[],[]];
  for (let i=0;i<allData.length;i=i+rows) {
    const tempArr = allData.slice(i,i+rows)
    for (let j=0;j<rows;j++) {
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

export default PresentGIF;