import React from 'react'

export default function HomeJob() {
  return (
    <div>
          <section className="section-box mt-30">
    <div className="container">
      <div className="text-start">
        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs of the day</h2>
        <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Search and connect with the right candidates faster.</p>
        <div className="list-tabs mt-40">
          <ul className="nav nav-tabs" role="tablist">
            <li><a className="active" id="nav-tab-job-1" href="#tab-job-1" data-bs-toggle="tab" role="tab" aria-controls="tab-job-1" aria-selected="true"><img src="frontend/imgs/page/homepage1/management.svg" alt="jobBox" /> Management</a></li>
            <li><a id="nav-tab-job-2" href="#tab-job-2" data-bs-toggle="tab" role="tab" aria-controls="tab-job-2" aria-selected="false"><img src="frontend/imgs/page/homepage1/marketing.svg" alt="jobBox" /> Marketing &amp; Sale</a></li>
            <li><a id="nav-tab-job-3" href="#tab-job-3" data-bs-toggle="tab" role="tab" aria-controls="tab-job-3" aria-selected="false"><img src="frontend/imgs/page/homepage1/finance.svg" alt="jobBox" /> Finance</a></li>
            <li><a id="nav-tab-job-4" href="#tab-job-4" data-bs-toggle="tab" role="tab" aria-controls="tab-job-4" aria-selected="false"><img src="frontend/imgs/page/homepage1/human.svg" alt="jobBox" /> Human Resource</a></li>
            <li><a id="nav-tab-job-5" href="#tab-job-5" data-bs-toggle="tab" role="tab" aria-controls="tab-job-5" aria-selected="false"><img src="frontend/imgs/page/homepage1/retail.svg" alt="jobBox" /> Retail &amp; Products</a></li>
            <li><a id="nav-tab-job-6" href="#tab-job-6" data-bs-toggle="tab" role="tab" aria-controls="tab-job-6" aria-selected="false"><img src="frontend/imgs/page/homepage1/content.svg" alt="jobBox" /> Content Writer</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-50">
        <div className="tab-content" id="myTabContent-1">
          <div className="tab-pane fade show active" id="tab-job-1" role="tabpanel" aria-labelledby="tab-job-1">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot bg-green"><span>Freelancer</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img1.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">React Native Web Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">New York, US</span><span className="card-time">3 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Adobe XD</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$90 - $120</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img2.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Digital Marketing Manager</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">6 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">SEO</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Word</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img3.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Web Designer/Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">9 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">HTML</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">CSS</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">JS</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$120 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img4.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Full Stack Engineer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">13 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">NodeJS</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">MongoDB</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img5.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Frontend Developer Full time</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">16 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Bootstrap</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img6.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">React Native Mobile Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">30 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">React</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">NextJS                      </a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-job-2" role="tabpanel" aria-labelledby="tab-job-2">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot bg-green"><span>Freelancer</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img1.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">React Native Web Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">New York, US</span><span className="card-time">3 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Adobe XD</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$90 - $120</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img2.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Digital Marketing Manager</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">6 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">SEO</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Word</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img3.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Web Designer/Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">9 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">HTML</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">CSS</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">JS</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$120 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img4.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Full Stack Engineer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">13 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">NodeJS</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">MongoDB</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img5.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Frontend Developer Full time</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">16 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Bootstrap</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img6.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">React Native Mobile Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">30 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">React</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">NextJS                      </a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-job-3" role="tabpanel" aria-labelledby="tab-job-3">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img3.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Web Designer/Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">9 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">HTML</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">CSS</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">JS</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$120 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img4.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Full Stack Engineer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">13 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">NodeJS</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">MongoDB</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img5.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Frontend Developer Full time</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">16 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Bootstrap</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img6.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">React Native Mobile Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">30 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">React</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">NextJS    </a>
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" />
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot bg-green"><span>Freelancer</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img1.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">React Native Web Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">New York, US</span><span className="card-time">3 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Adobe XD</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$90 - $120</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img2.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Digital Marketing Manager</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">6 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">SEO</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Word                </a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-job-4" role="tabpanel" aria-labelledby="tab-job-4">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img3.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Web Designer/Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">9 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">HTML</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">CSS</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">JS</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$120 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img4.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Full Stack Engineer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">13 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">NodeJS</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">MongoDB</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot bg-green"><span>Freelancer</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img1.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">React Native Web Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">New York, US</span><span className="card-time">3 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Adobe XD</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$90 - $120</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img2.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Digital Marketing Manager</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">6 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">SEO</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Word</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img5.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Frontend Developer Full time</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">16 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Bootstrap</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img6.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">React Native Mobile Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">30 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">React</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">NextJS                      </a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-job-5" role="tabpanel" aria-labelledby="tab-job-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img3.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Web Designer/Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">9 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">HTML</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">CSS</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">JS</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$120 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot bg-green"><span>Freelancer</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img1.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">React Native Web Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">New York, US</span><span className="card-time">3 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Adobe XD</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$90 - $120</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img2.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Digital Marketing Manager</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">6 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">SEO</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Word</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img4.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Full Stack Engineer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">13 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">NodeJS</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">MongoDB</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img5.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Frontend Developer Full time</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">16 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Bootstrap</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img6.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">React Native Mobile Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">30 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">React</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">NextJS                      </a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-job-6" role="tabpanel" aria-labelledby="tab-job-6">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img4.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Full Stack Engineer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">13 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">NodeJS</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">MongoDB</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot bg-green"><span>Freelancer</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img1.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">React Native Web Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">New York, US</span><span className="card-time">3 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Adobe XD</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$90 - $120</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img2.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Digital Marketing Manager</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">6 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">SEO</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Word</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img3.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Web Designer/Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">9 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">HTML</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">CSS</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">JS</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$120 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img5.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">Frontend Developer Full time</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">16 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">Bootstrap</a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-2 grid-bd-16 hover-up">
                  <div className="card-grid-2-image"><span className="lbl-hot"><span>Full time</span></span>
                    <div className="image-box">
                      <figure><img src="frontend/imgs/page/homepage2/img6.png" alt="jobBox" /></figure>
                    </div>
                  </div>
                  <div className="card-block-info">
                    <h5><a href="job-details.html">React Native Mobile Developer</a></h5>
                    <div className="mt-5"><span className="card-location mr-15">Chicago, US</span><span className="card-time">30 mins ago</span></div>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-xl-7 col-md-7 mb-2"><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">React</a><a className="btn btn-tags-sm mr-5" href="jobs-grid.html">NextJS                      </a>
                        </div>
                        <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$80 - $150</span><span className="text-muted">/Hour</span></div>
                      </div>
                    </div>
                    <p className="font-sm color-text-paragraph mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
