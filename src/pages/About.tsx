import { Link } from 'react-router-dom'
import dashagaytan from '../assets/images/dashagaytan.jpg'

export default function About(){
    return(
        <>
        <div className='about-container'>

            <div className='about-img'>
                <img src={dashagaytan}/>
            </div>

            <div className='about-text'>
                <h1>My Childhood Dream</h1>
                <p>Growing up, I always dreamed of becoming an artist and working in
                    creative spaces like galleries. I loved drawing, painting, and imagining stories through visuals.
                </p>
                <p>As I got older, that passion evolved into an interest in digital art and design. Eventually leading me into the world of computer science.</p>
                <p>Today, I combine creativity and technology by building digital experiences.</p>

                <Link to="/">
                <button>⬅︎ Home Page</button>
                </Link>
            </div>
        </div>
        </>
    )
}