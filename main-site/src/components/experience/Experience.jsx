import React from 'react'
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {GrWorkshop} from 'react-icons/gr'

function Experience({ date, jobTitle, location, achievements}) {
  
  const listItems = achievements.map((achievement, index) => 
    <li key={index}>
      - {achievement}
    </li>
  );

  return (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={date}
        iconStyle={{ background: "var(--color-white)" }}
        icon={<GrWorkshop />}
        >
        <h3 className="vertical-timeline-element-title">{jobTitle}</h3>
        <h4 className="vertical-timeline-element-subtitle">{location}</h4>
        <ul className='achievements' >
          {listItems}
        </ul>
    </VerticalTimelineElement>
  )
}

export default Experience