import React from "react";
import axios from "axios";

import "./Characters.css";
import DisplayCharacter from "./DisplayCharacter";

class Characters extends React.Component {
  state = {
    characters: [],
    isloaded: false,
  };

  getCharacters = async () => {
    const result = await axios
      .get("https://miadil.github.io/starwars-api/api/all.json")
      this.setState({ characters: result.data, isloaded: true });

    // axios
    //   .get("https://miadil.github.io/starwars-api/api/all.json")
    //   .then((res) => this.setState({ characters: res.data, isloaded: true }));

    // console.log(result);
    // fetch("https://miadil.github.io/starwars-api/api/all.json")
    //   .then((res) => res.json())
    //   .then((res) => this.setState({ characters: res, isloaded: true }));
  };
  componentDidMount() {
    this.getCharacters();
  }
  render() {
    const { characters, isloaded } = this.state;
    return (
      <>
        {!isloaded ? (
          <div>Loading...</div>
        ) : (
          <div>
            Characters Chicken code school
            <div>
              {characters.map((character) => (
                <DisplayCharacter character={character} key={character} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Characters;
