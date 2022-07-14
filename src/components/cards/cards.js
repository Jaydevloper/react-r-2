import Card from "../card/card";
import Data from "../../data";

function Cards(){
    return (
        [
            Data.map(el => <Card Numb={el.upvotes} Name={el.title} Title={el.title} link={el.category} Comment={el.id} id={el.id}></Card>)
        ]
    )
}
export default Cards;