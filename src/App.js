
import './App.css';

function App() {
  return (
    <div className="contenedor-principal">

      {/* ENCABEZADO */}
      <header className="header">
        <img
          src="/MiFoto.jpg"
          alt="Foto de perfil"
          className="foto-perfil"
        />

        <div className="datos-personales">
          <h1>Rodrigo Vladimir Alcántara Gutierrez</h1>
          <h2>Desarrollador de Aplicaciones Multiplataforma</h2>

          <div className="datos-contacto">
            <span>✉ rodrigoalcantaragutierrez@gmail.com</span>
            <span>☎ 698929364</span>
            <span>⌖ Zaragoza, España</span>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="contenido">

        {/* COLUMNA IZQUIERDA */}
        <aside className="columna-izquierda">

          {/* SOBRE MÍ */}
          <section className="seccion">
            <h2 className="titulo-seccion">Sobre mí</h2>
            <p>
              Técnico en sistemas microinformáticos y estudiante de
              Desarrollo de Aplicaciones Multiplataforma. Tengo experiencia
              en soporte informático, mantenimiento de equipos y resolución
              de incidencias. Interesado en el desarrollo de software y
              las nuevas tecnologías.
            </p>
          </section>

          {/* HABILIDADES */}
          <section className="seccion">
            <h2 className="titulo-seccion">Habilidades</h2>

            <div className="habilidad">
              <div className="habilidad-info">
                <span>Python</span>
                <span>En desarrollo</span>
              </div>
              <div className="barra">
                <div className="progreso python"></div>
              </div>
            </div>

            <div className="habilidad">
              <div className="habilidad-info">
                <span>Java</span>
                <span>En desarrollo</span>
              </div>
              <div className="barra">
                <div className="progreso java"></div>
              </div>
            </div>

            <div className="habilidad">
              <div className="habilidad-info">
                <span>HTML / CSS</span>
                <span>Conocimientos</span>
              </div>
              <div className="barra">
                <div className="progreso html"></div>
              </div>
            </div>

            <div className="habilidad">
              <div className="habilidad-info">
                <span>React</span>
                <span>En aprendizaje</span>
              </div>
              <div className="barra">
                <div className="progreso react"></div>
              </div>
            </div>

            <div className="habilidad">
              <div className="habilidad-info">
                <span>Excel / PowerPoint</span>
                <span>Conocimientos</span>
              </div>
              <div className="barra">
                <div className="progreso office"></div>
              </div>
            </div>
          </section>

          {/* IDIOMAS */}
          <section className="seccion">
            <h2 className="titulo-seccion">Idiomas</h2>

            <div className="idioma">
              <span>Español</span>
              <span className="nivel">Nativo</span>
            </div>

            <div className="idioma">
              <span>Inglés</span>
              <span className="nivel">Intermedio</span>
            </div>
          </section>

          {/* CERTIFICACIONES */}
          <section className="seccion">
            <h2 className="titulo-seccion">Certificaciones</h2>

            <div className="tarjeta-certificacion">
              <h3>Técnico en Sistemas Microinformáticos</h3>
              <p>Certificado de Profesionalidad</p>
            </div>
          </section>

        </aside>

        {/* COLUMNA DERECHA */}
        <div className="columna-derecha">

          {/* EXPERIENCIA */}
          <section className="seccion">
            <h2 className="titulo-seccion">
              Experiencia Profesional
            </h2>

            <div className="experiencia">
              <div className="experiencia-cabecera">
                <h3>Técnico de Soporte Informático</h3>
                <span className="periodo">1 año</span>
              </div>

              <p className="empresa">
                Fundación Federico Ozanam
              </p>

              <p>
                Instalación, configuración y mantenimiento de ordenadores,
                tablets y dispositivos tecnológicos. Resolución de
                incidencias informáticas y mantenimiento de cableado
                y redes.
              </p>
            </div>

            <div className="experiencia">
              <div className="experiencia-cabecera">
                <h3>Ayudante de camarero</h3>
                <span className='periodo'>5 meses</span>
              </div>

              <p className="empresa">
                Chok Noodles
              </p>

              <p>
                Trabajo orientado al servicio al cliente mediante la preparación
                y elaboración de cafés, cocteles, atención al cliente y preparación
                de pedidos.
              </p>
            </div>
          </section>

          {/* EDUCACIÓN */}
          <section className="seccion">
            <h2 className="titulo-seccion">Educación</h2>

            <div className="educacion">
              <h3>Desarrollo de Aplicaciones Multiplataforma</h3>
              <p className="empresa">CPIFP Los Enlaces · Zaragoza</p>
              <span className="fecha">Grado Superior · En curso</span>
            </div>

            <div className="educacion">
              <h3>Técnico en Sistemas Microinformáticos</h3>
              <p className="empresa">
                Certificado de Profesionalidad
              </p>
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}

export default App;
