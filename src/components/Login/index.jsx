import React from "react";

function Login() {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-light"
        data-bs-toggle="modal"
        data-bs-target="#Login"
      >
        Login
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="Login"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content  bg-white text-black">
            <div className="modal-heade">
              <div className="container flex justify-center ">
                <form>
                  <h1 className="text-center my-3">Login</h1>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control "
                      id="exampleInputEmail1"
                      size="large"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control  bg-white text-black"
                      id="exampleInputPassword1"
                      size="large"
                      placeholder="Password"
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary w-100 "
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
