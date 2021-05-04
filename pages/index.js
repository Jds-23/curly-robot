import Head from 'next/head';
import Header from '@components/header'
import styled from 'styled-components';
import LeftNav from '@components//LeftNav';
import RightNav from '@components//RightNav';
import Hero from '@components//Hero';
import AboutMe from '@components//AboutMe';
import Work from '@components/Work';
const Home = () => {
  return (
    <div>
      <Head>
        <title>Joydeep</title>
      </Head>
      <Header />
      <LeftNav />
      <Container>
        <Hero />
        <AboutMe />
        <Work />
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