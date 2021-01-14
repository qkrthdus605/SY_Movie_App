import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  // axios가 끝날 때까지 기다렸다가 진행(async, await)
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount(){
     this.getMovies();
  }
  render(){
    const{ isLoading } = this.state;
    return(
      <div>{isLoading ? "Loading..." : "We are ready!"}</div>
    )
  }
}
export default App;
