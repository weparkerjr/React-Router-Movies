import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
              {/* Replace this Div with your Routes */}
            <Route exact path="/" component={MovieList} />
            <Route  path="/movies/:id "/>

        {/* * Inside your App file add two routes. */}
  {/* * one route for `/` that loads the `MovieList` component. */}
  {/* * one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component. */}


        </div>
      </div>
    );
  }
}
