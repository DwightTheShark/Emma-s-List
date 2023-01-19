import './App.css';
import Header from './components/Header.js';
import Tile from './components/Tile.js';
import data from './data.js';
import login from './Login/login'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function App() {


  
  const tiles = data.map(item => {
  
  return (
    <Tile
        key={item.id}
        img={item.coverImg}
        city={item.city}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        smalldogs={item.smalldogs}
        visits={item.stats.visits}
        description={item.description}
        url={item.URL}
        additionalImg={item.additionalImg}
        features={item.features}
        parking={item.parking}
        favourite={item.isFavourite}
    />)})
    
  return (
    // <Router>
    // everythign else goes ion here.
    // <Route path="/" exact component={TodosList} />
    // <Route path="/edit/:id" component={EditToDo} />
    // <Route path="/create" component={CreateToDo} />

    // </Router>
    <div className="App">
      <Header />
      <login />
      <section className="tiles-list">
                {tiles}
      </section>
    </div>
    );
}


