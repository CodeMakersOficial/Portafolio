import React from 'react';
import '../styles/pages/layout/staff.css';
import {AiOutlineDownload, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Reveal from '../components/Reveal';
import curriculumPDF from '../assets/Uriel-Herrera-CV.pdf';

const StaffPage = (props) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = curriculumPDF;
        link.download = 'curriculum.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return (
        <main className='holderstaff'>
            <Reveal>
            <div className='staf'>
                <h1>Conocé las caras de CodeMakers</h1>
                <h5>Clickeando en los íconos tendrás acceso a nuestro GitHub y LinkedLink, además de poder descargar nuestro currículum.</h5>
                <h2>Abril Maci</h2>
                <div className='circle abru'></div>
                <p>Estudiante de la ingeniería en sistemas en la UADE, apasionada por el código y con gran disposición al seguimiento de redes en un plan integral de expansión, me distingo por mis cualidades de comunicación en un proceso técnico. Conocé más sobre mí descargando mi currículum.</p>
                <div className='redes'><AiFillGithub className='red git'/> <AiOutlineDownload className='red cv' /> <AiFillLinkedin className='red link'/></div>
                <hr></hr>
                <h2>Uriel Herrera</h2>
                <div className='circle uri'></div>
                <p>Estudiante de dessarrollo de software en el Instituo de Formación Técnica Superior N°4, atraído por la seguridad y los datos, especializado en programación realicé múltiples certificaciones para mi capacitación. Vas a poder encontrar más información descargando mi currículum.</p>
                <div className='redes'><a href='https://github.com/uriel285' target='_blank' rel='noreferrer'><AiFillGithub className='red git'/></a> <AiOutlineDownload className='red cv' onClick={handleDownload}/> <a href='https://www.linkedin.com/in/urielherrera-it/' target='_blank' rel='noreferrer'><AiFillLinkedin className='red link'/></a></div>
            </div>
            </Reveal>
        </main>
    );
}

export default StaffPage;