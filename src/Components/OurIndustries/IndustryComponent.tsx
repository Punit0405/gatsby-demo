import React from 'react';
import { LinkComponent } from './OurIndustries.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import slugify from 'slugify';
interface IndustryComponent {
  industry: string;
  categoryName: string;
}

const IndustryComponent = ({ industry, categoryName }: IndustryComponent) => {
  return (
    <>
      <LinkComponent
        to={`/work/${slugify(categoryName, {
          lower: true,
        })}`}
      >
        <span> {industry}</span>
        <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
      </LinkComponent>
    </>
  );
};

export default IndustryComponent;
