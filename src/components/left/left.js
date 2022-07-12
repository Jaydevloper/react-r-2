import './left-content.scss'
import './filter-content.scss'
import './roadmap-content.scss'
function Left () {
    return (
       <div className="left-content">
  <div className="left-content__mentor">
    <h2 className="left-content__head-ment">
      Frontend Mentor
    </h2>
    <h3 className="left-content__head-board">
      Feedback Board
    </h3>
  </div>
  <div className="filter-content">
    <ul className="filter-content__list">
      <li className="filter-content__list-item">
        <button className="filter-content__list-item-btn filter-content__list-item-btn--all">All</button>
      </li>
      <li className="filter-content__list-item">
        <button className="filter-content__list-item-btn">UI</button>
      </li>
      <li className="filter-content__list-item">
        <button className="filter-content__list-item-btn">UX</button>
      </li>
      <li className="filter-content__list-item">
        <button className="filter-content__list-item-btn">Enhancement</button>
      </li>
      <li className="filter-content__list-item">
        <button className="filter-content__list-item-btn">Bug</button>
      </li>
      <li className="filter-content__list-item">
        <button className="filter-content__list-item-btn">Feature</button>
      </li>
    </ul>
  </div>
  <div className="roadmap-content">
    <div className="roadmap-content__header">
      <h2 className="roadmap-content__head">
        Roadmap
      </h2>
      <a className="roadmap-content__link" href="#">View</a>
    </div>
    <p className="roadmap-content__page roadmap-content__page--orange">Planned</p>
    <p className="roadmap-content__page roadmap-content__page--roz">In-Progress</p>
    <p className="roadmap-content__page roadmap-content__page--blue">Live</p>
  </div>
</div>

    )
}
export default Left;