import gallery from '../assets/images/gallery.png'

export default function Contact(){
    return(
        <>
        <div className='contact-page'>
            <div className='contact-img'>
                <img src={gallery} alt='gallery'/>
            </div>

            <div className='form-section'>
                <h2>Contact Me</h2>
                <p>Fee free to reach out by sending me an email or find me on my socials</p>

                <form className='contact-form'>
                    <input
                    type='text'
                    placeholder='Your Name: '
                    required
                    />
                    <input
                    type='email'
                    placeholder='Your Email: '
                    required
                    />
                    <input
                    type='text'
                    placeholder='Message... '
                    required
                    />
                    <button type='submit'>Send</button>                    
                </form>
            </div>
        </div>
        </>
    )
}