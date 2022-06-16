import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
   
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)
    }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t','','M','e']}
                        idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo nunc, rutrum .</p>
                <p>Morbi tristique quis felis sit amet consectetur. Praesent gravida libero mauris, sit amet mollis arcu egestas sit amet. Nulla et lorem quis orci rhoncus ornare. Duis placerat laoreet purus, a iaculis neque semper ac. Donec vestibulum augue sed est ornare, vel porttitor ligula pellentesque. Morbi in vehicula elit. Quisque a mi in sem convallis varius mattis eget sapien. Donec eget odio fermentum,</p>
                <p>Rhoncus ornare. Duis placerat laoreet purus, a iaculis neque semper ac. Donec vestibulum augue sed est ornare, vel porttitor ligula pellentesque. Morbi in vehicula elit. Quisque a mi in sem convallis varius mattis eget sapien. Donec eget odio fermentum,</p>
              
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>

        </div>
        <Loader type="pacman"/>
        </>
   )
}

export default About