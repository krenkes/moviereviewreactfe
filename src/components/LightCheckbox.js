import React, { useState } from 'react';
import {
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

export const Checkboxestwo = (props) => {
    const [zeroChecked, setZero] = useState(false);
    const [oneChecked, setOne] = useState(false);
    const [twoChecked, setTwo] = useState(false);
    const [threeChecked, setThree] = useState(false)
    const [fourChecked, setFour] = useState(false)
    const [fiveChecked, setFive] = useState(false)
    const [sixChecked, setSix] = useState(false)
    const [sevenChecked, setSeven] = useState(false)
    const [eightChecked, setEight] = useState(false)
    const [nineChecked, setNine] = useState(false)
    const [tenChecked, setTen] = useState(false)
    const [elevenChecked, setEleven] = useState(false)
    const [twelveChecked, setTwelve] = useState(false)
    const [thirteenChecked, setThirteen] = useState(false)
    const [fourteenChecked, setFourteen] = useState(false)
    const [fifteenChecked, setFifteen] = useState(false)
    const [sixteenChecked, setSixteen] = useState(false)
    const [seventeenChecked, setSeventeen] = useState(false)
    const [eighteenChecked, setEighteen] = useState(false)

    const [isLightChecked, setIsLightChecked] = useState(false);

    const all = [zeroChecked, oneChecked, twoChecked, threeChecked, fourChecked, fiveChecked, sixChecked, sevenChecked, eightChecked, nineChecked, tenChecked, elevenChecked, twelveChecked, thirteenChecked, fourteenChecked, fifteenChecked, sixteenChecked, seventeenChecked, eighteenChecked]
    const allSet = [setZero, setOne, setTwo, setThree, setFour, setFive, setSix, setSeven, setEight, setNine, setTen, setEleven, setTwelve, setThirteen, setFourteen, setFifteen, setSixteen, setSeventeen, setEighteen]

    const toggleAll = () => {
        setIsLightChecked(!isLightChecked)
        allSet.map(x => {
            x(!isLightChecked)
        }
        )
    }

    const toggle = (x) => {

        allSet[x](!all[x])
        if (all[x] === true) {
            setIsLightChecked(false)
        }

    }

    return (
        <div className="container">
            <Form>
                <div className='row justify-content-start'>
                    <FormGroup check>
                        <Input checked={isLightChecked} type="checkbox" onClick={() => toggleAll()} />
                        <Label className='d-flex justify-content-start' check>
                            Select All
                        </Label>
                    </FormGroup>
                </div>
                <div className='row justify-content-start'>

                    <div className='col-12 col-md-2'>
                        <div className='row justify-content-start'>
                            <FormGroup check>
                                <Input checked={zeroChecked} id={props.label[0]} type="checkbox" onClick={() => toggle(0)} />
                                <Label className='d-flex justify-content-start' check>
                                    {props.label[0]}
                                </Label>
                            </FormGroup>
                        </div>
                        <div className='row'>
                            <FormGroup check>
                                <Input checked={oneChecked} type="checkbox" onClick={() => toggle(1)} />
                                <Label className='d-flex justify-content-start' check>
                                    {props.label[1]}
                                </Label>
                            </FormGroup>
                        </div>
                        <div className='row'>
                            <FormGroup check>
                                <Input checked={twoChecked} type="checkbox" onClick={() => toggle(2)} />
                                <Label className='d-flex justify-content-start' check>
                                    {props.label[2]}
                                </Label>
                            </FormGroup>
                        </div>
                        <div className='row'>
                            <FormGroup check>
                                <Input checked={threeChecked} type="checkbox" onClick={() => toggle(3)} />
                                <Label className='d-flex justify-content-start' check>
                                    {props.label[3]}
                                </Label>
                            </FormGroup>
                        </div>
                        <div className='row'>
                            <FormGroup check>
                                <Input checked={fourChecked} type="checkbox" onClick={() => toggle(4)} />
                                <Label className='d-flex justify-content-start' check>
                                    {props.label[4]}
                                </Label>
                            </FormGroup>
                        </div>
                        <div className='row'>
                            <FormGroup check>
                                <Input checked={fiveChecked} type="checkbox" onClick={() => toggle(5)} />
                                <Label className='d-flex justify-content-start' check>
                                    {props.label[5]}
                                </Label>
                            </FormGroup>
                        </div>
                    </div>
                    <div className='col-12 col-md-2'>
                        <div className='row justify-content-start'>
                            <FormGroup check>
                                <Input checked={sixChecked} type="checkbox" onClick={() => toggle(6)} />
                                <Label className='d-flex justify-content-start' check>
                                    {props.label[6]}
                                </Label>
                            </FormGroup>
                        </div>
                        <div className='row'>
                            <FormGroup check>
                                <Input checked={sevenChecked} type="checkbox" onClick={() => toggle(7)} />
                                <Label className='d-flex justify-content-start' check>
                                    {props.label[7]}
                                </Label>
                            </FormGroup>
                        </div>
                        <div className='row'>
                            <FormGroup check>
                                <Input checked={eightChecked} type="checkbox" onClick={() => toggle(8)} />
                                <Label className='d-flex justify-content-start' check>
                                    {props.label[8]}
                                </Label>
                            </FormGroup>
                        </div>
                        <div className='row'>
                            <FormGroup check>
                                <Input checked={nineChecked} type="checkbox" onClick={() => toggle(9)} />
                                <Label className='d-flex justify-content-start' check>
                                    {props.label[9]}
                                </Label>
                            </FormGroup>
                        </div>
                        <div className='row'>
                            <FormGroup check>
                                <Input checked={tenChecked} type="checkbox" onClick={() => toggle(10)} />
                                <Label className='d-flex justify-content-start' check>
                                    {props.label[10]}
                                </Label>
                            </FormGroup>
                        </div>
                        <div className='row'>
                            <FormGroup check>
                                <Input checked={elevenChecked} type="checkbox" onClick={() => toggle(11)} />
                                <Label className='d-flex justify-content-start' check>
                                    {props.label[11]}
                                </Label>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )
}