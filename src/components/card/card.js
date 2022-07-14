import './card.scss';
import {Link} from 'react-router-dom';
function Card({Numb,Name,Title,link,Comment,id}){
    return(
        <li className="right-content__list-item">
        <div className="right-content__list-item-wrraper">
          <div className="right-content__content">
            <div className="right-content__number">
             {Numb}
            </div>
            <div className="right-content__info">
              <h2 className="right-content__head">
                {Name}
              </h2>
              <p className="right-content__page">
                {Title}
              </p>
              <button className="filter-content__list-item-btn">{link}</button>
            </div>
          </div>
          <Link className="right-content__comment" to={`/single/${id}`}>
            {Comment}
          </Link>
        </div>
      </li>
    )
}
export default Card;