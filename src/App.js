import "./App.css";
import Row from "./Components/Row";
import requests from "./api/requests";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetch={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="Trending Now" fetch={requests.fetchTrending} isLarge />
      <Row title="Top Rated" fetch={requests.fetchTopRated} />
      <Row title="Action Movies" fetch={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetch={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetch={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetch={requests.fetchRomanceMovies} />
      <Row title="Documentories" fetch={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
