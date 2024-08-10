import Accordion from "./Accordion";
import { accordionData } from "../../utils/content";
import { v4 as uuid } from "uuid";

export default function AccordionList() {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} key={uuid()} />
      ))}
    </div>
  );
}
