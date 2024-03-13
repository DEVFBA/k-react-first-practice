import Emoji from "./Emoji";

const Card = (props) => {

    return(
        <article>
            <Emoji emoji={props.emoji}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </article>
    )

}

export default Card;