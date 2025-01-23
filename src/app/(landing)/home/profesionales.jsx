import { Card, CardContent } from "@/components/ui/card"
import Link  from'next/link'
import Image from "next/image"
export default function Profesionales() {

  return (
    <section id="doctor-team" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="ser-title">Nuestros Especialistas.</h2>
            <hr className="botm-line" />
          </div>
          <div className="grid gap-6  grid-cols-3">
            <Card>
              <div className="w-full  rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                <Image
                width={200}
                height={200}
                  src="/doctor1.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent>

                <div className="thumbnail">
                  <div className="caption">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-2">Nombre</h3>
                    <p>Psicologo</p>
                    <ul className="list-inline">
                      <Link href="#"><i className="fa fa-facebook"></i></Link>
                      <Link href="#"><i className="fa fa-facebook"></i></Link>
                      <Link href="#"><i className="fa fa-facebook"></i></Link>
                      
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            
            

          </div>

        </div>
      </div>
    </section>
  )
}