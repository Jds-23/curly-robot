import Head from 'next/head';
import styles from '../styles/Home.module.css'
const Home = () => {
  return (
    <div>
      <Head>
        <title>Jds</title>
      </Head>
      <div className={styles.container}>
        <h1>Hello, This is Joydeep's Website</h1>
      </div>
    </div>
  )
}
export default Home;