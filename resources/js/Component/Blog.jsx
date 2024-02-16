import React from 'react'

export default function Blog() {
  return (
    <div>
        <section className="section-box mt-50 mb-50">
    <div className="container">
      <div className="text-start">
        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">News and Blog</h2>
        <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Get the latest news, updates and tips</p>
      </div>
    </div>
    <div className="container">
      <div className="mt-50">
        <div className="box-swiper style-nav-top">
          <div className="swiper-container swiper-group-3 swiper">
            <div className="swiper-wrapper pb-70 pt-5">
              <div className="swiper-slide">
                <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                  <div className="text-center card-grid-3-image"><a href="#">
                      <figure><img alt="jobBox" src="frontend/imgs/page/homepage1/img-news1.png" /></figure></a></div>
                  <div className="card-block-info">
                    <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">News</a></div>
                    <h5><a href="blog-details.html">21 Job Interview Tips: How To Make a Great Impression</a></h5>
                    <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-lg-6 col-6">
                          <div className="d-flex"><img className="img-rounded" src="frontend/imgs/page/homepage1/user1.png" alt="jobBox" />
                            <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Sarah Harding</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">8 mins to read</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                  <div className="text-center card-grid-3-image"><a href="#">
                      <figure><img alt="jobBox" src="frontend/imgs/page/homepage1/img-news2.png" /></figure></a></div>
                  <div className="card-block-info">
                    <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">Events</a></div>
                    <h5><a href="blog-details.html">39 Strengths and Weaknesses To Discuss in a Job Interview</a></h5>
                    <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-lg-6 col-6">
                          <div className="d-flex"><img className="img-rounded" src="frontend/imgs/page/homepage1/user2.png" alt="jobBox" />
                            <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Steven Jobs</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">6 mins to read</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                  <div className="text-center card-grid-3-image"><a href="#">
                      <figure><img alt="jobBox" src="frontend/imgs/page/homepage1/img-news3.png" /></figure></a></div>
                  <div className="card-block-info">
                    <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">News</a></div>
                    <h5><a href="blog-details.html">Interview Question: Why Dont You Have a Degree?</a></h5>
                    <p className="mt-10 color-text-paragraph font-sm">Learn how to respond if an interviewer asks you why you dont have a degree, and read example answers that can help you craft</p>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-lg-6 col-6">
                          <div className="d-flex"><img className="img-rounded" src="frontend/imgs/page/homepage1/user3.png" alt="jobBox" />
                            <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Wiliam Kend</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">9 mins to read</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
        <div className="text-center"><a className="btn btn-brand-1 btn-icon-load mt--30 hover-up" href="blog-grid.html">Load More Posts</a></div>
      </div>
    </div>
  </section>
    </div>
  )
}
