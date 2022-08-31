import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')

        }, 3000)
    },[])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e',]}
                    idx={15}
                    />
                </h1>
                <p>I'm a professional handball player playing for HC Prilep. Bachelor of Science in Computer Science and Communications Engineering at the University
                "St.Kliment Ohridski" -Bitola. </p>
                <p>I'm a very ambitious front-end developer looking for a intern 
                role in a established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
                </p>
                <p>Handball thought me to be very confident at whatever i am doing, to be curious and to always improve
                on everything that i tend to do.</p>
                <p>If i need to define myself in one sentence that would be a Lover, a sport fanatic, gamer, and tech-obsessed!!!</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faStar} color="#DD0031" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
</>
    )
}

export default About