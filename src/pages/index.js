import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pic from "../components/images/pic"

const IndexPage = () => (
  <Layout>
    <Helmet>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138241855-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-138241855-1');
    </script>

    </Helmet>
    <SEO title="Gastón García - Consultor &amp; Desarrollador Digital" />

    <div className="w-4/5 md:w-5/12 mx-auto">
      <h1>Gastón García</h1>
      <Pic />
      <p>
        Soy un consultor, diseñador y desarrollador web con 20 años de
        experiencia. Abordo los proyectos web de forma metódica. Disfruto de
        ayudar a empresas y personas a descubrir y planear lo que realmente
        necesitan antes de empezar un sitio web. El planeamiento hace la
        diferencia en todo proyecto digital: reduce costos innecesarios y evita
        dolores de cabeza en el desarrollo.
      </p>

      <p>
        He estado involucrado en proyectos digitales para marcas como{" "}
        <span className="brand">Movistar</span>,{" "}
        <span className="brand">Uber</span>,{" "}
        <span className="brand">Trident</span>,{" "}
        <span className="brand">Halls</span>,{" "}
        <span className="brand">Legrand</span>,{" "}
        <span className="brand">Mitsubishi</span>,{" "}
        <span className="brand">Mercedes-Benz</span> y{" "}
        <span className="brand">Oreo</span>. He colaborado en el desarrollo de
        sitios web de empresas como{" "}
        <span className="brand">2CostaRicaRealEstate</span>,{" "}
        <span className="brand">Constructora Icon</span> y{" "}
        <span className="brand">La Fabbrica</span>. He sido gestor de proyectos
        de activismo digital como “Fuera Justo Orozco” y “Costa Rica Decí que
        Sí”.
      </p>

      <p>Escríbame para trabajar en:</p>
      <ul className="list-disc ml-8">
        <li>Darle un análisis de un proyecto digital actual</li>
        <li>Planificar un proyecto digital nuevo</li>
        <li>Trabajar con su equipo en mejorar un sitio web</li>
        <li>Educar a su equipo sobre desarrollo web</li>
      </ul>

      <p>
        Si usted tiene un sitio web que actualmente no le da resultados, o
        quiere iniciar un proyecto nuevo, contácteme para hacer un plan.
      </p>

      <p>
        <a href="mailto:gaston@gaston-garcia.com">gaston@gaston-garcia.com</a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
