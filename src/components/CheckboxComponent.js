import React, { useState, useEffect, Component } from 'react';
import {
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
// import {
//     lightCheck
// } from '../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { FilterMovies } from './movies'
import { SET_MOVIE_FILTER } from '../redux/ActionTypes';
// import { LIGHT_CHECK } from '../redux/ActionTypes';
// import { HEAVY_CHECK } from '../redux/ActionTypes';

const CheckboxInput = (props) => {
    return (
        <div>
            {props.colIndex.map((x, i) => {
                return (
                    <div className='row '>
                        <FormGroup check>
                            <Input checked={props.checked[x]} id={x} type="checkbox" onChange={() => { props.toggle(x) }} />
                            <Label className='d-flex justify-content-start' check>
                                {props.labels[x]}
                            </Label>
                        </FormGroup>
                    </div>
                );
            })}
        </div>
    )
}

export const CheckboxList = (props) => {
    const dispatch = useDispatch()
    // const movies = useSelector(state => state.movies)
    const [allChecked, setAllChecked] = useState(Array(props.labels.length).fill(props.checked));

    function compare(a, b) {
        return a.every((val, index) => val === b[index]);
    }
    const toggle = (x) => {
        let arr = [...allChecked]
        arr[x] = !(arr[x])
        const y = compare(arr, allChecked)
        let i = 0;
        while (y) {
            i++;
        }
        if (!y) {
            setAllChecked(arr)
        }

    }
    // useEffect(() => {
    //     let displayedMovies = FilterMovies(movies)
    //     dispatch({ type: SET_MOVIE_FILTER, payload: displayedMovies })
    // }, [allChecked]);
    

    useEffect(() => {
        dispatch({ type: props.valueState, payload: allChecked })
    }, [props.valueState]);

    // dispatch({ type: props.valueState, payload: allChecked })
    return (
        <div className="container-fluid">
            <Form>
                <div className='row justify-content-start'>
                    {props.showName === true &&
                        <p className='d-flex justify-content-start'>{props.name}</p>
                    }
                </div>
                {/* <div className='row justify-content-start'>
                        <FormGroup check>
                            <Input checked={isLightChecked} type="checkbox" onChange={() => toggleAll()} />
                            <Label className='d-flex justify-content-start' check>
                                Select All
                            </Label>
                        </FormGroup>
                    </div> */}
                <div className='row justify-content-start'>
                    {props.labels.map((label, index) => {

                        if ((index % props.rows === 0 && index !== 0) || (index === (props.labels.length - 1))) {
                            let arr1 = [];
                            let i = index - 1
                            if (index === (props.labels.length - 1)) {
                                arr1.push(i + 1)
                            }
                            while (i % props.rows !== 0) {
                                arr1.unshift(i)
                                i--
                            }
                            arr1.unshift(i)

                            return (
                                <div className='col-12 col-md-2 '>
                                    <CheckboxInput colIndex={arr1} labels={props.labels} toggle={toggle} checked={allChecked} />
                                </div>
                            )
                        }
                    })}
                </div>
            </Form>
        </div>
    )
}