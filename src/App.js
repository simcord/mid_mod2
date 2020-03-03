import React, { Component }from 'react';
import './App.css';
import apiKey from "./config";
import SearchBar from "./Component/SearchBar";
import Nav from "./Component/Nav";
import Gallery from "./Component/Gallery";

class App extends Component {

constructor () {
    super()
    this.state = {
      items:null,
      isLoaded: false
    }
  }

  componentDidMount() {
    // function that is done right after the page load
    fetch('https://picsum.photos/v2/list?page=2&limit=20')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result)
    })

  }
  render() {
    return (
      <Router>
        <div>
            <ul>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/nav">Nav</Link>
                </li>
                <li>
                  <Link to="/searchbar">SearchBar</Link>
                </li>
            </ul>
              <Switch>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/nav" component={Nav}/>
                <Route path="/searchbar" component={SearchBar}/>
              </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
