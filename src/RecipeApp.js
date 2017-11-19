import React, { Component } from "react";
import Recipe from "./Recipe.js";
import Navbar from './Navbar.js';
import "./Recipe.css";

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Recipe
          title="pasta"
          ingredients={["flour", "water"]}
          instructions="mix ingredients"
          img="https://i.stack.imgur.com/13ZvN.png"
        />
      </div>
    );
  }
}

export default RecipeApp;
