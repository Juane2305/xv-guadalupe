import AOS from 'aos';
import 'aos/dist/aos.css';

import dress from '../assets/aurora/dressCodeAurora.svg'
import CountdownCircles from "./CountdownCircles";
import song from '../assets/song.mp3'
import MusicScreen from "./MusicScreen";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresXV from "./LugaresXV";
import { FocusCardsDemo } from "./FocusCardsDemo";
import DressCodeEsmeralda from "./DressCodeEsmeralda";
import decoracionNombre from "../assets/aurora/decoracionNombre.svg";
import InstagramWall from './InstagramWall';


const Invitacion = () => {


  const targetDate = new Date("2025-11-08T21:30:00-03:00");

  const colorPrincipal = "#fbcfe8";
  const colorSecundario = "#fbcfe8";



  return (
    <div className="w-full font-eleganteText relative overflow-hidden bg-[#f8f5f0] md:bg-black">

        <div className="absolute z-40">
          <MusicScreen cancion={song} />
        </div>
        <div className="relative z-10 h-screen">
          <div
            className="absolute inset-0 bg-center bg-cover md:bg-contain bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1761695161/15_An%CC%83os_hnduwt.jpg')",
            }}
          >
            <div className="absolute inset-0"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-end items-center text-center text-white h-full pb-44">
            <div className="flex items-end justify-center">
              <img
                src={decoracionNombre}
                alt="Decoración invertida"
                className="w-32 h-auto"
              />
              {/* <div className="flex flex-col items-center"> */}
                <h1 className="text-4xl md:text-7xl font-bold tracking-wide text-[#b4a03c] mb-12">
                  Guadalupe
                </h1>
                {/* <p className="text-xl md:text-2xl font-light tracking-wider text-gray-800">
                  MIS QUINCE AÑOS
                </p> */}
              {/* </div> */}
              <img
                src={decoracionNombre}
                alt="Decoración normal"
                className="w-32 h-auto scale-x-[-1] transform"
              />
            </div>
          </div>
        </div>

      <div>
          <section
            id="contador"
            className="bg-white py-10 border-y-4 border-[#fbcfe8] text-center"
          >
            <p className=' text-2xl py-5'>8 de Noviembre de 2025</p>
            <CountdownCircles
              targetDate={targetDate}
              containerClasses="my-8"
              backgroundColor="#e5e7eb"
              progressColor="#fbcfe8"
              textColor="black"
              valueClassName="text-3xl font-light"
              labelClassName="text-base font-thin"
            />
          </section>

        <section id="lugares" className="relative text-center bg-white">
          <LugaresXV
            iglesia="[Nombre iglesia]"
            hora_iglesia="10:00hs"
            salon="Salón Ana Eventos"
            hora_civil="21:00hs"
          />
          <a href="https://maps.app.goo.gl/k5KehCTAZCwLZdM48" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-gray-700 py-3 px-8 rounded-full text-gray-800 font-semibold hover:text-gray-600 transition">
              CÓMO LLEGAR
            </button>
          </a>
        </section>

          <div className="relative bg-white">
            <section className="pb-16">
                <FocusCardsDemo
                    texto=""
                  images={[
                    {
                      index: 1,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761661705/7dc8b2f6-2c6b-4204-afdf-fa6188affccf_oiea55.jpg",
                    },
                    {
                      index: 2,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761661705/IMG_3498_qnkqxf.jpg",
                    },
                    {
                      index: 3,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761661705/IMG_3497_gnfedj.jpg",
                    },
                    {
                      index: 4,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761661705/IMG_3506_grqo6r.jpg",
                    },
                    {
                      index: 5,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761661704/IMG_3505_jsv68z.jpg",
                    },
                    {
                      index: 6,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761673716/2e1b4ca8-4089-4e53-b7e6-69f05d3b0c60_2_j8kr9c.jpg",
                    },
                  ]}
                />
            </section>
          </div>

          <div className="bg-[#f3b6d9] text-center relative text-white">
            <GoogleCalendarButton
              imgClass="text-[#4b5147]"
              buttonClass="border-white bg-white text-gray-800 rounded-full"
              titleCalendar="XV de Guadalupe"
              salon="Salon Ana Eventos, 4126 LOCALIDAD EL JARDIN, SALTA, Salta"
              fechaComienzo="20251108T213000"
              fechaFin="20251109T050000"
            />
          </div>

          <InstagramWall user="@guada_sanguino12"/>

          <div className="relative bg-white py-10">
            <DressCodeEsmeralda dressCode="Elegante Sport" icon={dress}/>
          </div>

          <div className="relative bg-white">
            <DatosBancarios
              claseIcon="text-white"
              texto="Si deseas hacerme un regalo, te dejo los datos"
              claseContenedor=" text-white"
              claseBoton="rounded-full hover:shadow-lg border-white bg-gray-100 text-gray-900"
              textSize="text-lg"
              background={{ backgroundColor: 'white' }}
              styleBotonModal={{
                backgroundColor: "white",
                borderColor: "#fbcfe8",
              }}
              claseBotonModal={{
                backgroundColor: "#fbcfe8",
                borderColor: "#fbcfe8",
              }}
              styleModal={{ backgroundColor: colorSecundario }}
              styleBorderModal={{ borderColor: colorPrincipal }}
              styleTextColor={{ color: colorPrincipal }}
              cbu="0000003100028295731201"
              alias="guadalupe.sanguino13"
              banco="Mercado Pago"
              nombre="Guadalupe Florencia Sanguino"
              claseModal="bg-[#fbcfe8]"
              borderModal="border-[#fbcfe8]"
              textColor="text-[#fbcfe8]"
            />
          </div>

          <div className="relative">
            <Asistencia
              clase="py-10 bg-white bg-fixed border-b-4 border-[#fbcfe8]"
              claseTitle="text-gray-800"
              claseButton="border-2 border-[#fbcfe8] font-semibold hover:bg-[#fbcfe8]  text-gray-700 hover:text-white rounded-full"
              linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSc_-haaiTeK7cTHcsx5FzzHq3O46GRktuaIprTjGn-ObRBI5w/viewform?usp=publish-editor"
            />
          </div>

        <div className="font-eleganteText text-xl bg-white font-semibold py-10">
          <TextoFinal textoFinal="EL tiempo pasa, los sueños crecen y hoy uno de ellos se hace realidad. Te espero para celebrar mis 15 años, un día que quiero guardar por siempre en mi corazón," textClass="text-xl"/>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
