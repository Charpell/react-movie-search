import React, { Component } from 'react'


class MovieRow extends Component {
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
            {title}
            <p>{overview}</p>
            </td>
          </tr>
        </tbody>
    </table>
    )
  }
}

export default MovieRow;