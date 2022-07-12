import './card.scss'
function Card({Numb,Name,Title,Link,Comment}){
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
              <button className="filter-content__list-item-btn">{Link}</button>
            </div>
          </div>
          <button className="right-content__comment">
            {Comment}
          </button>
        </div>
      </li>
    )
}
export default Card;