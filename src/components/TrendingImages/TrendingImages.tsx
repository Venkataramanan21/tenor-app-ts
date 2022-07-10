import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { fetchSingleValue } from "../TenorIndex/TenorIndex.services";

const TrendingImages = ({trend,triggerSearch}:any) => {

  const [trendVal,setTrendVal] = useState<any>();

  const fetchTrendingVal = async () => {
    const result=await fetchSingleValue(trend);
    setTrendVal(result?.results[0]);
  };

  useEffect(() => {
   fetchTrendingVal(); 
  },[]);

  if (!trendVal) return (<></>);
  
  return (
    <div style={{cursor:'pointer'}} onClick={() => triggerSearch(trend)}>
      {trendVal &&
      <>
      <div className='rounded border overflow-hidden' style={{height:'120px'}}>
        <div style={{height:'120px'}}>
          <img src={trendVal?.media?.[0]?.tinygif?.url} alt={trendVal?.content_description}/>
        </div>
      </div>
        </>
      }
      {!trendVal && 
      <Loader/>}
      <p className='fw-bold'>{trend}</p>
    </div>
  )
}
export default TrendingImages;