import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sports() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <>
      <div className="container mt-5">
        <div className="album py-5 bg-light">
          <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Sports" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Sports</text></svg>

                  <div className="card-body">
                    <h3>Item_1</h3>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut recusandae cupiditate eum quo nesciunt deleniti obcaecati rem eius</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <div className="btn-group mx-2" role="group" aria-label="Basic outlined example">
                          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setCount1(count1 + 1)}>Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                          </svg> </button>
                          <button type="button" className="btn btn-outline-secondary" onClick={() => { if (count1 > 0) { setCount1(count1 - 1) } }}>Remove from cart</button>
                          <button type="button" className="btn btn-outline-secondary">{count1}</button>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Sports" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Sports</text></svg>

                  <div className="card-body">
                    <h3>Item_2</h3>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut recusandae cupiditate eum quo nesciunt deleniti obcaecati rem eius</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <div className="btn-group mx-2" role="group" aria-label="Basic outlined example">
                          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setCount2(count2 + 1)}>Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                          </svg> </button>
                          <button type="button" className="btn btn-outline-secondary" onClick={() => { if (count2 > 0) { setCount2(count2 - 1) } }}>Remove from cart</button>
                          <button type="button" className="btn btn-outline-secondary">{count2}</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Sports" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Sports</text></svg>

                  <div className="card-body">
                    <h3>Item_3</h3>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut recusandae cupiditate eum quo nesciunt deleniti obcaecati rem eius</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <div className="btn-group mx-2" role="group" aria-label="Basic outlined example">
                          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setCount3(count3 + 1)}>Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                          </svg> </button>
                          <button type="button" className="btn btn-outline-secondary" onClick={() => { if (count3 > 0) { setCount3(count3 - 1) } }}>Remove from cart</button>
                          <button type="button" className="btn btn-outline-secondary">{count3}</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary btn-lg " data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="bi bi-cart "></i>
        </button>
      </div>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container d-flex">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sr.no.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Item_1</td>
                      <td>{count1}</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Item_2</td>
                      <td>{count2}</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Item_3</td>
                      <td>{count3}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             <Link className="text-white btn btn-primary" to="/issue">Save changes</Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
