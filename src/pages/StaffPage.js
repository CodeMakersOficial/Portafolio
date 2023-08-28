import React from 'react';
import '../styles/pages/layout/staff.css';
import {AiOutlineDownload, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Reveal from '../components/Reveal';

const StaffPage = (props) => {
    return (
        <main className='holderstaff'>
            <Reveal>
            <div className='staf'>
                <h1>Conocé las caras de CodeMakers</h1>
                <h5>Clickeando en los íconos tendrás acceso a nuestro GitHub y LinkedLink, además de poder descargar nuestro currículum.</h5>
                <h2>Abril Maci</h2>
                <div className='circle abru'></div>
                <p>Eu minim pariatur non esse eu nostrud cupidatat. Magna irure sit adipisicing aliqua consectetur minim deserunt deserunt ad et veniam laboris. Excepteur adipisicing cillum nulla duis ex adipisicing. Consectetur ut consequat enim commodo ex sint velit officia ullamco. Nulla id ad esse excepteur et dolore mollit eu ad enim. In sunt excepteur dolore Lorem tempor irure cupidatat irure elit.</p>
                <div className='redes'><AiFillGithub className='red git'/> <AiOutlineDownload className='red cv'/> <AiFillLinkedin className='red link'/></div>
                <hr></hr>
                <h2>Uriel Herrera</h2>
                <div className='circle uri'></div>
                <p>Eu minim pariatur non esse eu nostrud cupidatat. Magna irure sit adipisicing aliqua consectetur minim deserunt deserunt ad et veniam laboris. Excepteur adipisicing cillum nulla duis ex adipisicing. Consectetur ut consequat enim commodo ex sint velit officia ullamco. Nulla id ad esse excepteur et dolore mollit eu ad enim. In sunt excepteur dolore Lorem tempor irure cupidatat irure elit.</p>
                <div className='redes'><AiFillGithub className='red git'/> <AiOutlineDownload className='red cv'/> <AiFillLinkedin className='red link'/></div>
            </div>
            </Reveal>
        </main>
    );
}

export default StaffPage;