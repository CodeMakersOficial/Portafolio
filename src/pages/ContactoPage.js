import React from 'react';
import '../styles/pages/layout/contacto.css';
import ReCAPTCHA from 'react-google-recaptcha';
import Reveal from '../components/Reveal';

const ContactoPage = (props) => {
    return (
        <main className='contactohome'>
        <Reveal>
        <div className='formulario'>
            <h1>Contacto Rápido</h1>
            <form>
            <label htmlFor="nombre">Nombre</label> 
            <br/>
            <input type="text" />
            <br/>
            <label htmlFor="email">Mail</label>
            <br />
            <input type="text"/>
            <br/>
            <label htmlFor="telefono">Teléfono</label>
            <br />
            <input type="text" />
            <br/>
            <label htmlFor="mensaje">Mensaje</label>
            <br />
            <textarea></textarea>
            <br/>
            <div className='captcha-container'>
              <ReCAPTCHA
                sitekey="6LfItQYnAAAAAOwsmtne3FcSGByg-yHP2DogHvRs"
              className='captchas'/>
            </div>
            <br/>
            <div className="divbtn">
            <button>Enviar</button>
            </div>
            </form>
        </div>
        </Reveal>
        <Reveal>
        <div className='ig'>
          <h4>También podés escribirnos por mensaje directo a Instagram</h4>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg>
          <h1>@Codemakers</h1>
        </div>
        </Reveal>
        </main>
    );
}

export default ContactoPage;