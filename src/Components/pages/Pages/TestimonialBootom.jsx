import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialBootom = () => {
  const options = {
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  return (
    <>
      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-3">
        <div className="container py-5">
          <div className="testimonial-header text-center">
          <div className="main_title mb-4">
              <h2 className='mb-4 fs-4'>
                <span>Our Testimonial</span>
              </h2>
              <p >Our Client Saying!</p>
            </div>
            
          </div>
          <OwlCarousel  {...options} className="owl-theme" loop margin={10} items={6} autoplay={true} autoplayTimeout={2000}>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: "0" }}></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img src="/img/team1-1.jpg" className="img-fluid rounded" style={{ width: "100px", height: "100px" }}
                      alt="Client 1" />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name 1</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: "0" }}></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img src="/img/team1-2.jpg" className="img-fluid rounded" style={{ width: "100px", height: "100px" }}
                      alt="Client 2" />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name 2</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: "0" }}></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img src="/img/team1-3.jpg" className="img-fluid rounded" style={{ width: "100px", height: "100px" }}
                      alt="Client 3" />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name 3</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
};

export default TestimonialBootom;
