import CountdownTimer from '../Components/CountdownTimer/CountdownTimer'
import Navbar from '../Components/CountdownTimer/Navbar.js'
import Design from '../Components/Design'
import Cards from '../Components/Cards'
import '../styles/globals.css'
import Loading from '../Components/Loading'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Footer from '../Components/Footer'

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

      options={{
        "particles": {
          "number": {
            "value": 380,
            "density": {
              "enable": true,
              "value_area": 5000
            }
          },
          "color": {
            "value": "#ffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 0
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
    }}
    />
    <Navbar />
    
    <Design />
    <hr className='w-24'></hr>
    <CountdownTimer CountdownTimeStampMs={1668078000000}/>
    <hr className='w-24' />
    <Cards />
  
    <Footer />
    <Component {...pageProps} />
  </main>
}

export default MyApp
