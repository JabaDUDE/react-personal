export default function Card(props){
    return(
        <div>
            <img src={`./assets/${props.image}`} />
            <h1>{props.name}</h1>
            {props.author && <h3>By: {props.author}</h3>}
        </div>
    )
}