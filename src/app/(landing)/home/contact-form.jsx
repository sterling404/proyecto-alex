import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"


export default function ContactForm() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="ser-title">Contáctanos</h2>
            <hr className="botm-line" />
          </div>
          <div class="flex lg:gap-32  lg:flex-row flex-col">

            <div className="">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Información de Contacto</h3>
              <div className="space"></div>
              <p><i className="fa fa-map-marker fa-fw pull-left fa-2x"></i>Camino las Mariposas Km 12<br /> Chillán, Región del Ñuble</p>
              <div className="space"></div>
              <p><i className="fa fa-envelope-o fa-fw pull-left fa-2x"></i>@unach.cl</p>
              <div className="space"></div>
              <p><i className="fa fa-phone fa-fw pull-left fa-2x"></i>+56 9 7479 9627</p>
            </div>
            <div className="w-full max-w-screen-md">
              <div className="contact-info">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:mt-0 mt-4">¿Tiene alguna consulta?</h3>
                <div className="space"></div>
                <div id="sendmessage">Su mensaje ha sido enviado, gracias.</div>
                <div id="errormessage"></div>
                <form action="" method="post" role="form" className="flex gap-2 flex-col w-full">
                  <div className="form-group">
                    <Input type="text" name="name" className="form-control br-radius-zero" id="name" placeholder="Su nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <Input type="email" className="form-control br-radius-zero" name="email" id="email" placeholder="Su correo" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <Input type="text" className="form-control br-radius-zero" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <Textarea />

                    <div className="validation"></div>
                  </div>

                  <div className="form-action">
                    <Button type="submit" className="btn btn-form">Enviar Mensaje</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}