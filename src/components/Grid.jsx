import React from 'react';

import GridItem from './GridItem';
import Show from '../models/show.jsx';


class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    }
  }

  componentDidMount() {
    const self = this;

    new Show().getShows().then(function(res) {
      const shows = res.data.results;
      console.log(self.shows);

      self.setState({ shows });
    });
  }

  render() {
    return(
      <div>
        <h1>Popular Shows</h1>
        { this.state.shows.map(show => (
            <GridItem key={show.id} show={show} />
          ))
        }
      </div>
    );
  }
}

export default Grid;
