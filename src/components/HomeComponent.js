import React from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Accordian from './FilterAccordian';
import MovieTable from './TableComponent';



const Home = (props) => {
    return (
        <>
            <Accordian />
            {/* <MovieTable
                movies={props.movies}
                moviesLoading={props.moviesLoading}
                moviesErrMess={props.moviesErrMess}
            /> */}
        </>
    );
}

export default Home;  