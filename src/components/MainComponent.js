import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovies } from '../redux/ActionCreators';
// import { actions } from 'react-redux-form';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        // movies: state.movies
    };
};

const mapDispatchToProps = {
    // fetchMovies: () => (fetchMovies()),
};

class Main extends Component {

    componentDidMount() {
        // this.props.fetchMovies();
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    // movies={this.props.movies.movies}
                    // moviesLoading={this.props.movies.isLoading}
                    // moviesErrMess={this.props.movies.errMess}
                />
            );
        }



        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/' component={HomePage} />
                    {/* <Redirect to='/home' /> */}
                </Switch>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
