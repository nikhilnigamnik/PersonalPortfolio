import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function Accodion() {
  const [open, setOpen] = useState(1);
 
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const handleAlwaysOpen = () => {
    setOpen((cur) => !cur);
  };
 
  return (
    <div className="z-0">
      <Accordion className="mt-4" open={open == 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Web Design
        </AccordionHeader>
        <AccordionBody>
        Create Your Next Amazing Website Today With Me
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          UI Design
        </AccordionHeader>
        <AccordionBody>
        Create Your Next Amazing Website Today With Me
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
         Digital Marketing
        </AccordionHeader>
        <AccordionBody>
        Create Your Next Amazing Website Today With Me
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        Managing Social Media
        </AccordionHeader>
        <AccordionBody>
        Create Your Next Amazing Website Today With Me
        </AccordionBody>
      </Accordion>
    </div>
  );
}