// import Comment from "./modules/comment";
import {Routes,Route} from 'react-router-dom';
import './components/site-main.scss';
import Components from "./components/new_Components/components";

function App() {
 
  return (
    <main className="site-main">
    <div className="site-main__wrraper container ">
    <Routes>
        <Route path="/" element={<Components/>}/>
      </Routes> 
    </div>
    </main>
    
  
  );
}
export default App;
// <Routes>
//      <main className="site-main">
//     <div className="site-main__wrraper container ">
//      <Route path="/*" element={<Left/>}/>
//      <Route path="/*" element={<Right/>}/>
//     </div>
//     </main>
//     </Routes>