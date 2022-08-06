import React from "react";

export default function Home() {
  return (
    <>
      <h1 className="display-4 fw-normal d-flex justify-content-center align-items-center my-5">Some of the reviews....</h1>
      <div className="col-lg-5 mx-auto border border-dark px-4 my-5 rounded-4 bg-light ">
        <svg src="12.jpg" className="bd-placeholder-img rounded-circle mx-auto d-block px-2 py-2" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em" ></text></svg>

        <h2 className="fw-normal d-flex justify-content-center text-primary">Ram</h2>
        <h5 className="text-secondary d-flex justify-content-center">Web Developer</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dolore deleniti, delectus perferendis aut provident recusandae placeat temporibus iste maxime eveniet repudiandae ipsam assumenda blanditiis quae neque amet eum. Explicabo.</p>

      </div>
      <div className="col-lg-5 mx-auto border border-dark px-4 my-5 rounded-4 bg-light">
        <svg src="12.jpg" className="bd-placeholder-img rounded-circle mx-auto d-block px-2 py-2" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em" ></text></svg>

        <h2 className="fw-normal d-flex justify-content-center text-secondary">Alok</h2>
        <h5 className="text-success d-flex justify-content-center">Student</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dolore deleniti, delectus perferendis aut provident recusandae placeat temporibus iste maxime eveniet repudiandae ipsam assumenda blanditiis quae neque amet eum. Explicabo.</p>

      </div>
      <div className="col-lg-5 mx-auto border border-dark px-4 my-5 rounded-4 bg-light">
        <svg src="12.jpg" className="bd-placeholder-img rounded-circle mx-auto d-block px-2 py-2" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em" ></text></svg>

        <h2 className="fw-normal d-flex justify-content-center text-success">Anway</h2>
        <h5 className="text-danger d-flex justify-content-center">Front-end Developer</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dolore deleniti, delectus perferendis aut provident recusandae placeat temporibus iste maxime eveniet repudiandae ipsam assumenda blanditiis quae neque amet eum. Explicabo.</p>

      </div>
      <p><a className="btn btn-lg btn-outline-primary mx-auto d-block px-5 w-25 " href="/">Read more reviews»</a></p>
      <hr className="my-5" />
      <div id="contact" className="row g-5 mx-5 border border-secondary my-5 rounded-top col-md-8 mx-auto border-5 shadow-lg">
        <h3 className="mindit">Subscribe to our newsletter</h3>
        <h5>Get to know what's new and exciting from us!!!</h5>




        <form className="needs-validation" novalidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="username" className="form-label">Email address</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Email Address" required="" />
                <div className="invalid-feedback">
                  Your email address is required.
                </div>
              </div>
            </div>



            <div className="col-12">
              <label htmlFor="address" className="form-label">Room no.</label>
              <input type="text" className="form-control" id="address" required="" />
              <div className="invalid-feedback">
                Please enter your room no.
              </div>
            </div>




          </div>

          <hr className="my-3" />
          <button type="button" className="btn btn-secondary btn-lg d-block mx-auto"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>Subscribe</button>
          <hr className="my-3" />
        </form>
      </div>
    </>
  );
}
