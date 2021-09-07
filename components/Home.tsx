import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
const Contact = dynamic(
    () => import('@components/Contact'),
    { ssr: false }
)
const Header = dynamic(
    () => import('@components/header'),
    { ssr: false }
)
const LeftNav = dynamic(
    () => import('@components/LeftNav'),
    { ssr: false }
)
const RightNav = dynamic(
    () => import('@components/RightNav'),
    { ssr: false }
)
const Hero = dynamic(
    () => import('@components/Hero'),
    { ssr: false }
)
const AboutMe = dynamic(
    () => import('@components/AboutMe'),
    { ssr: false }
)
const Work = dynamic(
    () => import('@components/Work'),
    { ssr: false }
)
const Project = dynamic(
    () => import('@components/Project'),
    { ssr: false }
)
const Footer = dynamic(
    () => import('@components/Footer'),
    { ssr: false }
)
const Home = () => {
    const contactRef = useRef(null)
    const aboutMeRef = useRef(null)
    const workRef = useRef(null)
    const projectRef = useRef(null)
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
    const contactScrollIntoView = () => {
        contactRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }
    const aboutMeScrollIntoView = () => {
        aboutMeRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }
    const workScrollIntoView = () => {
        workRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }
    const projectScrollIntoView = () => {
        projectRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }
    return (
        <div>
            <Header projectScrollIntoView={projectScrollIntoView} contactScrollIntoView={contactScrollIntoView} aboutMeScrollIntoView={aboutMeScrollIntoView} workScrollIntoView={workScrollIntoView} />
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
        </div>
    )
}
export default Home;

const Container = styled.div`
min-height:100vh;
background-color:#00071C;
width:100%;
padding:0 140px;
${props => props.isTablet && `padding:0 70px;`}
${props => props.isMobile && `padding:0 15px;`}
`