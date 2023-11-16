//import data.json for cards
import './App.css'
import Card from './Card'
import data from './data/data.json'

//TODO: style up components and page (i.e. all images the same size, flex wrap, etc)

function App() {
  const Games = data.FavoriteGames
  const Books = data.FavoriteBooks
  const Shows = data.FavoriteShows
  

  const FaveBooks = Books.map((book, index) => {
    return <Card image={book.image}  key={index} url={book.url} summary={book.summary}/>
  })

  const FaveGames = Games.map((game, index) => {
    return <Card image={game.image} key={index} url={game.url} summary={game.summary}/>
  })

  const FaveShows = Shows.map((show, index) => {
    return <Card image={show.image} key={index} url={show.url} summary={show.summary}/>
  })

  return(
    <div>
    <h1 className="tracking-tight text-5xl my-9 text-white text-center">Favorite Books</h1>
    <div className="flex flex-wrap gap-3 py-4 justify-center">
    {FaveBooks}
    </div>
    <h1 className="tracking-tight text-5xl my-9 text-white text-center">Favorite Games</h1>
    <div className="flex flex-wrap gap-3 py-4 justify-center">
    {FaveGames}
    </div>
    <h1 className="tracking-tight text-5xl my-9 text-white text-center">Favorite Shows</h1>
    <div className="flex flex-wrap gap-3 py-4 justify-center">
    {FaveShows}
    </div>

    </div>
    
  )
}

export default App
