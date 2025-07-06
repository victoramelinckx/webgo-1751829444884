
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Tu Web de Ventas en 24 Horas" subheadline="Digitaliza tu negocio rápido con soporte 24/7, sin complicaciones." cta1="Comienza Ya" />
<How step1Title="Contacta WebGo" step1Desc="Habla con nuestro equipo experto." step2Title="Desarrollo Express" step2Desc="Creamos tu web en 24 horas." step3Title="Soporte 24/7" step3Desc="Asistencia continua para digitalizar ventas." />
<Aboutus headline="WebGo: Digitaliza tu negocio fácilmente" subheadline="WebGo transforma ventas online mientras gestionamos tu sitio web eficientemente." beneficiotitulo1="Rápida Implementación" beneficio1="Inicia ventas online en días." beneficiotitulo2="Gestión Completa" beneficio2="Olvídate de la administración web." />
<Services heading="Impulse Sus Ventas Digitales" description="Rapidez, compromiso, innovación para vender online sin complicaciones." services={[{"name":"Desarrollo Web Express","icon":"rocket","description":"Lanzamos su sitio en 24 horas."},{"name":"SEO Optimización","icon":"search","description":"Mejore su visibilidad online rápidamente."},{"name":"Gestión de Contenido","icon":"edit","description":"Actualizamos su sitio, usted relájese."},{"name":"Integración E-commerce","icon":"cart","description":"Venda online con facilidad."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua, sin preocupaciones."},{"name":"Análisis de Datos","icon":"chart","description":"Decisiones basadas en datos concretos."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en realidad con resultados que sorprenden y encantan." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi pequeño negocio?","respuesta":"WebGo te ayuda a digitalizar tus ventas creando una tienda en línea rápida y fácil de manejar. Nuestro compromiso e innovación garantizan que puedas expandir tu negocio más allá de las recomendaciones."},{"pregunta":"¿Qué tan rápido puedo empezar a vender online con WebGo?","respuesta":"Con WebGo, puedes empezar a vender online en cuestión de días. Nuestro enfoque es rápido y eficiente, para que no pierdas tiempo y puedas centrarte en lo que realmente importa: hacer crecer tu negocio."},{"pregunta":"¿Necesito tener conocimientos técnicos para usar los servicios de WebGo?","respuesta":"No necesitas tener conocimientos técnicos. WebGo se encarga de todo el proceso, desde la creación hasta la gestión de tu sitio web, para que puedas concentrarte en tus clientes y tus productos."},{"pregunta":"¿Cómo asegura WebGo que mi negocio se destaque en línea?","respuesta":"WebGo utiliza estrategias innovadoras para que tu negocio se destaque en línea. Nuestro compromiso es posicionarte de manera que más personas conozcan y compren tus productos."},{"pregunta":"¿Cuáles son los beneficios de elegir WebGo para mi transformación digital?","respuesta":"Eligiendo WebGo, obtienes rapidez, compromiso e innovación. Nos aseguramos de que tu negocio crezca online mientras tú te ocupas de lo que más te apasiona. Nosotros hacemos el trabajo duro por ti."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio en Línea Hoy" 
                      description="Conquista el mundo digital: Ahorra tiempo y vende más con WebGo, tu aliado en rapidez, compromiso e innovación."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
