import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Table
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/ActionCreators';

// const Row = (props) => {
//   return (
//     <div>
//       {props.moviesFiltered.map(movie => {
//         return (
//           <tr>
//             <td>{movie.title}</td>
//             <td>{movie.industry_rating}</td>
//             <td>{movie.home_release_year}</td>
//             <td>CSM DR PI</td>
//           </tr>
//         );
//       })}
//     </div>
//   )
// }


const MovieTable = (props) => {
  const [counter, setCounter] = useState(false)
  const movies = useSelector(state => state.movies)
  const [pageNumber, setPageNumber] = useState(20)

  const dispatch = useDispatch()
  const observer = useRef()

  const lastMovieElementRef = useCallback(node => {
    if (movies.moviesLoading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 20)
      }
    })
    if (node) observer.current.observe(node)
  }, [movies.moviesLoading])

  if (counter === false) {
    dispatch(fetchMovies())
    setCounter(true)
  }
  if (movies.moviesLoading) {
    return <Loading />
  }
  // make it a function 
  const row = movies.moviesFiltered.slice(0, pageNumber).map((movie, index) => {
    if (pageNumber === index + 1) {
      return (
        <tr ref={lastMovieElementRef} key={movie.title}>
          <td>{movie.title}</td>
          <td>{movie.industry_rating}</td>
          <td>{movie.home_release_year}</td>
          <td>CSM DR PI</td>
        </tr>
      );
    }
    else {
      return (
        <tr key={movie.title}>
          <td>{movie.title}</td>
          <td>{movie.industry_rating}</td>
          <td>{movie.home_release_year}</td>
          <td>CSM DR PI</td>
        </tr>
      );
    }
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