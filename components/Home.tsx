import dynamic from "next/dynamic";
import styled from "styled-components";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
const Contact = dynamic(() => import("@components/Contact"), { ssr: false });
const Header = dynamic(() => import("@components/header"), { ssr: false });
const LeftNav = dynamic(() => import("@components/LeftNav"), { ssr: false });
const RightNav = dynamic(() => import("@components/RightNav"), { ssr: false });
const Hero = dynamic(() => import("@components/Hero"), { ssr: false });
const AboutMe = dynamic(() => import("@components/AboutMe"), { ssr: false });
const Work = dynamic(() => import("@components/Work"), { ssr: false });
const Project = dynamic(() => import("@components/Project"), { ssr: false });
const Footer = dynamic(() => import("@components/Footer"), { ssr: false });
const Home = () => {
  const contactRef = useRef(null);
  const aboutMeRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const contactScrollIntoView = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const aboutMeScrollIntoView = () => {
    aboutMeRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const workScrollIntoView = () => {
    workRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const projectScrollIntoView = () => {
    projectRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Header
        projectScrollIntoView={projectScrollIntoView}
        contactScrollIntoView={contactScrollIntoView}
        aboutMeScrollIntoView={aboutMeScrollIntoView}
        workScrollIntoView={workScrollIntoView}
      />
      {!isMobile && <LeftNav isTablet={isTablet} />}
      <Container isMobile={isMobile} isTablet={isTablet}>
        <Hero isMobile={isMobile} isTablet={isTablet} />
        <span ref={aboutMeRef} />
        <AboutMe isMobile={isMobile} isTablet={isTablet} />
        <span ref={workRef} />
        <Work />
        <span ref={projectRef} />
        <Project />
        <span ref={contactRef} />
        <Contact />
        <Footer />
      </Container>
      {!isMobile && <RightNav isTablet={isTablet} />}
      <Gradient />
    </div>
  );
};
export default Home;

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #1e2961 0%, rgba(30, 41, 97, 0.87) 100%);
  /* background: linear-gradient(
    180deg,
    #dfe4ff 0%,
    rgba(223, 228, 255, 0.87) 100%
  ); */
  z-index: 0;
  width: 100%;
  padding: 0 140px;
  ${(props) => props.isTablet && `padding:0 70px;`}
  ${(props) => props.isMobile && `padding:0 15px;`}
`;
const Gradient = styled.div`
  position: absolute;
  z-index: 0;
  width: min(1049px, calc((749 / 1440) * 100 * 1vw));
  height: min(1049px, calc((749 / 1440) * 100 * 1vw));
  left: max(-212px, calc((-212 / 1440) * 100 * 1vw));
  top: min(300px, calc((300 / 1440) * 100 * 1vw));
  background: linear-gradient(180deg, rgba(9, 232, 165, 0.59) 0%, #09e8a5 100%);
  filter: blur(120px);
  border-radius: 50%;
`;
