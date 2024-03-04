import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import {data} from "./data"

function App() {

  const cards = data.map(item => {
    return(
      <Card 
          key={item.id}
          item={item}
          //img= {item.coverImg}
          //rating={item.stats.rating}
          //reviewCount={item.stats.reviewCount}
          //location={item.location}
          //title={item.title}
          //price={item.price}
          //openSpots={item.openSpots}
          //or we can just use the spread opertator to replace the above code like: {...item}
      />
    )
  })

  return (
    <div>
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      <section className="cards-list">
        {cards}
      </section>
    </div>
    </div>
  );
}

export default App;