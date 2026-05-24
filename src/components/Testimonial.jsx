import { useEffect } from "react";

const Testimonial = () => {

    useEffect(() => {

   if (window.AOS) {
     window.AOS.init({
       duration: 1000,
       once: true,
     });

     window.AOS.refresh();
   }

   if (
      window.$ &&
      window.$(".testimonials-slider").owlCarousel
   ) {

     window.$(".testimonials-slider").owlCarousel({
       loop: true,
       margin: 24,
       autoplay: true,
       nav: false,
       dots: true,

       responsive: {
         0: {
           items: 1,
         },
         768: {
           items: 2,
         },
         1200: {
           items: 3,
         },
       },
     });
   }

 }, []);



  return (
    <div>
      {/* Testimonial Section */}
      <section className="testimonial-section-one">
        <div className="container">
          <div
            className="section-header sec-header-one text-center aos"
            data-aos="fade-up"
          >
            <span className="badge badge-primary">Testimonials</span>
            <h2>15k Users Trust Doccure Worldwide</h2>
          </div>

  {/* Testimonial Slider */}
  <div className="owl-carousel testimonials-slider aos" data-aos="fade-up">
    <div className="card shadow-none mb-0">
      <div className="card-body">
        <div className="d-flex align-items-center mb-4">
          <div className="rating d-flex">
            <i className="fa-solid fa-star filled me-1" />
            <i className="fa-solid fa-star filled me-1" />
            <i className="fa-solid fa-star filled me-1" />
            <i className="fa-solid fa-star filled me-1" />
            <i className="fa-solid fa-star filled" />
          </div>
          <span>
            <img src="/img/icons/quote-icon.svg" alt="img" />
          </span>
        </div>
        <h6 className="fs-16 fw-medium mb-2">Nice Treatment</h6>
        <p>
          I had a wonderful experience the staff was friendly and attentive, and
          Dr. Smith took the time to explain everything clearly.
        </p>
        <div className="d-flex align-items-center">
          <a href="javascript:void(0);" className="avatar avatar-lg">
            <img
              src="/img/patients/patient22.jpg"
              className="rounded-circle"
              alt="img"
            />
          </a>
          <div className="ms-2">
            <h6 className="mb-1">
              <a href="javascript:void(0);">Deny Hendrawan</a>
            </h6>
            <p className="fs-14 mb-0">United States</p>
          </div>
        </div>
      </div>
    </div>
    <div className="card shadow-none mb-0">
      <div className="card-body">
        <div className="d-flex align-items-center mb-4">
          <div className="rating d-flex">
            <i className="fa-solid fa-star filled me-1" />
            <i className="fa-solid fa-star filled me-1" />
            <i className="fa-solid fa-star filled me-1" />
            <i className="fa-solid fa-star filled me-1" />
            <i className="fa-solid fa-star filled" />
          </div>
          <span>
            <img src="/img/icons/quote-icon.svg" alt="img" />
          </span>
        </div>
        <h6 className="fs-16 fw-medium mb-2">Good Hospitability</h6>
        <p>
          Genuinely cares about his patients. He helped me understand my
          condition and worked with me to create a plan.
        </p>
        <div className="d-flex align-items-center">
          <a href="javascript:void(0);" className="avatar avatar-lg">
            <img
              src="/img/patients/patient21.jpg"
              className="rounded-circle"
              alt="img"
            />
          </a>
          <div className="ms-2">
            <h6 className="mb-1">
              <a href="javascript:void(0);">Johnson DWayne</a>
            </h6>
            <p className="fs-14 mb-0">United States</p>
          </div>
        </div>
      </div>
    </div>
  <div className="card shadow-none mb-0">
    <div className="card-body">
      <div className="d-flex align-items-center mb-4">
        <div className="rating d-flex">
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled" />
        </div>
        <span>
          <img src="/img/icons/quote-icon.svg" alt="img" />
        </span>
      </div>
      <h6 className="fs-16 fw-medium mb-2">Nice Treatment</h6>
      <p>
        I had a great experience with Dr. Chen. She was not only professional
        but also made me feel comfortable discussing.
      </p>
      <div className="d-flex align-items-center">
        <a href="javascript:void(0);" className="avatar avatar-lg">
          <img
            src="/img/patients/patient.jpg"
            className="rounded-circle"
            alt="img"
          />
        </a>
        <div className="ms-2">
          <h6 className="mb-1">
            <a href="javascript:void(0);">Rayan Smith</a>
          </h6>
          <p className="fs-14 mb-0">United States</p>
        </div>
      </div>
    </div>
  </div>
  <div className="card shadow-none mb-0">
    <div className="card-body">
      <div className="d-flex align-items-center mb-4">
        <div className="rating d-flex">
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled" />
        </div>
        <span>
          <img src="/img/icons/quote-icon.svg" alt="img" />
        </span>
      </div>
      <h6 className="fs-16 fw-medium mb-2">Excellent Service</h6>
      <p>
        I had a wonderful experience the staff was friendly and attentive, and
        Dr. Smith took the time to explain everything clearly.
      </p>
      <div className="d-flex align-items-center">
        <a href="javascript:void(0);" className="avatar avatar-lg">
          <img
            src="/img/patients/patient23.jpg"
            className="rounded-circle"
            alt="img"
          />
        </a>
        <div className="ms-2">
          <h6 className="mb-1">
            <a href="javascript:void(0);">Sofia Doe</a>
          </h6>
          <p className="fs-14 mb-0">United States</p>
        </div>
      </div>
    </div>
  </div>
  <div className="card shadow-none mb-0">
    <div className="card-body">
      <div className="d-flex align-items-center mb-4">
        <div className="rating d-flex">
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled" />
        </div>
        <span>
          <img src="/img/icons/quote-icon.svg" alt="img" />
        </span>
      </div>
      <h6 className="fs-16 fw-medium mb-2">Nice Treatment</h6>
      <p>
        I had a great experience with Dr. Chen. She was not only professional
        but also made me feel comfortable discussing.
      </p>
      <div className="d-flex align-items-center">
        <a href="javascript:void(0);" className="avatar avatar-lg">
          <img
            src="/img/patients/patient.jpg"
            className="rounded-circle"
            alt="img"
          />
        </a>
        <div className="ms-2">
          <h6 className="mb-1">
            <a href="javascript:void(0);">Rayan Smith</a>
          </h6>
          <p className="fs-14 mb-0">United States</p>
        </div>
      </div>
    </div>
  </div>
  <div className="card shadow-none mb-0">
    <div className="card-body">
      <div className="d-flex align-items-center mb-4">
        <div className="rating d-flex">
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled me-1" />
          <i className="fa-solid fa-star filled" />
        </div>
        <span>
          <img src="/img/icons/quote-icon.svg" alt="img" />
        </span>
      </div>
      <h6 className="fs-16 fw-medium mb-2">Excellent Service</h6>
      <p>
        I had a wonderful experience the staff was friendly and attentive, and
        Dr. Smith took the time to explain everything clearly.
      </p>
      <div className="d-flex align-items-center">
        <a href="javascript:void(0);" className="avatar avatar-lg">
          <img
            src="/img/patients/patient23.jpg"
            className="rounded-circle"
            alt="img"
          />
        </a>
        <div className="ms-2">
          <h6 className="mb-1">
            <a href="javascript:void(0);">Sofia Doe</a>
          </h6>
          <p className="fs-14 mb-0">United States</p>
        </div>
      </div>
    </div>
  </div>
  



  </div>

     <div className="testimonial-counter">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-gap-4">

        <div
          className="counter-item text-center aos"
          data-aos="fade-up"
        >
          <h6 className="display-6">
            <span className="count-digit">500</span>+
          </h6>
          <p>Doctors Available</p>
        </div>

        <div
          className="counter-item text-center aos"
          data-aos="fade-up"
        >
          <h6 className="display-6 secondary-count">
            <span className="count-digit">18</span>+
          </h6>
          <p>Specialities</p>
        </div>

        <div
          className="counter-item text-center aos"
          data-aos="fade-up"
        >
          <h6 className="display-6 purple-count">
            <span className="count-digit">30</span>K
          </h6>
          <p>Bookings Done</p>
        </div>

        <div
          className="counter-item text-center aos"
          data-aos="fade-up"
        >
          <h6 className="display-6 pink-count">
            <span className="count-digit">97</span>+
          </h6>
          <p>Hospitals & Clinic</p>
        </div>

        <div
          className="counter-item text-center aos"
          data-aos="fade-up"
        >
          <h6 className="display-6 warning-count">
            <span className="count-digit">317</span>+
          </h6>
          <p>Lab Tests Available</p>
        </div>

      </div>
    </div>


        </div>
      </section>
    </div>
  );
};

export default Testimonial;
