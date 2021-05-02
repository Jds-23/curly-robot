import Head from 'next/head';
import Header from '../component/header'
import styled from 'styled-components';
import LeftNav from '../component/LeftNav';
import RightNav from '../component/RightNav';
const Home = () => {
  return (
    <div>
      <Head>
        <title>Joydeep</title>
      </Head>
      <Header />
      <LeftNav />
      <Container>
        <h1>Hello, This is Joydeep's Website</h1>
      </Container>
      <RightNav />
    </div>
  )
}
export default Home;

const Container = styled.div`
min-height:100vh;
background-color:#00071C;
`