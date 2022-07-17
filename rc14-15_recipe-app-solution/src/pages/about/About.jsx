import { AboutContainer, InfoContainer, StyledImage } from './About.style';

import codingSvg from '../../assets/coding.svg';

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={codingSvg} />
      <div>
        <h1>
          About Software Developer <span>Ella Johnson</span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'am Ella</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
          Python, AWS Services.
        </h4>
        <h2>
          <a href="mailto:ella.johnson@itdeveloper.com">Send email</a> :
          ella.johnson@itdeveloper.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
