import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';
import { CheckboxList } from './CheckboxComponent';
import { useDispatch, useSelector } from 'react-redux';
import { INDUSTRY_CHECK, LIGHT_CHECK, HEAVY_CHECK, RACIAL_CHECK, RELIGIOUS_CHECK } from '../redux/ActionTypes';
import { industryRating, lightLanguage, heavyLanguage, racialLanguage, religiousLanguage } from '../shared/labels';

const Accordian = (props) => {
    //sets up state for which accordian is open and a default of the target id pass in via props 
    const [isOpen, setIsOpen] = useState(props.targetId);
    // This allows for if an accordian header is clicked on for the accordian to either open or close
    const filterSelections = useSelector(state => state.filterSelections)
    const toggle = (value) => {
        if (value === isOpen) {
            setIsOpen("0")
        }
        else {
            setIsOpen(value);
        }
    }



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
                        <CheckboxList valueState={INDUSTRY_CHECK} filterSelections={filterSelections.industryCheck} showName={true} keyone='industry_rating' name='Industry Rating' checked={false} rows={6} labels={industryRating} />
                    </AccordionBody>
                </AccordionItem>
                {/* <AccordionItem toggle="2">
                    <AccordionHeader onClick={() => toggle('2')} targetId="2">
                        Light Language
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        <CheckboxList valueState={LIGHT_CHECK} showName={false} name='LIGHT_CHECK' checked={false} rows={6} labels={lightLanguage} />
                    </AccordionBody>
                </AccordionItem> */}
                <AccordionItem>
                    <AccordionHeader onClick={() => toggle('3')} targetId="3">
                        Heavy Language
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                        <CheckboxList valueState={HEAVY_CHECK} filterSelections={filterSelections.heavyCheck} showName={false} keyone='heavy_lang_index' name='HEAVY_CHECK' checked={false} rows={6} labels={heavyLanguage} />
                    </AccordionBody>
                </AccordionItem>
                {/* <AccordionItem>
                    <AccordionHeader onClick={() => toggle('4')} targetId="4">
                        Racial + Religious Language
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                        <CheckboxList valueState={RACIAL_CHECK} showName={true} name='Racial' checked={false} rows={2} labels={racialLanguage} />
                        <CheckboxList valueState={RELIGIOUS_CHECK} showName={true} name='Religious' checked={false} rows={2} labels={religiousLanguage} />
                    </AccordionBody>
                </AccordionItem> */}
            </Accordion>

        </div>
    )
}

export default Accordian;