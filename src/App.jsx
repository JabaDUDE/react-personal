//import data.json for cards
import './App.css'
import Card from './Card'
import data from './data/data.json'

//TODO: style up components and page (i.e. all images the same size, flex wrap, etc)

function App() {
  const Games = data.FavoriteGames
  const Books = data.FavoriteBooks
  

  const FaveBooks = Books.map((book, index) => {
    return <Card name={book.name} author={book.author} image={book.image}  key={index}/>
  })

  const FaveGames = Games.map((game, index) => {
    return <Card name={game.name} image={game.image} key={index} />
  })

  return(
    <div>
    <h1 className="tracking-tight font-black md:text-5xl lg:text-6xl my-9 text-white text-center">Favorite Books I've Read</h1>
    <div className="flex flex-wrap gap-2">
    {FaveBooks}
    </div>
    <h1 className="tracking-tight font-black md:text-5xl lg:text-6xl my-9 text-white text-center">My Favorite Games</h1>
    <div className="flex flex-wrap gap-2">{FaveGames}</div>
    </div>
    
  )
}

export default App
