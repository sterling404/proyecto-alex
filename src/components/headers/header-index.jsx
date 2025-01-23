import Image from "next/image"
import styles from './header-index.module.css'
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function HeaderHome() {

    return (
        <nav className={styles.navHome}>
            <div className={styles.logo}>
                <Image src="/logounach1.png" className="img-responsive" width={240} height={50} style="width: 240px; margin-top: -35px;" />
            </div>
            <div className={styles.contenButtonEnlace}>
                <Link href={''}>INICIO</Link>
                <Link href={''}>NUESTROS SERVICIOS</Link>
                <Link href={''}>SOBRE NOSOTROS</Link>
                <Link href={''}>CONTACTO</Link>
                <div className={styles.contenButton}>
                    <Link href='/login'>
                        <Button>LOGIN</Button>
                    </Link>
                </div>
            </div>
        </nav>

    )
}


{/* <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <Image src="/logounach1.png" className="img-responsive" width={240} height={50} style="width: 240px; margin-top: -35px;" />
                    </a>
                </div>


                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav main-menu">
                        <li className="active"><a href="#banner">Inicio</a></li>
                        <li><a href="#service">Nuestros Servicios</a></li>
                        <li><a href="#about">Sobre Nosotros</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right ">
                        <Link href="/login" className="login-btn">
                            <Button>
                                LOGIN
                            </Button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav> */}