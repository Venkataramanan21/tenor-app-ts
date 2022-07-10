const GIFComp = ({src}:any) => {
  return (
    <div className='p-2 d-inline-block'>
      <div className = 'border rounded'>
        {/* <img src={src.media[0].gif.url} className='w-100 rounded' alt={src.content_description}/> */}
        <img src={src.media[0].tinygif.url} className='w-100 rounded' alt={src.content_description}/>
      </div>
    </div> 
  )
}

export default GIFComp;