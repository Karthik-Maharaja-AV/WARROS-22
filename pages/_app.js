import CountdownTimer from '../Components/CountdownTimer/CountdownTimer'
import Navbar from '../Components/CountdownTimer/Navbar.js'
import Design from '../Components/Design'
import Cards from '../Components/Cards'
import '../styles/globals.css'
import Loading from '../Components/Loading'


function MyApp({ Component, pageProps }) {
  return <main className='w-screen items-center justify-center'>
    {/* <Loading /> */}
    <Navbar />
    <Design />
    <CountdownTimer CountdownTimeStampMs={1666601223000}/>
    <Cards />
    <Component {...pageProps} />
  </main>
}

export default MyApp
