export default function Card(props){
    return(
        <div className="flex flex-initial flex-col flex-wrap w-100 border-red border-2 bg-blue-900 text-white text-center rounded-lg hover:border-black hover:scale-105">
            <img 
            src={`./assets/${props.image}`} 
            className="object-contain h-48 w-full"    
            />
        </div>
    )
}

// <h1 className="break-words p-2">{props.name}</h1>
// {props.author && <h3 className="p-2">By: {props.author}</h3>}