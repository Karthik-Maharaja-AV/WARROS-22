import CountdownTimer from '../Components/CountdownTimer/CountdownTimer'
import Navbar from '../Components/CountdownTimer/Navbar.js'
import Design from '../Components/Design'
import Cards from '../Components/Cards'
import '../styles/globals.css'
import Loading from '../Components/Loading'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Footer from '../Components/Footer'
import Button from '../Components/button'

function MyApp({ Component, pageProps }) {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return <main className=' items-center justify-center'>
    {/* <Loading /> */}
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={
        {
          "fullScreen": {
              "enable": true,
              "zIndex": 1
          },
          "particles": {
              "number": {
                  "value": 20,
                  "density": {
                      "enable": true,
                      "area": 800
                  }
              },
              "color": {
                  "value": "#ffffff"
              },
              "shape": {
                  "type": "circle"
              },
              "opacity": {
                  "value": 0.5,
                  "random": false,
                  "animation": {
                      "enable": false,
                      "speed": 1,
                      "minimumValue": 0.1,
                      "sync": false
                  }
              },
              "size": {
                  "value": 5,
                  "random": {
                      "enable": true,
                      "minimumValue": 1
                  },
                  "animation": {
                      "enable": false,
                      "speed": 40,
                      "minimumValue": 0.1,
                      "sync": false
                  }
              },
              "lineLinked": {
                  "enable": false,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
              },
              "move": {
                  "bounce": true,
                  "enable": true,
                  "speed": 5,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "bounce",
                  "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onHover": {
                      "enable": false,
                      "mode": "repulse",
                      "parallax": {
                          "enable": false,
                          "force": 60,
                          "smooth": 10
                      }
                  },
                  "onClick": {
                      "enable": "false",
                      "mode": "push"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 400,
                      "line_linked": {
                          "opacity": 1
                      }
                  },
                  "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 0.8,
                      "speed": 3
                  },
                  "repulse": {
                      "distance": 200
                  },
                  "push": {
                      "particles_nb": 4
                  },
                  "remove": {
                      "particles_nb": 2
                  }
              }
          },
          "detectRetina": true,
          "background": {
              
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
          }
      }
      }/>
    <Navbar />
    
    <Design />
    <hr className='w-24'></hr>
    
    <CountdownTimer CountdownTimeStampMs={1668078000000}/>
    <hr className='w-24' />
    <Cards />
    <Button />
  
    <Footer />
    <Component {...pageProps} />
  </main>
}

export default MyApp
