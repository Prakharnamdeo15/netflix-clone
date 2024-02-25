import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from "./request"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>

    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
    <Row title="Trending now" fetchUrl={requests.fetchTrending} />
    <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Romance" fetchUrl={requests.fetchRomanticMovies} />
    <Row title="Action" fetchUrl={requests.fetchActionMovies} />
    <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />


    </div>
  );
}

export default App;
