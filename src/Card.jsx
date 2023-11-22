//creates a single image card
export default function Card(props){
  
    return(
        <div className="flex flex-wrap h-54 sm:w-56 w-screen overflow-hidden hover:text-white rounded-lg hover:scale-105 relative group my-2">
        
            <img 
            src={`./assets/${props.image}`} 
            className="w-full h-screen sm:h-full hover:scale-110 group-hover:brightness-[.25] group-hover:scale-110 group-hover:transition-all group-hover:ease-in-out duration-500"
            alt={props.name}   
            />
        
        <div className="absolute hover:text-white text-center p-1 opacity-0 group-hover:opacity-100 group-hover:brightness-100 group-hover:text-white group-hover:transition-all group-hover:ease-in-out duration-500 mt-1">
             <p>{props.summary}</p>
             <a href={props.url} target="_blank" rel="noreferrer" className="text-blue-500 underline">Learn More...</a>
        </div>
        </div>
    )
}
