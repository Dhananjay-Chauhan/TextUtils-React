import React from 'react'
// imr

import PropTypes from 'prop-types'
// import TextForm from "./TextForm";


export default function Navbar(props) {
  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li> */}
              </ul>
              {/* Dark mode - Light mode*/}
              <div className={`form-check form-switch ${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox"  id="flexSwitchCheckDefault" onClick={props.toogleMode} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.txt}</label>
              </div>
              {/*  Red mode */}
              <div className={`form-check form-switch mx-2 ${(props.mode==='light' || props.mode==='dark')? 'red' : 'light'}`}>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toogleModeR} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.txtR}</label>
              </div>

              {/* red mode over */}
            </div>
          </div>
        </nav>
        <hr />
      </div>
      {/* <div className="container">
        <TextForm heading="Write your text Here" mode={props.mode} />
      </div> */}
    </>
  )
}

Navbar.PropType = {
  title: PropTypes.string.isRequired, // specifies that value should be passed in title in app.js <navbar/> else-> error
  about: PropTypes.string  //proptypes specifies the datatype to be passed 
}
// default values to be passed incase no value is passed;
Navbar.defaultProps = {
  title: "Default Title",
  about: "Default About"
}
