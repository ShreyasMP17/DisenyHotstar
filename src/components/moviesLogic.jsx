//using props 

const MoviesLogic = (props) => {
    let header=props.title
    let favouritesData=props.data
    let handleClick=props.fun
    return ( 
        <div className="favos">
        <h1>{header}</h1>
        <div className="favs">
            {favouritesData.map((data)=>(
                <div className="fav_lists">
                    <h2>{data.title}</h2>
                    <p>{data.genre}/{data.language}</p>  
                    <p>{data.rating}⭐</p>
                    <button onClick={()=>handleClick(data.id,data.title)}>Remove</button>
                </div>
            ))}
            </div>
            </div>
     );
}
 
export default MoviesLogic;