import './App.css';
import Header from './components/Header.js';
import Tile from './components/Tile.js';
import data from './data.js';
import login from './Login/login'
import { useState } from "react";

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function App() {
      	//set state
	const [searchedItem, setSearchedItem] = useState('');
	// //filtering items searched
	// const filteredItems = data.filter((item) =>
	// 	item.name.toLowerCase().includes(searchedItem.toLowerCase()),
	// );
	// //setting where to get searched item value
	function handleChange(e) {
		setSearchedItem(e.target.value);
    console.log(e.target.value);
	}
	//telling the button to clear the search field
	function buttonClick(e) {
		setSearchedItem('');
	}

  const tiles = data.map(item => {
  if(searchedItem.length > 0 && !item.city.includes(searchedItem))
  {
     return null;
  }
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
        isFavourite={item.isFavourite}
    />)})
    
  return (
    // <Router>
    // everythign else goes ion here.
    // <Route path="/" exact component={TodosList} />
    // <Route path="/edit/:id" component={EditToDo} />
    // <Route path="/create" component={CreateToDo} />

    // </Router>
    <div className="App">
      <Header searchedItem={searchedItem} handleChange={handleChange}/>
      <section className="tiles-list">
                {tiles}
      </section>
    </div>
    );
}


