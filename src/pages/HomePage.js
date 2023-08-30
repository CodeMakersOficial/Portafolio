import React, {useEffect, useState} from 'react';
import '../styles/pages/layout/home.css';
import Atropos from "atropos/react";
import "atropos/atropos.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Reveal from '../components/Reveal';
import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';

import imgExcelencia from '../assets/excelencia.jpg'
import imgInnovacion from '../assets/innovacion.jpg'
import imgColaboracion from '../assets/colaboracion.jpg'
import imgAprendizaje from '../assets/aprendizaje.jpg'


const HomePage = (props) => {
    const [slides, setSlides] = useState(window.innerWidth <= 750 ? 1 : 2);

    useEffect(() => {
        const handleResize = () => {
            setSlides(window.innerWidth <= 750 ? 1 : 2);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <main className='holderhome'>
            <Atropos className='atropos-banner' highlight={false} shadow={false}>
                <section className='portada atropos-banner-spacer' data-atropos-offset="-5" >
                    <h1 data-atropos-offset="5">¿Qué es CodeMakers?</h1>
                </section>
            </Atropos>

            <div className='texto'>
                <p>CodeMakers es un proyecto creado por Abril Maci y Uriel Herrera, dos estudiantes que se propusieron juntos ofrecer soluciones através del desarrollo de software. Siendo así nuestras redes una colaboración al mundo informático donde compartimos nuestros descubrimientos, y también, el mejor servicio cada vez que tu empresa necesite apoyo tecnológico. <br></br>
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
                    <div className='enlaces'><a href='https://github.com/CodeMakersOficial' target='_blank' rel='noreferrer'><AiFillGithub className='url git' /></a> <a href='https://www.instagram.com/code.makerss/' target='_blank' rel='noreferrer'><AiOutlineInstagram className='url insta' /></a></div>
                </div> 
            </Reveal>
            <Reveal>
                <div className='vision'>
                    <h2>Visión</h2>
                    <p>Imaginamos un mundo donde los problemas más complejos encuentren soluciones simples y elegantes en la intersección de la creatividad y la tecnología. Nuestra visión es un faro que nos guía a explorar lo desconocido y a desafiar los límites convencionales. Creemos que cada línea de código, cada diseño de interfaz y cada algoritmo puede ser una piedra angular para un mañana más brillante.
                        <br></br>
                        Esta visión no es solo sobre el software que creamos, sino también sobre el impacto que tiene en las vidas de las personas. Nos esforzamos por empoderar a las empresas con herramientas que impulsan su éxito y por enriquecer las experiencias individuales con soluciones intuitivas y transformadoras.
                        <br></br>
                        Nuestra pasión por la innovación es lo que nos impulsa a trabajar incansablemente y a trascender los límites, inspirando a otros a unirse a nosotros en la búsqueda de un futuro que sea más eficiente, más conectado y lleno de posibilidades emocionantes. Juntos, estamos dando forma al mañana a través de la visión audaz de hoy.</p>
                    <hr></hr>
                    <h2>Valores</h2>
                    <h6>Deslizá para ver todos!</h6>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={slides}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide><div>
                            <h3 className='valor'>Innovación</h3>
                            <img src={imgInnovacion} alt='imagendefault' className='imgValor' />
                            <h6> Nos esforzamos por liderar constantemente con nuevas ideas y soluciones, desafiando los límites convencionales y creando tecnología que marque la pauta en la industria.</h6>
                        </div></SwiperSlide>
                        <SwiperSlide><div>
                            <h3 className='valor'>Excelencia</h3>
                            <img src={imgExcelencia} alt='imagendefault' className='imgValor' />
                            <h6>Buscamos la perfección en todo lo que hacemos, desde el diseño de software hasta la experiencia del usuario. Nuestro compromiso con la excelencia garantiza que entreguemos productos y servicios de la más alta calidad.</h6>
                        </div></SwiperSlide>
                        <SwiperSlide><div>
                            <h3 className='valor'>Colaboración</h3>
                            <img src={imgColaboracion} alt='imagendefault' className='imgValor' />
                            <h6>Creemos que las mejores soluciones emergen de la colaboración y el trabajo en equipo. Fomentamos un entorno donde las mentes creativas se unen para resolver desafíos complejos y lograr resultados excepcionales.</h6>
                        </div></SwiperSlide>
                        <SwiperSlide><div>
                            <h3 className='valor'>Aprendizaje Continuo</h3>
                            <img src={imgAprendizaje} alt='imagendefault' className='imgValor' />
                            <h6>El mundo tecnológico evoluciona constantemente, por lo que fomentamos un ambiente en el que el aprendizaje sea constante. Estamos comprometidos a estar al tanto de las últimas tendencias y técnicas para ofrecer soluciones vanguardistas.</h6>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </Reveal>
        </main>
    );
}

export default HomePage;