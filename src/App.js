import Left from "./components/left/left";
import Right from "./components/right/right";
import './components/site-main.scss';

function App() {
  return (
    <main className="site-main">
    <div className="site-main__wrraper container ">
     <Left></Left>
    <Right></Right>
    </div>
    </main>
   
  );
}
export default App;
