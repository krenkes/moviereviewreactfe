import React, { useState } from 'react';
import {
  Table
} from 'reactstrap';
import { Loading } from './LoadingComponent';




const MovieTable = (props) => {
  // console.log(props.movies)
  if (props.moviesLoading) {
    return <Loading />
  }

  const row = props.movies.map(movie => {
    return (
      // <div key={movie.id} className="col-md-5 m-1">
      <tr>
        <td>{movie.title}</td>
        <td>{movie.industry_rating}</td>
        <td>{movie.home_release_year}</td>
        <td>CSM DR PI</td>
      </tr>
      // </div>
    );
  });
  return (
    <div >
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th className='col-5'>Title</th>
            <th className='col-2'>Rating</th>
            <th className='col-2'>Release Year</th>
            <th className='col-2'>Links</th>
          </tr>
        </thead>
        <tbody>
          {row}
          {/* <tr>
            <td>{props.movies[0]}</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  )
}

export default MovieTable;