export default function Card(props){
  
    return(
        <div className="flex flex-wrap w-69 overflow-hidden hover:text-white rounded-lg hover:scale-105 relative group">
        
            <img 
            src={`./assets/${props.image}`} 
            className="h-full w-56 hover:scale-110 group-hover:brightness-[.25] group-hover:scale-110 group-hover:transition-all group-hover:ease-in-out duration-500"   
            />
        
        <div className="absolute hover:text-white text-center p-1 opacity-0 group-hover:opacity-100 group-hover:brightness-100 group-hover:text-white group-hover:transition-all group-hover:ease-in-out duration-500">
             <p>{props.summary}</p>
             <a href={props.url} target="_blank" className="text-blue-500 underline">Learn More...</a>
        </div>
        </div>
    )
}

// <h1 className="break-words p-2">{props.name}</h1>
// {props.author && <h3 className="p-2">By: {props.author}</h3>}
//
//<div class="bg-[url('/img/hero-pattern.svg')]">

// </div>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices quis lacus ut rhoncus. Nam sit amet mauris sem. Maecenas ut pellentesque metus. Sed tristique dictum      augue, in laoreet elit venenatis id. Aliquam erat volutpat. Integer porttitor laoreet suscipit.