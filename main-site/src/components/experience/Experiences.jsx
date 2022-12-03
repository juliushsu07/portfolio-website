import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Experience from './Experience';

import {FaSchool} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'

function Experiences() {
  const experiences = [
    {
      "className" : "work",
      "date" : "Mar 2020 - Nov 2022",
      "icon" : "ICON1",
      "jobTitle" : "Senior Ad Operation Specialist",
      "location" : "Cluep Inc.",
      "achievements" : [
        "Single-handily built a one-page Validation App using React, NodeJS and ExpressJS, which performed READ and UPDATE operations to MongoDB database. This app consisted of several validation tools and was used by ALL Operation team members to ensure everyday tasks were completed with a safety net.",
        "Oversaw the integration of the Validation App with the company's admin dashboard. The integration was done with the Redux-observable middleware, bundling tools into one single checkpoint that performed validations on 10 components at once.",
        "Wrote and maintained up to 100 automation scripts for the Operation team.",
        "Managed a team of 3 interns who worked on machine-learning image annotations."
      ]
    },
    {
      "className" : "work",
      "date" : "Feb 2018 - Mar 2020",
      "icon" : "ICON2",
      "jobTitle" : "Junior Computer Engineer",
      "location" : "Cluep Inc.",
      "achievements" : [
        "Designed and pitched bulk upload features for several front-end components of the admin dashboard. These features were later built and in turn increased operation efficiency by 95% for many everyday tasks.",
        "Participated in weekly sprint meetings, brainstorming designs with senior developers.",
        "Developed, maintained and performed Manual Test Plans for up to 40 components of the company's admin dashboard.",
      ]
    },
    {
      "className" : "education",
      "date" : "Oct 2017 - Jan 2018",
      "icon" : "ICON3",
      "jobTitle" : "Web Development Bootcamp",
      "location" : "Lighthouse Labs",
      "achievements" : [
        "Javascript & Node.js",
        "ReactJS, Babel & Webpack",
        "SQL & MongoDB.",
        "HTML, CSS & Bootstrap.",
        "Database Modeling, Code Abstraction & Modular Design",
        "Ruby on Rails & MVC Design Pattern."
      ]
    },
    {
      "className" : "work",
      "date" : "Jun 2016 - Sep 2016",
      "icon" : "ICON4",
      "jobTitle" : "Web Developer Intern",
      "location" : "Clever Banana Studios Inc.",
      "achievements" : [
        "Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript and PHP.",
        "Designed and recommended improvements to new and existing website templates.",
        "Assisted in troubleshooting issues on client websites.",
        "Worked closely with a small team consisting of 2 designers and 1 developer."
      ]
    },
    {
      "className" : "education",
      "date" : "2010 - 2015",
      "icon" : "ICON5",
      "jobTitle" : "Bachelor of Computer Engineering",
      "location" : "University of British Columbia",
      "achievements" : [
        "Algorithm Design and Analysis",
        "Operating System (Linux)",
        "Advanced Relational Database and SQL",
        "Computer Security",
        "Java, C, C++ & Assembly",
      ]
    },
  ]

  return (
    <section id='experience'>
      
      <h5>My Employment and Education</h5>  
      <h2>History</h2>
      <VerticalTimeline className='container experience__container'>
        {experiences.map( (experience,index) => (
          <Experience
          key={index}
          className={experience.className}
          date={experience.date}
          icon={experience.icon}
          achievements={experience.achievements}
          location={experience.location}
          jobTitle={experience.jobTitle}
        />
        ))}
      
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<AiFillStar />}
      />

    </VerticalTimeline>
    </section>
  )
}

export default Experiences