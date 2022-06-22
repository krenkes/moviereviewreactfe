import React from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Accordian from './AccordianComponent';
import MovieTable from './TableComponent';



const Home = (props) => {
    return (
        <>
            <Accordian />
            <MovieTable />
        </>
    );
}

export default Home;  