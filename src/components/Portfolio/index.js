import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import Card from '../Card'

const Portfolio = () => {

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
                    strArray={['S','k','i','l','l','s ']}
                    idx={15}
                    />
                </h1>
                <p>Recently, on 28.08.2022 i was awarded with the Best goal Scorer at a Handball tournament
                "Mile Neshkoski" with 25 goals scored in 3 matches played.</p>
                <p>While finishing university, i came across courses for Frontend development, learning about the basics HTML, CSS, JavaScript and
                the advanced ReactJS.
                </p>
                <p>In the last two seasons, season 2020-2021, and season 2021-2022, i finished ranked No.11 by most goals scored in the Macedonian Handball SuperLeague</p>
                
            </div>
            <div className='App'>
                <Card 
                    title='Carrer'
                    imageUrl='https://24rakomet.mk/wp-content/uploads/2022/07/davor-shokoski-rk-prilep-1024x683.jpg'
                    body='Clubs'
                    body1='2011-2019 - HC Prilep'
                    body2='2019-2020 - HC Butel'
                    body3='2020- HC Metalurg (loan)'
                    body4='2020- and now HC Prilep'
                    />
            </div>
        </div>
        <Loader type="pacman" />
</>
    )
}
export default Portfolio