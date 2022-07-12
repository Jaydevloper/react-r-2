import './right-content.scss'
import './site-header.scss'
import Cards from '../cards/cards';
function Right (){
    return (
        <div className="right-content ">
  <header className="site-header ">
    <div className="site-header__wrraper-left">
      <h2 className="site-header__wrraper-left-head">
        6 Suggestions
      </h2>
      <span className="site-header__wrraper-left-span">Sort by :</span>
      <select className="site-header__wrraper-left-selct">
        <option>Most Upvotes</option>
      </select>
    </div>
    <button className="site-header__wrraper-add">+ Add Feedback</button>
  </header>
  <ul className="right-content__list">
    <Cards></Cards>
  </ul>
</div>

    )
}
export default Right;