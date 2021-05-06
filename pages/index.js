import Head from 'next/head';
import Header from '@components/header'
import styled from 'styled-components';
import LeftNav from '@components//LeftNav';
import RightNav from '@components//RightNav';
import Hero from '@components//Hero';
import AboutMe from '@components//AboutMe';
import Work from '@components/Work';
import Footer from '@components/Footer';
import { useRef } from 'react';
const Home = () => {
  const heroRef = useRef(null)
  const aboutMeRef = useRef(null)
  const workRef = useRef(null)
  const heroScrollIntoView = () => {
    heroRef.current.scrollIntoView({
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
  return (
    <div>
      <Head>
        <title>Joydeep</title>
      </Head>
      <Header heroScrollIntoView={heroScrollIntoView} aboutMeScrollIntoView={aboutMeScrollIntoView} workScrollIntoView={workScrollIntoView} />
      <LeftNav />
      <Container>
        <span ref={heroRef} />
        <Hero />
        <span ref={aboutMeRef} />
        <AboutMe />
        <span ref={workRef} />
        <Work />
        <Footer />
      </Container>
      <RightNav />
    </div>
  )
}
export default Home;

const Container = styled.div`
min-height:100vh;
background-color:#00071C;
width:100%;
padding:0 140px;
`