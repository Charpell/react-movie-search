import React, { Component } from 'react'


class MovieRow extends Component {
  viewMovie = () => {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    const { movie: { id, poster_src, title, overview } } = this.props;
    
    return(
      <table key={id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="120" src={poster_src} />
            </td>

            <td>
              <h3>{title}</h3>
              <p>{overview}</p>
              <input type="button" onClick={this.viewMovie} value="View"/>
            </td>
          </tr>
        </tbody>
    </table>
    )
  }
}

export default MovieRow;