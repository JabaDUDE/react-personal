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
    <>
    <h1>Favorite Books I've Read</h1>
    <div className="flex flex-wrap gap-4">
    {FaveBooks}
    </div>
    <h1>My Favorite Games</h1>
    <div>{FaveGames}</div>
    </>
    
  )
}

export default App
