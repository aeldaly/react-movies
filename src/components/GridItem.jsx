import React from 'react';
import { Link } from 'react-router-dom';

class GridItem extends React.Component {
  render() {
    const show = this.props.show
    const { name, id, poster_path } = { ...show };

    return(
      <div>
        <ul>
          <li>
            <Link to={`/view/${show.id}`} show={show}>
              <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt={name} />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default GridItem;
