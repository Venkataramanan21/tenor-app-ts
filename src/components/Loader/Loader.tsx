const Loader = ({className = ''}:any) => {
  return (
    <div className={`d-inline-block ${className}`}>
      <div className="spinner-border">
        <span className="sr-only"></span>
      </div>
    </div>
  )
}
export default Loader;