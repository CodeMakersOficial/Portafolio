import React from 'react';
import '../styles/pages/layout/home.css';
import Atropos from "atropos/react";
import "atropos/atropos.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Reveal from '../components/Reveal';
import {AiOutlineInstagram, AiFillGithub} from 'react-icons/ai';

import imagendefault from '../assets/imagendefault.png'


const HomePage = (props) => {
    return (
        <main className='holderhome'>
            <Atropos className='atropos-banner' highlight={false} shadow={false}>
                <section className='portada atropos-banner-spacer' data-atropos-offset="-5" >
                    <h1 data-atropos-offset="5">¿Qué es CodeMakers?</h1>
                </section>
            </Atropos>

            <div className='texto'>
                <p>CodeMakers es un proyecto creado por Abril Maci y Uriel Herrera, dos estudiantes que se propusieron juntos ofrecer soluciones através del desarrollo de software. Siendo así nuestras redes una colaboración al mundo informático donde compartimos nuestros descubrimientos y también, nuestro contacto es tu línea de emergencia cada vez que requieras nuestro servicio. <br></br>
                </p>
            </div>
            <Reveal>
            <div className='presentacion'>
                <h1>¿Qué hace CodeMakers?</h1>
                <h2>CodeMakers tiene dos objetivos:</h2> 
                <ul>
                <li><p>Proporcionarle a tu empresa el boost que necesita a través de la programación, ya sea con un comercio digital, una web estática, un programa de escritorio para gestión y contabilidad, o cualquier otro servicio que necesites.</p></li>
                 <li><p>Compartir en nuestras redes código e información que le pueda ser útil a otros programadores, por lo que encontraras reels y vídeos nuestros tocando esta temática a menudo, además de repositorios públicos en nuestro GitHub para que puedas inpirarte!</p></li>
                 </ul>
                 <div className='enlaces'><AiFillGithub className='url git'/> <AiOutlineInstagram className='url insta'/></div>
            </div>
            </Reveal>
            <Reveal>
            <div className='vision'>
                <h2>Visión</h2>
                <p>Eu minim pariatur non esse eu nostrud cupidatat. Magna irure sit adipisicing aliqua consectetur minim deserunt deserunt ad et veniam laboris. Excepteur adipisicing cillum nulla duis ex adipisicing. Consectetur ut consequat enim commodo ex sint velit officia ullamco. Nulla id ad esse excepteur et dolore mollit eu ad enim. In sunt excepteur dolore Lorem tempor irure cupidatat irure elit.</p>
                <hr></hr>
                <h2>Valores</h2>
                <h6>Deslizá para ver todos!</h6>
                <Swiper
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{clickable:true}}
                scrollbar={{draggable:true}}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide><div>
                    <h3 className='valor'>Valor 1</h3>
                    <img src={imagendefault} alt='imagendefault'/>
                    <h6>Tempor eu quis velit labore. Reprehenderit consectetur ipsum irure est ea. Eiusmod dolor minim sint ullamco dolore ipsum.</h6>
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <h3 className='valor'>Valor 2</h3>
                    <img src={imagendefault} alt='imagendefault'/>
                    <h6>Tempor eu quis velit labore. Reprehenderit consectetur ipsum irure est ea. Eiusmod dolor minim sint ullamco dolore ipsum.</h6>
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <h3 className='valor'>Valor 3</h3>
                    <img src={imagendefault} alt='imagendefault'/>
                    <h6>Tempor eu quis velit labore. Reprehenderit consectetur ipsum irure est ea. Eiusmod dolor minim sint ullamco dolore ipsum.</h6>
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <h3 className='valor'>Valor 4</h3>
                    <img src={imagendefault} alt='imagendefault'/>
                    <h6>Tempor eu quis velit labore. Reprehenderit consectetur ipsum irure est ea. Eiusmod dolor minim sint ullamco dolore ipsum.</h6>
                </div></SwiperSlide>
                </Swiper>
            </div>
            </Reveal>
        </main>
    );
}

export default HomePage;