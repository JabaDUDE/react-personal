export default function Card(props){
    return(
        <div className="flex flex-initial flex-col flex-wrap w-100 border-red border-2">
            <img 
            src={`./assets/${props.image}`} 
            className="rounded-lg object-contain h-48 w-100"    
            />
        
            <h1 className="break-words">{props.name}</h1>
            {props.author && <h3>By: {props.author}</h3>}
        </div>
    )
}