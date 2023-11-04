export default function Card(props){
    return(
        <div className="flex flex-initial flex-col flex-wrap w-175">
            <img 
            src={`./assets/${props.image}`} 
            className="rounded-lg max-w-lg h-auto"    
            />
        
            <h1>{props.name}</h1>
            {props.author && <h3>By: {props.author}</h3>}
        </div>
    )
}