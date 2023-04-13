import React from 'react';
import { FlexContainer, Typography } from '@/components/atoms';
import profilePhoto from '@/assets/profile_photo.jpeg';
import ableLogo from '@/assets/able-logo.png';
import aimoLogo from '@/assets/aimo-logo.svg';
import deUnaLogo from '@/assets/deuna-logo.png';
import careLinxLogo from '@/assets/carelinx-logo.jpeg';
import theme from '@/utils/theme';

type JobExperienceProps = {
  alt: string;
  companyLogo: string;
  jobPosition: string;
  techStack: string;
}

const jobExperiences = [
  {
    id: 1,
    companyLogo: careLinxLogo,
    alt: 'carelinx-logo',
    jobPosition: 'Software Engineer',
    techStack: 'React, TypeScript & Redux'
  },
  {
    id: 2,
    companyLogo: aimoLogo,
    alt: 'aimo-logo',
    jobPosition: 'React Developer',
    techStack: 'React JS, TypeScript, Redux, Next JS and Express'
  }, {
    id: 3,
    companyLogo: ableLogo,
    alt: 'able-logo',
    jobPosition: 'Software Engineer Intern',
    techStack: 'React JS and Ruby on Rails'
  }
];

const JobExperience: React.FC<JobExperienceProps> = ({ alt, companyLogo, jobPosition, techStack }) => (
  <FlexContainer
    width='400px'
    direction='column'
    padding='20px'
    margin='10px 0 20px 0'
    borderColor={theme.colors.borderColor}
    resWidth='250px'
  >
    <FlexContainer alignItems='center'>
      <Typography margin='0 15px 0 0'>Company:</Typography>
      <img
        src={companyLogo}
        style={{ width: '150px', margin: '20px 0' }}
        alt={alt}
      />
    </FlexContainer>
    <Typography margin='10px 0'>
      Job Position: {jobPosition}
    </Typography>
    <Typography>Tech Stack: {techStack}</Typography>
  </FlexContainer>
);

const About: React.FC<{ path: string }> = () => {
  return (
    <FlexContainer container justify='center' bgColor='#fff' >
      <FlexContainer
        width='80%'
        justify='center'
        alignItems='center'
        margin='20px 0'
        padding='20px'
        borderColor={theme.colors.borderColor}
        resDirection='column'
      >
        <FlexContainer
          direction='column'
          justify='center'
          alignItems='center'
          width='50%'
          resWidth='100%'
        >
          <img
            src={profilePhoto}
            alt='author-profile-img'
            style={{ width: '250px' }}
          />
          <Typography margin='10px 0' fontWeight={700} fontSize='18px'>
            Project: Pokedex React Challenge
          </Typography>
          <FlexContainer alignItems='center' margin='10px 0'>
            <Typography fontWeight={700} fontSize='18px'>
              Company:
            </Typography>
            <img
              src={deUnaLogo}
              alt='deuna-logo'
              style={{ width: '120px', marginLeft: '10px' }}
            />
          </FlexContainer>
          <Typography margin='10px 0' fontWeight={700} fontSize='18px'>
            By Cesar Cachay
          </Typography>
        </FlexContainer>
        <FlexContainer direction='column' width='50%' resWidth='100%'>
          <Typography fontSize='22px' fontWeight={700} margin='10px 0'>
            Working Experience
          </Typography>
          {jobExperiences.map(data => (
            <React.Fragment key={data.id}>
              <JobExperience
                alt={data.alt}
                companyLogo={data.companyLogo}
                jobPosition={data.jobPosition}
                techStack={data.techStack}
              />
            </React.Fragment>
          ))}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default About;
