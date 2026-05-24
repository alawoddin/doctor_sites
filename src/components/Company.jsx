import { useEffect } from "react";
const Company = () => {

    useEffect(() => {
    // AOS Animation
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
      });

      window.AOS.refresh();
    }

    // Owl Carousel
    if (
      window.$ &&
      window.$(".company-slider").owlCarousel
    ) {
      window.$(".company-slider").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2500,
        smartSpeed: 1000,

        nav: false,
        dots: false,

        responsive: {
          0: {
            items: 2,
          },
          576: {
            items: 3,
          },
          768: {
            items: 4,
          },
          992: {
            items: 6,
          },
        },
      });
    }
  }, []);


    return (
        <div>
          <section
      className="company-section bg-dark aos"
      data-aos="fade-up"
    >
      <div className="container">

        <div className="section-header sec-header-one text-center">
          <h6 className="text-light">
            Trusted by 5+ million people at companies like
          </h6>
        </div>

        <div className="owl-carousel company-slider">

          <div>
            <img src="/img/company/company-01.svg" alt="img" />
          </div>

          <div>
            <img src="/img/company/company-02.svg" alt="img" />
          </div>

          <div>
            <img src="/img/company/company-03.svg" alt="img" />
          </div>

          <div>
            <img src="/img/company/company-04.svg" alt="img" />
          </div>

          <div>
            <img src="/img/company/company-05.svg" alt="img" />
          </div>

          <div>
            <img src="/img/company/company-06.svg" alt="img" />
          </div>

          <div>
            <img src="/img/company/company-07.svg" alt="img" />
          </div>

          <div>
            <img src="/img/company/company-08.svg" alt="img" />
          </div>

        </div>
      </div>
    </section>

        </div>
    );
};

export default Company;