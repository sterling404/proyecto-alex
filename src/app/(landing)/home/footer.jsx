
export default function Footer() {
    return (
        <footer id="footer">
            <div className="top-footer ">
                <div className="container section-left-right">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 marb20">
                            <div className="ftr-tle">
                                <h4 className="white no-padding">Links Rápidos</h4>
                            </div>
                            <div className="info-sec">
                                <ul className="quick-info">
                                    <li><a href="index.html"><i className="fa fa-circle"></i>Inicio</a></li>
                                    <li><a href="#service"><i className="fa fa-circle"></i>Nuestros Servicios</a></li>
                                    <li><a href="#contact"><i className="fa fa-circle"></i>Fin</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 marb20">
                            <div className="ftr-tle">
                                <h4 className="white no-padding" >Síguenos</h4>
                            </div>
                            <div className="info-sec">
                                <ul className="social-icon">
                                    <li className="bglight-blue"><i className="fa fa-facebook"></i></li>
                                    <li className="bgws"><i className="fa fa-whatsapp"></i></li>
                                    <li className="bgig"><i className="fa fa-instagram"></i></li>
                                    <li className="bglight-blue"><i className="fa fa-twitter"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-line">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            ©  All Rights Reserved
                            <div className="credits">
                                Designed by <a href="">Alex Reyes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}