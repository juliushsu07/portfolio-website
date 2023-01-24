import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { InView } from 'react-intersection-observer';

import 'react-vertical-timeline-component/style.min.css';
import Experience from './Experience';
import './experiences.css'

import {FaUniversity} from 'react-icons/fa'
import {SiLighthouse} from 'react-icons/si'
import {GiBananaBunch} from 'react-icons/gi'
import {GiEgyptianWalk} from 'react-icons/gi'
import {GiBullseye} from 'react-icons/gi'
import {IoIosRocket} from 'react-icons/io'

const Experiences = ( {setActiveNav} ) => {
  const experiences = [
    {
      "className" : "work",
      "date" : "Mar 2020 - Nov 2022",
      "icon" : <IoIosRocket />,
      "jobTitle" : "Senior Ad Operation Specialist",
      "location" : "Cluep Inc.",
      "achievements" : [
        "Single-handily built a one-page Validation App using React, NodeJS and ExpressJS, which performed READ and UPDATE operations to MongoDB database. This app consisted of several validation tools and was used by ALL Operation team members to ensure everyday tasks were completed with a safety net.",
        "Oversaw the integration of the Validation App with the company's admin dashboard. The integration was done with Redux-observable middleware, bundling tools into one single checkpoint that performed validations on 10 components at once.",
        "Trained and onboarded 10+ Operation team members over the course of 4+ years.",
        "Managed a team of 3 interns who worked on machine-learning image annotations."
      ]
    },
    {
      "className" : "work",
      "date" : "Feb 2018 - Mar 2020",
      "icon" : <GiBullseye />,
      "jobTitle" : "Junior Software Engineer",
      "location" : "Cluep Inc.",
      "achievements" : [
        "Created and maintained over 50 automation python scripts for the Operation team.",
        "Designed and pitched bulk upload features for several front-end components of the admin dashboard. These features were later built and in turn increased operation efficiency by 95% for everyday tasks.",
        "Created, maintained and performed Manual Test Plans for up to 40 components of the company's admin dashboard.",
      ]
    },
    {
      "className" : "education",
      "date" : "Oct 2017 - Jan 2018",
      "icon" : <SiLighthouse />,
      "jobTitle" : "Web Development Bootcamp",
      "location" : "Lighthouse Labs",
      "achievements" : [
        "Javascript & Node.js",
        "ReactJS, Babel & Webpack",
        "SQL & MongoDB",
        "HTML, CSS & Bootstrap",
        "Database Modeling, Code Abstraction & Modular Design",
        "Ruby on Rails & MVC Design Pattern"
      ]
    },
    {
      "className" : "work",
      "date" : "Jun 2016 - Sep 2016",
      "icon" : <GiBananaBunch />,
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
      "icon" : <FaUniversity />,
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
      <h2>My History</h2>
      <InView as="div" onChange={(inView) => { inView ? setActiveNav('#experience') : void(0) } }></InView>
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
        iconStyle={{ background: 'var(--color-white)', color: 'var(--color-text)' }}
        icon={<GiEgyptianWalk />}
      />

      </VerticalTimeline>
    </section>
  )
}

export default Experiences