import React from "react";
import { IndustryExperience } from "./experience/IndustryExperience";
import { TeachingExperience } from "./experience/TeachingExperience";
import { ResearchExperience } from "./experience/ResearchExperience";

const Experience = ({
  industryExperience,
  teachingExperience,
  researchExperience,
}) => {
  return (
    <div>
      <IndustryExperience
        title={industryExperience.title}
        companies={industryExperience.companies}
      />
      <ResearchExperience
        title={researchExperience.title}
        companies={researchExperience.companies}
      />
      <TeachingExperience
        title={teachingExperience.title}
        experiences={teachingExperience.experiences}
      />
    </div>
  );
};

export default Experience;
