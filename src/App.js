import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Tile from './components/Tile.js';
import data from './data.js';
import Map from './components/Map/Map'


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
    />)})
    
  return (
    <div className="App">
      <Header />
      <section className="tiles-list">
                {tiles}
      </section>
    </div>
  );
}


