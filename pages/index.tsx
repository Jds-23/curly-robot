import Head from 'next/head';
import dynamic from 'next/dynamic';
const Home = dynamic(
  () => import('@components/Home'),
  { ssr: false }
)
const Index = () => {
  return (
    <div>
      <Head>
        <title>Joydeep</title>
      </Head>
      <Home />
    </div>
  )
}

export default Index
