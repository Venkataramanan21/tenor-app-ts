const GIFComp = ({src}:any) => {
  return (
    <div className='p-2 d-inline-block'>
      <div className = 'border rounded'>
        <img src={src} className='w-100 rounded'/>
      </div>
    </div> 
  )
}

export default GIFComp;