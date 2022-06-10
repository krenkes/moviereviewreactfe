import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';
import { CheckboxList } from './CheckboxComponent';
import { GENERAL_CHECK, LIGHT_CHECK } from '../redux/ActionTypes';
import { HEAVY_CHECK } from '../redux/ActionTypes';
import { RACIAL_CHECK } from '../redux/ActionTypes';
import { RELIGIOUS_CHECK } from '../redux/ActionTypes';

const Accordian = (props) => {
    //sets up state for which accordian is open and a default of the target id pass in via props 
    const [isOpen, setIsOpen] = useState(props.targetId);
    // This allows for if an accordian header is clicked on for the accordian to either open or close
    const toggle = (value) => {
        if (value === isOpen) {
            setIsOpen("0")
        }
        else {
            setIsOpen(value);
        }
    }
    // labels and ids for checkboxes eventually will move to its own file
    const lightLanguage = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27']
    const heavyLanguage = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27']
    const racialLanguage = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const religiousLanguage = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const general = ['G', 'PG', 'PG-13', 'R']



    // function Checkboxselect() {
    //     const [checked, setChecked] = useState(true);
    // }
    return (
        <div>
            <Accordion open={isOpen} toggle={function noRefCheck() { }}>
                <AccordionItem >
                    <AccordionHeader onClick={() => toggle('1')} targetId="1">
                        General Filters
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        <CheckboxList valueState={GENERAL_CHECK} showName={true} name='Industry Rating' checked={false} rows={6} labels={general} />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem toggle="2">
                    <AccordionHeader onClick={() => toggle('2')} targetId="2">
                        Light Language
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        <CheckboxList valueState={LIGHT_CHECK} showName={false} name='LIGHT_CHECK' checked={false} rows={6} labels={lightLanguage} />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader onClick={() => toggle('3')} targetId="3">
                        Heavy Language
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                        <CheckboxList valueState={HEAVY_CHECK} showName={false} name='HEAVY_CHECK' checked={false} rows={6} labels={heavyLanguage} />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader onClick={() => toggle('4')} targetId="4">
                        Racial + Religious Language
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                        <CheckboxList valueState={RACIAL_CHECK} showName={true} name='Racial' checked={false} rows={2} labels={racialLanguage} />
                        <CheckboxList valueState={RELIGIOUS_CHECK} showName={true} name='Religious' checked={false} rows={2} labels={religiousLanguage} />
                    </AccordionBody>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default Accordian;