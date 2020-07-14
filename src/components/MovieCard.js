import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      title, storyline, imagePath, id,
    } = movie;
    return (      
      <div data-testid="movie-card">
        <div className="col s3 m3">
          <div className="card movie-card blue-grey darken-1">
            <div className="card-image">
              <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content white-text">
              <p>{storyline}</p>
            </div>
            <div className="card-action">
              <Link to={`/movies/${id}`}>VER DETALHES</Link>
            </div>
          </div>
        </div>
      </div>     
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
