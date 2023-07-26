import { Navbar, MovieCard } from "./";
import { data } from "../data";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movie</div>
          <div className="tab">Favourite</div>
        </div>
        <div className="list">
          {data.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
