import React, { useState } from 'react';
import {
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

export const Checkbox = (props) => {
    

    return (
        <div className="container">
            <Form>
                <div className='row justify-content-start'>
                    {props.label.map((labelName, index) => {
                        if (index % 6 === 0 && index !== 0) {
                            return (
                                <div className='col-12 col-md-2'>
                                    <div className='row justify-content-start'>
                                        <FormGroup check>
                                            <Input checked={props.checked} type="checkbox" />
                                            <Label className='d-flex justify-content-start' check>
                                                {props.label[index - 6]}
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className='row'>
                                        <FormGroup check>
                                            <Input checked={props.checked} type="checkbox" />
                                            <Label className='d-flex justify-content-start' check>
                                                {props.label[index - 5]}
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className='row'>
                                        <FormGroup check>
                                            <Input checked={props.checked} type="checkbox" />
                                            <Label className='d-flex justify-content-start' check>
                                                {props.label[index - 4]}
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className='row'>
                                        <FormGroup check>
                                            <Input checked={props.checked} type="checkbox" />
                                            <Label className='d-flex justify-content-start' check>
                                                {props.label[index - 3]}
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className='row'>
                                        <FormGroup check>
                                            <Input checked={props.checked} type="checkbox" />
                                            <Label className='d-flex justify-content-start' check>
                                                {props.label[index - 2]}
                                            </Label>
                                        </FormGroup>
                                    </div>
                                    <div className='row'>
                                        <FormGroup check>
                                            <Input checked={props.checked} type="checkbox" />
                                            <Label className='d-flex justify-content-start' check>
                                                {props.label[index - 1]}
                                            </Label>
                                        </FormGroup>
                                    </div>
                                </div>
                            );
                        }
                        // Below renders the last incomplete line of checkboxes 
                        else if (index === (props.label.length - 1)) {
                            let num = props.label.length % 6
                            return (
                                <div className='col-12 col-md-2'>
                                    {num > 5 &&
                                        <div className='row'>
                                            <FormGroup check>
                                                <Input checked={props.checked} type="checkbox" />
                                                <Label className='d-flex justify-content-start' check>
                                                    {props.label[index - 5]}
                                                </Label>
                                            </FormGroup>
                                        </div>
                                    }
                                    {num > 4 &&
                                        <div className='row'>
                                            <FormGroup check>
                                                <Input checked={props.checked} type="checkbox" />
                                                <Label className='d-flex justify-content-start' check>
                                                    {props.label[index - 4]}
                                                </Label>
                                            </FormGroup>
                                        </div>
                                    }
                                    {num > 3 &&
                                        <div className='row'>
                                            <FormGroup check>
                                                <Input checked={props.checked} type="checkbox" />
                                                <Label className='d-flex justify-content-start' check>
                                                    {props.label[index - 3]}
                                                </Label>
                                            </FormGroup>
                                        </div>
                                    }
                                    {num > 2 &&
                                        <div className='row'>
                                            <FormGroup check>
                                                <Input checked={props.checked} type="checkbox" />
                                                <Label className='d-flex justify-content-start' check>
                                                    {props.label[index - 2]}
                                                </Label>
                                            </FormGroup>
                                        </div>
                                    }
                                    {num > 1 &&
                                        <div className='row'>
                                            <FormGroup check>
                                                <Input checked={props.checked} type="checkbox" />
                                                <Label className='d-flex justify-content-start' check>
                                                    {props.label[index - 1]}
                                                </Label>
                                            </FormGroup>
                                        </div>
                                    }
                                    <div className='row'>
                                        <FormGroup check>
                                            <Input checked={props.checked} type="checkbox" />
                                            <Label className='d-flex justify-content-start' check>
                                                {props.label[index]}
                                            </Label>
                                        </FormGroup>
                                    </div>
                                </div>
                            );
                        }

                    })}
                </div>
            </Form>
        </div>
    )
}


