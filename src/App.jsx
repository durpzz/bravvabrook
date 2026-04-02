import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "./components/Header";
import bannerImg from "./assets/banner/banner1.png";
import banner2Img from "./assets/banner/banner2.png";
import frascoImg from "./assets/produtos/frasco.png";
import kitImg from "./assets/produtos/kit.png";
import modeloImg from "./assets/modelo/modelo.jpeg";
import modelo3Img from "./assets/modelo/modelo3.png";
import nutritionImg from "./assets/diversos/beneficios.png";
import cuidadosImg from "./assets/diversos/cuidados.PNG";
import pilula1Img from "./assets/diversos/pilula1.PNG";
import pilula2Img from "./assets/diversos/pilula2.PNG";

export default function App() {
  const bannerImages = [bannerImg, banner2Img];

  const benefitsData = [
    {
      tag: "A",
      title: "Vitamina A",
      text: "Contribui para a saúde da pele, visão e sistema imunológico.",
    },
    {
      tag: "D",
      title: "Vitamina D",
      text: "Apoia a saúde óssea, crescimento e imunidade.",
    },
    {
      tag: "E",
      title: "Vitamina E",
      text: "Antioxidante que protege as células e ajuda na pele.",
    },
    {
      tag: "C",
      title: "Vitamina C",
      text: "Estimula colágeno e protege pele, cabelos e unhas.",
    },
    {
      tag: "B1",
      title: "Vitamina B1",
      text: "Auxilia o metabolismo energético e o sistema nervoso.",
    },
    {
      tag: "B2",
      title: "Vitamina B2",
      text: "Importante para o metabolismo de nutrientes.",
    },
    {
      tag: "B3",
      title: "Niacina (B3)",
      text: "Ajuda na produção de energia e na circulação.",
    },
    {
      tag: "B5",
      title: "Acido Pantotenico",
      text: "Participa do metabolismo e produção de energia.",
    },
    {
      tag: "B6",
      title: "Vitamina B6",
      text: "Apoia o metabolismo de proteínas e gorduras.",
    },
    {
      tag: "B7",
      title: "Biotina",
      text: "Suporte à pele, cabelos e unhas, com brilho e resistência.",
    },
    {
      tag: "B9",
      title: "Acido Folico",
      text: "Essencial para formação celular e manutenção dos tecidos.",
    },
    {
      tag: "B12",
      title: "Vitamina B12",
      text: "Formação de células sanguíneas e energia diária.",
    },
    {
      tag: "Fe",
      title: "Ferro",
      text: "Auxilia no crescimento dos fios e fortalecimento das unhas.",
    },
    {
      tag: "Zn",
      title: "Zinco",
      text: "Protege dos radicais livres e apoia a imunidade.",
    },
    {
      tag: "Se",
      title: "Selenio",
      text: "Mineral antioxidante que protege as células.",
    },
    {
      tag: "Cu",
      title: "Cobre",
      text: "Auxilia na formação de tecidos e defesa antioxidante.",
    },
    {
      tag: "Cr",
      title: "Cromo",
      text: "Contribui para o metabolismo de carboidratos e gorduras.",
    },
    {
      tag: "Carb",
      title: "Carboidratos",
      text: "Fonte de energia dentro da composição nutricional.",
    },
  ];

  const testimonialsRow1 = [
    {
      stars: "★★★★★",
      text: "O resultado ficou incrível, parece campanha de marca premium.",
      name: "Ana Clara",
      time: "3 semanas atrás",
      initials: "AC",
      avatar: "https://i.pravatar.cc/80?img=11",
    },
    {
      stars: "★★★★★",
      text: "A estética preta e dourada ficou perfeita no celular.",
      name: "João e Mari",
      time: "1 mês atrás",
      initials: "JM",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
      stars: "★★★★★",
      text: "Ficou leve, elegante e com cara de produto caro.",
      name: "Carla",
      time: "2 semanas atrás",
      initials: "CR",
      avatar: "https://i.pravatar.cc/80?img=13",
    },
    {
      stars: "★★★★★",
      text: "Os detalhes dourados deram o toque final perfeito.",
      name: "Lucas",
      time: "1 mês atrás",
      initials: "LU",
      avatar: "https://i.pravatar.cc/80?img=14",
    },
    {
      stars: "★★★★★",
      text: "Design limpo, elegante e fácil de navegar.",
      name: "Rafaela",
      time: "5 dias atrás",
      initials: "RA",
      avatar: "https://i.pravatar.cc/80?img=15",
    },
    {
      stars: "★★★★★",
      text: "A vitrine de produtos ficou linda e profissional.",
      name: "Bruno",
      time: "2 meses atrás",
      initials: "BR",
      avatar: "https://i.pravatar.cc/80?img=16",
    },
  ];

  const testimonialsRow2 = [
    {
      stars: "★★★★★",
      text: "A navegação no celular ficou perfeita.",
      name: "Felipe",
      time: "1 semana atrás",
      initials: "FE",
      avatar: "https://i.pravatar.cc/80?img=17",
    },
    {
      stars: "★★★★★",
      text: "A parte de benefícios ficou muito clara e bonita.",
      name: "Giovanna",
      time: "3 dias atrás",
      initials: "GI",
      avatar: "https://i.pravatar.cc/80?img=18",
    },
    {
      stars: "★★★★★",
      text: "Layout premium e elegante, com cara de marca grande.",
      name: "Thiago",
      time: "2 semanas atrás",
      initials: "TH",
      avatar: "https://i.pravatar.cc/80?img=19",
    },
    {
      stars: "★★★★★",
      text: "Tudo ficou coerente com a identidade Brava Brook.",
      name: "Isabela",
      time: "6 dias atrás",
      initials: "IS",
      avatar: "https://i.pravatar.cc/80?img=20",
    },
    {
      stars: "★★★★★",
      text: "Gostei dos detalhes dourados e do contraste no fundo.",
      name: "Rogério",
      time: "2 meses atrás",
      initials: "RO",
      avatar: "https://i.pravatar.cc/80?img=21",
    },
    {
      stars: "★★★★★",
      text: "Visual limpo e forte, com aparência de e-commerce premium.",
      name: "Luana",
      time: "1 mês atrás",
      initials: "LU",
      avatar: "https://i.pravatar.cc/80?img=22",
    },
  ];

  return (
    <>
      <div className="announcement">
        <div className="announcement__inner">
          Entre para o nosso Members Club e descubra os rituais Brava Brook.
          <a className="link" href="#club">Quero participar</a>
        </div>
      </div>

      <Header />

      <main>
        <section className="hero" id="rituais">
          <div className="hero__banner">
            <div className="banner__glow"></div>
            <div className="banner__carousel">
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
              >
                {bannerImages.map((src, index) => (
                  <SwiperSlide key={src + index}>
                    <img className="banner__image" src={src} alt="Banner Brava Brook" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>


        <section className="section editorial">
          <div className="editorial__content">
            <p className="eyebrow">Brilho e atitude</p>
            <h2>Uma rotina luxuosa que realça sua presença.</h2>
            <p>
              Fórmulas pensadas para performance e beleza, com acabamento
              dourado e toque de salão.
            </p>
            <button className="cta ghost">Conhecer ritual</button>
            <img className="editorial__pill editorial__pill--content-top" src={pilula1Img} alt="Cápsulas Brava Brook" />
            <img className="editorial__pill editorial__pill--content-bottom" src={pilula2Img} alt="Cápsulas Brava Brook" />
          </div>
          <div className="editorial__media">
            <img className="editorial__model" src={modeloImg} alt="Modelo Brava Brook" />
            <img className="editorial__pill editorial__pill--left" src={pilula1Img} alt="Cápsulas Brava Brook" />
            <img className="editorial__pill editorial__pill--right" src={pilula2Img} alt="Cápsulas Brava Brook" />
            <img className="editorial__pill editorial__pill--left-bottom" src={pilula1Img} alt="Cápsulas Brava Brook" />
            <img className="editorial__pill editorial__pill--right-top" src={pilula2Img} alt="Cápsulas Brava Brook" />
            <img className="editorial__pill editorial__pill--far-left" src={pilula2Img} alt="Cápsulas Brava Brook" />
            <img className="editorial__pill editorial__pill--far-right" src={pilula1Img} alt="Cápsulas Brava Brook" />
          </div>
        </section>

        <section className="section products" id="produtos">
          <div className="section__title">
            <span>Coleção Brava Brook</span>
            <h2>Essenciais para a rotina premium</h2>
          </div>
          <div className="product-grid">
            <article className="product-card product-card--light">
              <div className="product-card__header">
                <span className="product-card__title">1 Unidade</span>
              </div>
              <img className="product-card__photo" src={frascoImg} alt="Extraordinary Repair Serum" />
              <div className="product-card__price">
                <span className="product-card__old">de R$ 129,90 por</span>
                <p className="product-card__installment">por apenas 12x de</p>
                <p className="product-card__big">R$ 9,04</p>
                <p className="product-card__cash">ou R$ 89,99 à vista</p>
              </div>
              <button className="cta product-card__cta">Comprar agora</button>
              <p className="product-card__note">Modo de uso: indicado 2 cápsulas por dia</p>
            </article>

            <article className="product-card product-card--gold">
              <div className="product-card__header">
                <span className="product-card__badge">20% OFF</span>
                <span className="product-card__tag">Mais vendido</span>
              </div>
              <span className="product-card__title">3 Unidades</span>
              <img className="product-card__photo" src={kitImg} alt="Vitamins Hair Complex" />
              <div className="product-card__price">
                <span className="product-card__old">de R$ 244,99 por</span>
                <p className="product-card__installment">por apenas 12x de</p>
                <p className="product-card__big">R$ 21,68</p>
                <p className="product-card__cash">ou R$ 215,97 à vista</p>
              </div>
              <button className="cta product-card__cta">Comprar agora</button>
              <p className="product-card__note">Modo de uso: indicado 2 cápsulas por dia</p>
            </article>
          </div>
        </section>

        <section className="section formula" id="formula">
          <div className="formula__hero">
            <div className="formula__glow"></div>
            <img className="formula__back" src={cuidadosImg} alt="Benefícios Brava Hair" />
            <img className="formula__kit" src={kitImg} alt="Kit Brava Hair" />
          </div>
          <div className="formula__content">
            <h2>Brava Hair: a fórmula completa para Cabelos, Pele e Unhas</h2>
            <p>
              Ingredientes selecionados para um tratamento completo com vitaminas,
              minerais e ativos essenciais no dia a dia.
            </p>
            <div className="formula__pills">
              <span className="pill"><strong>A</strong> Vitamina A</span>
              <span className="pill"><strong>A</strong> Ácido hialurônico</span>
              <span className="pill"><strong>B12</strong> Vitamina B12</span>
              <span className="pill"><strong>B3</strong> Vitamina B3</span>
              <span className="pill"><strong>Zn</strong> Zinco</span>
              <span className="pill"><strong>Fe</strong> Ferro</span>
              <span className="pill"><strong>B6</strong> Vitamina B6</span>
              <span className="pill"><strong>B1</strong> Vitamina B1</span>
              <span className="pill"><strong>B2</strong> Vitamina B2</span>
              <span className="pill"><strong>E</strong> Vitamina E</span>
              <span className="pill"><strong>B5</strong> Vitamina B5</span>
              <span className="pill"><strong>C</strong> Vitamina C</span>
              <span className="pill"><strong>B9</strong> Ácido fólico</span>
              <span className="pill"><strong>B7</strong> Biotina</span>
              <span className="pill"><strong>Se</strong> Selênio</span>
              <span className="pill"><strong>&</strong> E outros</span>
            </div>
            <button className="cta formula__cta">Adquirir o meu</button>
          </div>
        </section>

        <section className="section benefits-showcase" id="beneficios-detalhe">
          <div className="benefits-showcase__header">
            <p className="eyebrow">Benefícios</p>
            <h2>
              Conheça o poder transformador das vitaminas do <span>Brava Hair</span>
            </h2>
          </div>
          <div className="benefits-showcase__image">
            <img src={cuidadosImg} alt="Benefícios Brava Hair" />
            <img src={nutritionImg} alt="Informação nutricional Brava Hair" />
          </div>
          <div className="benefits-carousel">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={3}
              spaceBetween={24}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1100: { slidesPerView: 3 },
              }}
            >
              {benefitsData.map((item) => (
                <SwiperSlide key={item.title}>
                  <article className="benefit-card">
                    <div className="benefit-card__tag">{item.tag}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="section benefits" id="beneficios">
          <div className="section__title">
            <span>Por que Brava Brook</span>
            <h2>Luxo que se sente no toque e no resultado</h2>
          </div>
          <div className="benefit-grid">
            <div className="benefit">
              <span className="benefit__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 6h11v9H3V6zm11 4h3.6l2.4 3.2V15H14v-5zm-8.5 9a2 2 0 114 0h-4zm9 0a2 2 0 114 0h-4z" />
                </svg>
              </span>
              <h3>Frete rápido</h3>
              <p>Entregas cuidadas em todo o Brasil.</p>
            </div>
            <div className="benefit">
              <span className="benefit__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 6h18v12H3V6zm2 2v8h14V8H5zm2 3h6v2H7v-2z" />
                </svg>
              </span>
              <h3>Parcelamento</h3>
              <p>Até 12x com segurança total.</p>
            </div>
            <div className="benefit">
              <span className="benefit__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 3.5A10 10 0 004 17.4L3 21l3.7-1a10 10 0 0013.8-16.5zm-7.1 15.1a8.5 8.5 0 01-4.3-1.1l-.3-.2-2.6.7.7-2.5-.2-.3a8.5 8.5 0 0113-10.7 8.5 8.5 0 01-6.3 14.1zm4.8-6.4c-.3-.1-1.7-.8-1.9-.9-.2-.1-.4-.1-.5.1-.1.2-.6.9-.7 1-.1.1-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.3-.9-.7-1.5-1.6-1.6-1.9-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.4.1-.1.1-.2.2-.4.1-.1 0-.3 0-.4 0-.1-.5-1.4-.7-1.9-.2-.5-.4-.4-.5-.4h-.4c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 4 3.5 2.4 1 2.4.7 2.8.7.4 0 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.6-.3z" />
                </svg>
              </span>
              <h3>Atendimento WhatsApp</h3>
              <p>Consultoria em tempo real.</p>
            </div>
            <div className="benefit">
              <span className="benefit__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3zm0 4l-4 2v4c0 3.1 2 5.9 4 7.4 2-1.5 4-4.3 4-7.4V8l-4-2z" />
                </svg>
              </span>
              <h3>Site seguro</h3>
              <p>Compra protegida e dados criptografados.</p>
            </div>
          </div>
        </section>

        <section className="section instagram" id="instagram">
          <div className="instagram__card">
            <div className="instagram__media">
              <div className="instagram__blob"></div>
              <img className="instagram__model" src={modelo3Img} alt="Modelo Brava Brook" />
            </div>
            <div className="instagram__content">
              <span className="instagram__pill">Comunidade</span>
              <h2>
                Faça parte do grupo exclusivo no <span>Instagram</span>
              </h2>
              <p>
                Acelere o crescimento dos seus cabelos e fortaleça suas unhas com nosso
                tratamento especializado. Cabelos mais fortes e unhas mais resistentes,
                todos os dias.
              </p>
              <a
                className="cta instagram__cta"
                href="https://instagram.com/bravabrook"
                target="_blank"
                rel="noreferrer"
              >
                Quero fazer parte
              </a>
            </div>
          </div>
        </section>

        <section className="section testimonials" id="depoimentos">
          <div className="testimonials__header">
            <p className="eyebrow">Depoimentos</p>
            <h2>
              O que nossos <span>clientes dizem</span>
            </h2>
            <p>
              Histórias reais com visual emocional e experiência premium no celular.
            </p>
          </div>
          <div className="testimonials__marquee">
            <div className="testimonials__fade testimonials__fade--left"></div>
            <div className="testimonials__fade testimonials__fade--right"></div>
            <div className="testimonials__track">
              {[...testimonialsRow1, ...testimonialsRow1].map((item, index) => (
                <article className="testimonial-card" key={`${item.name}-r1-${index}`}>
                  <p className="testimonial-card__stars">{item.stars}</p>
                  <p className="testimonial-card__text">"{item.text}"</p>
                  <div className="testimonial-card__footer">
                    <div
                      className={`testimonial-card__avatar${
                        item.avatar ? " testimonial-card__avatar--photo" : ""
                      }`}
                    >
                      {item.avatar && (
                        <img src={item.avatar} alt={`Foto de ${item.name}`} loading="lazy" />
                      )}
                      <span>{item.initials}</span>
                    </div>
                    <div>
                      <p className="testimonial-card__name">{item.name}</p>
                      <p className="testimonial-card__time">{item.time}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="testimonials__track testimonials__track--reverse">
              {[...testimonialsRow2, ...testimonialsRow2].map((item, index) => (
                <article className="testimonial-card" key={`${item.name}-r2-${index}`}>
                  <p className="testimonial-card__stars">{item.stars}</p>
                  <p className="testimonial-card__text">"{item.text}"</p>
                  <div className="testimonial-card__footer">
                    <div
                      className={`testimonial-card__avatar${
                        item.avatar ? " testimonial-card__avatar--photo" : ""
                      }`}
                    >
                      {item.avatar && (
                        <img src={item.avatar} alt={`Foto de ${item.name}`} loading="lazy" />
                      )}
                      <span>{item.initials}</span>
                    </div>
                    <div>
                      <p className="testimonial-card__name">{item.name}</p>
                      <p className="testimonial-card__time">{item.time}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contato">
        <div className="footer__columns">
          <div>
            <h4>Departamentos</h4>
            <a href="#produtos">Produtos</a>
            <a href="#rituais">Rituais</a>
            <a href="#club">Members Club</a>
          </div>
          <div>
            <h4>Entre em contato</h4>
            <p>+55 61 99999-0000</p>
            <p>contato@bravabrook.com</p>
            <p>CSG 03 Lote 07, Taguatinga Sul - Brasília</p>
          </div>
          <div>
            <h4>Permaneça conectado</h4>
            <div className="social__icons">
              <span>Instagram</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          Copyright BRAVA BROOK GROUP · 2026. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}
