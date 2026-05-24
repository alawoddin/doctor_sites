
const Article = () => {
    return (
        <div>
            <>
  {/* Article Section */}
  <section className="article-section">
    <div className="container">
      <div
        className="section-header sec-header-one text-center aos"
        data-aos="fade-up"
      >
        <span className="badge badge-primary">Recent Blogs</span>
        <h2>Stay Updated With Our Latest Articles</h2>
      </div>
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="article-item aos" data-aos="fade-up">
            <div className="article-img">
              <a href="blog-details.html">
                <img
                  src="/img/blog/article-01.jpg"
                  className="img-fluid"
                  alt="img"
                />
              </a>
              <div className="date-icon">
                <span>15</span>May
              </div>
            </div>
            <div className="article-info">
              <span className="badge badge-cyan mb-2">Treatments</span>
              <h6 className="mb-2">
                <a href="blog-details.html">
                  Understanding and Preventing Glaucoma: A Detailed Guide
                </a>
              </h6>
              <p>
                Glaucoma is a leading cause of blind worldwide, yet many....
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="article-item aos" data-aos="fade-up">
            <div className="article-img">
              <a href="blog-details.html">
                <img
                  src="/img/blog/article-02.jpg"
                  className="img-fluid"
                  alt="img"
                />
              </a>
              <div className="date-icon">
                <span>18</span>May
              </div>
            </div>
            <div className="article-info">
              <span className="badge badge-cyan mb-2">Neurology</span>
              <h6 className="mb-2">
                <a href="blog-details.html">
                  Understanding and Preventing Glaucoma: A Detailed Guide
                </a>
              </h6>
              <p>
                Discover the intersection of technology and neurology,
                transforming....
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="article-item aos" data-aos="fade-up">
            <div className="article-img">
              <a href="blog-details.html">
                <img
                  src="/img/blog/article-03.jpg"
                  className="img-fluid"
                  alt="img"
                />
              </a>
              <div className="date-icon">
                <span>21</span>Apr
              </div>
            </div>
            <div className="article-info">
              <span className="badge badge-cyan mb-2">Dental</span>
              <h6 className="mb-2">
                <a href="blog-details.html">
                  5 Essential Tips for Maintaining Optimal Oral Health
                </a>
              </h6>
              <p>Learn the top five daily practices to keep your teeth....</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="article-item aos" data-aos="fade-up">
            <div className="article-img">
              <a href="blog-details.html">
                <img
                  src="/img/blog/article-04.jpg"
                  className="img-fluid"
                  alt="img"
                />
              </a>
              <div className="date-icon">
                <span>22</span>Jan
              </div>
            </div>
            <div className="article-info">
              <span className="badge badge-cyan mb-2">
                Care &amp; Treatment
              </span>
              <h6 className="mb-2">
                <a href="blog-details.html">
                  Beating Strong: The Digital Revol in Cardiac Care
                </a>
              </h6>
              <p>
                Discover how digital advancements are transforming cardiac
                care...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center load-item aos" data-aos="fade-up">
        <a
          href="blog-grid.html"
          className="btn btn-dark d-inline-flex align-items-center"
        >
          View All Articles
          <i className="isax isax-arrow-right-3 ms-2" />
        </a>
      </div>
    </div>
  </section>
  {/* /Article Section */}
</>

        </div>
    );
};

export default Article;