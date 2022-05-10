import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Input
} from 'reactstrap';
import { Checkbox } from './Checkboxes'

export const Accordian = (props) => {
    const [isOpen, setIsOpen] = useState(props.targetId);

    const toggle = (value) => {
        if (value === isOpen) {
            setIsOpen("0")
        }
        else {
            setIsOpen(value);
        }
    }

    const lightLanguage = ['Light', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29']
    const heavyLanguage = ['Heavy', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29']
    return (
        <div>
            <Accordion open={isOpen} toggle={function noRefCheck() { }}>
                <AccordionItem >
                    <AccordionHeader onClick={() => toggle('1')} targetId="1">
                        General
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        Hello
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem toggle="2">
                    <AccordionHeader onClick={() => toggle('2')} targetId="2">
                        <Input type="checkbox" /> &nbsp; Light Language
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        <Checkbox label={lightLanguage} />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader onClick={() => toggle('3')} targetId="3">
                        <Input type="checkbox" /> &nbsp; Heavy Language
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                        <Checkbox label={heavyLanguage} />
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
