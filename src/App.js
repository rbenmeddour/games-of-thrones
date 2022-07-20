import React from "react";
import Character from "./component/Character";
import "./style/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      favorites: [],
    };
  }

  displayFavorites = () => {
    this.setState({
      All: false,
      favorites: true,
    });
  };

  displayAll = () => {
    this.setState({
      All: true,
      favorites: false,
    });
  };

  async componentDidMount() {
    // console.log("componentDidMount");
    const request = await fetch("https://thronesapi.com/api/v2/Characters");
    // console.log(request);
    const data = await request.json();
    // console.log(response);
    this.setState({
      characters: data,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <section>
          <h1>Game of thrones</h1>
          <button className="" onClick={this.displayAll}>
            All
          </button>
          <button className=" m-3" onClick={this.displayFavorites}>
            Favorites
          </button>
        </section>
        <div className="container row d-flex justify-content-center">
          {this.state.characters.map((character) => {
            return (
              <Character
                name={character.fullName}
                title={character.title}
                image={character.imageUrl}
                handleFavoriteClick={() => {
                  this.state.favorites.push(character);
                }}
                favorites={this.state.favorites}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
