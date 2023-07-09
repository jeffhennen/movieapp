
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Movie from './components/Movie';
import list from './components/MovieList';

export default function App() {

  const movies = list.map(movie => {

    return(
      
      <Movie 
        key={movie.id}
        id={movie.id}
        movie={movie}
      />
    )
  })

  return (
    <>
      <div className='bg-primary-subtle'>
        <div className='container bg-secondary ps-0 pe-0'>
          <Nav/>
            <div id="card-container" className='row justify-content-center'>
              {movies}
            </div>
          <Footer />
        </div>
      </div>
    </>
  );
}


