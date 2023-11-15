export default function Card(props){
    //TODO: Change all images to be background
    return(
        <div className="flex flex-wrap w-69 overflow-hidden hover:text-white rounded-lg hover:scale-105 relative card--details">
        <a href={props.url} target="_blank">
            <img 
            src={`./assets/${props.image}`} 
            className="h-full w-56 hover:cursor-pointer hover:scale-110"    
            />
        </a>
        <div className="absolute text-center">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices quis lacus ut rhoncus. Nam sit amet mauris sem. Maecenas ut pellentesque metus. Sed tristique dictum      augue, in laoreet elit venenatis id. Aliquam erat volutpat. Integer porttitor laoreet suscipit.</p>
        </div>
        </div>
    )
}

// <h1 className="break-words p-2">{props.name}</h1>
// {props.author && <h3 className="p-2">By: {props.author}</h3>}
//
//<div class="bg-[url('/img/hero-pattern.svg')]">

// </div>