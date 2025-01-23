import styles from './servicios.module.css'
import { Brain, FilePlus, Ambulance } from 'lucide-react';
import { FaGraduationCap } from "react-icons/fa";

export default function Service() {
    return (
        <section id="service" className="section-padding">
            <div className="container">
                <div className={styles.contenServices}>
                    <div className="col-md-4  col-sm-4 w-full max-w-fit">
                        <h2 className="ser-title">Nuestros Servicios</h2>
                        <hr className="botm-line" />
                    </div>
                    <div className='grid gap-4 lg:grid-cols-2 md:grid-cols-2 grid-col '>

                        <div className="col-md-4 col-sm-4">
                            <div className="service-info">
                                <div className="icon">
                                    <Brain size={50} color='#1d2864' />
                                </div>
                                <div className=" my-2">
                                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Terapia Psicológica Clínica.</h4>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Brindamos terapia individual, familiar y de pareja, abordando un amplio espectro de necesidades de salud mental.</p>
                                </div>
                            </div>
                            <div className="service-info">
                                <div className="icon">
                                    <Ambulance size={50} color='#1d2864' />
                                </div>
                                <div className=" my-2">
                                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Psicología Laboral y Comunitaria.</h4>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6">Extendemos nuestros servicios a organizaciones y comunidades, promoviendo el bienestar en el lugar de trabajo y en el entorno social.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="service-info">
                                <div className="icon">
                                    <FilePlus size={50} color='#1d2864' />
                                </div>
                                <div className=" my-2">
                                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Investigación en Psicología.</h4>
                                    <p className="leading-7 [&:not(:first-child)]:mt-6"> Nuestro departamento de investigación se dedica a explorar nuevas fronteras en el conocimiento psicológico, buscando formas innovadoras de aplicar la investigación a la práctica clínica.</p>
                                </div>
                                <div className="service-info">
                                    <div className="icon">
                                        <FaGraduationCap size={50} color='#1d2864' />
                                    </div>
                                    <div className=" my-2">
                                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Formación Práctica</h4>
                                        <p className="leading-7 [&:not(:first-child)]:mt-6">Como parte de la Universidad Adventista de Chile, ofrecemos a los estudiantes de psicología una experiencia práctica inigualable, supervisada por profesionales experimentados y en un entorno de aprendizaje enriquecedor. Nuestros estudiantes no solo adquieren habilidades clínicas, sino que también participan activamente en proyectos de investigación y programas comunitarios.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}