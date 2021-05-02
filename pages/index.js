import Head from 'next/head';
import Header from '../component/header'
import styled from 'styled-components';
import LeftNav from '../component/LeftNav';
import RightNav from '../component/RightNav';
import Hero from '../component/Hero';
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