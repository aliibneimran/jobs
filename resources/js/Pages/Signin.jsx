import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

export default function Signin() {
  return (
    <div>
    <Header></Header>
    <main className="main">
        <section className="pt-100 login-register">
            <div className="container"> 
            <div className="row login-register-cover">
                <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                <div className="text-center">
                    
                    <h1 className="fw-bold fs-3">Member Login</h1>                    
                    <button className="btn social-login hover-up mb-20"><img src="frontend/imgs/template/icons/icon-google.svg" alt="jobbox" /><strong>Sign in with Google</strong></button>
                    <div className="divider-text-center"><span>Or continue with</span></div>
                </div>
                <form className="login-register text-start mt-20" action="#">
                    <div className="form-group">
                    <label className="form-label" htmlFor="input-1">Email address *</label>
                    <input className="form-control" id="input-1" type="text" required name="fullname" placeholder="Steven Job" />
                    </div>
                    <div className="form-group">
                    <label className="form-label" htmlFor="input-4">Password *</label>
                    <input className="form-control" id="input-4" type="password" required name="password" placeholder="************" />
                    </div>
                    <div className="login_footer form-group d-flex justify-content-between">
                    <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Remenber me</span><span className="checkmark" />
                    </label><a className="text-muted" href="page-contact.html">Forgot Password</a>
                    </div>
                    <div className="form-group">
                    <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">Login</button>
                    </div>
                    <div className="text-muted text-center">Don't have an Account? <a href="signup">Sign up</a></div>
                </form>
                </div>
                <div className="img-1 d-none d-lg-block"><img className="shape-1" src="frontend/imgs/page/login-register/img-4.svg" alt="JobBox" /></div>
                <div className="img-2"><img src="frontend/imgs/page/login-register/img-3.svg" alt="JobBox" /></div>
            </div>
            </div>
        </section>
    </main>
    <Footer></Footer>

    </div>
  )
}
