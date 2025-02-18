import React, {useCallback} from 'react'
import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const Linedot = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, []);

  const particlesLoaded = useCallback( async () => {}, [])
  return (
    <Particles 
    className='w-full h-full absolute translate-z-0'
    id='tsparticles' 
    init={particlesInit} 
    loaded={particlesLoaded}
    options={{
      fullScreen: {
        enable: true
      },
      background: {
        color: {
          value: '',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onclick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 100,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          }
        }
      },
      particles: {
        color: {
          value: '#00BCD4'
        },
        links: {
          color: '#00BCD4',
          distance: 150,
          enable: true,
          opacity: 0.8,
          width: 1,
        },
        collition: {
          enable: true,
        },
        move: {
          directions: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          }, 
          value: 80
        },
        opacity: {
          value: 0.5,
        }, 
        shape: {
          type: 'circle'
        },
        size: {
          value: {
            min: 3,
            max: 7
          }
        }
      },
      detectRetina: true,
    }}
    />
  )
}

export default Linedot