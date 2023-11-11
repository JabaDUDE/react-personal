export default function Card(props){
    return(
        <div className="flex flex-initial flex-col flex-wrap w-69 overflow-hidden border-red border-2 bg-blue-900 text-white text-center rounded-lg hover:border-black hover:scale-105">
        <a href={props.url} target="_blank">
            <img 
            src={`./assets/${props.image}`} 
            className="h-full w-56 hover:cursor-pointer"    
            />
        </a>
        </div>
    )
}

// <h1 className="break-words p-2">{props.name}</h1>
// {props.author && <h3 className="p-2">By: {props.author}</h3>}