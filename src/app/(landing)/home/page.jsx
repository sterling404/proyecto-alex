import Service from "./service"
import Costos from'./costos'
import About from'./about'
import MisionVision from'./mision-vision'
import Profesionales from'./profesionales'
import ContactForm from'./contact-form'


export default function Landing() {
    return (
        <>
            <Service />
            <Costos />
            <About />
            <MisionVision />
            <Profesionales />
            <ContactForm />
            
        </>
    )
}