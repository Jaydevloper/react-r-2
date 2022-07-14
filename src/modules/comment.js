import {useParams} from "react-router-dom";
import Data from '../data';
import './comment.scss';
function Comment(){
  const param = useParams();
  const current = Data.find(el => +el.id === +param.id)
  console.log(current);
    return(
      <li className="right-content__list-item container">
      <div className="right-content__list-item-wrraper">
        <div className="right-content__content">
          <div className="right-content__number">
           {current.upvotes}
          </div>
          <div className="right-content__info">
            <h2 className="right-content__head">
              {current.title}
            </h2>
            <p className="right-content__page">
              {current.title}
            </p>
            <button className="filter-content__list-item-btn">{current.category}</button>
          </div>
        </div>
        <button className="right-content__comment" >
          {current.id}
        </button>
      </div>
    </li>
    )
}
export default Comment;