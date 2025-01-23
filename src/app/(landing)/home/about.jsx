
import { ChevronRight } from "lucide-react"
import styles from'./about.module.css'
export default function About() {

    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className=" grid lg:grid-cols-[repeat(auto-fit,minmax(0,auto))] md:gap-2 gap-4 ">
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <div className="section-title">
                            <h2 className="head-title lg-line">Algunos de nuestros Valores:</h2>
                            <hr className="botm-line" />
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-8 col-xs-12 flex  lg:mt-12">
                        <div style={{ visibility: 'visible' }} className="col-sm-9 more-features-box ">

                            <div className="more-features-box-text">
                                <div className="more-features-box-text-icon"> <ChevronRight/> </div>
                                <div className="more-features-box-text-description">
                                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Excelencia y Empatía.</h3>
                                    <p className="leading-7 [&:not(:first-child)]:mt-2">Nos esforzamos por la excelencia en todos nuestros servicios, manteniendo siempre una profunda empatía y respeto por las personas a las que servimos.</p>
                                </div>
                            </div>

                            <div className="more-features-box-text">
                                <div className="more-features-box-text-icon"> <ChevronRight/></div>
                                <div className="more-features-box-text-description">
                                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Innovación y Ética.</h3>
                                    <p className="leading-7 [&:not(:first-child)]:mt-2"> La innovación guía nuestra búsqueda de nuevos conocimientos y mejores prácticas, siempre anclados en los más altos estándares éticos.</p>
                                </div>
                            </div>
                            <div className="more-features-box-text">
                                <div className="more-features-box-text-icon"> <ChevronRight/> </div>
                                <div className="more-features-box-text-description">
                                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Compromiso con la Comunidad.</h3>
                                    <p className="leading-7 [&:not(:first-child)]:mt-2">Nuestra labor va más allá de las paredes de nuestro centro; estamos comprometidos con el bienestar de nuestra comunidad y con el impacto positivo en la sociedad.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 