import React, { Fragment } from "react";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Skills } from "../components/Skills";
import {
  contact,
  intro,
  projectData,
  education,
  biographyData,
  industryExperience,
  researchExperience,
  publicationData,
  teachingExperience,
  interest,
} from "../config/config";
import { Education } from "../components/Education";
import { BiographyIntroLayout } from "../components/BiographyIntroLayout";
import Experience from "../components/Experience";
import { Publications } from "../components/Publications";

export default function Home() {
  return (
    <Fragment>
      <BiographyIntroLayout
        introData={intro}
        biographyData={biographyData}
        interest={interest}
      />

      <Education title={education.title} schools={education.schools} />

      <Experience
        industryExperience={industryExperience}
        teachingExperience={teachingExperience}
        researchExperience={researchExperience}
      />

      <Skills />

      <Publications
        title={publicationData.title}
        publications={publicationData.publications}
      />
      <Projects title={projectData.title} cards={projectData.cards} />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
    </Fragment>
  );
}
