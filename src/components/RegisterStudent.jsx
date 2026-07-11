import React from "react";

const RegisterStudent = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Campus Placement Registration</h2>

      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Registration Number</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Aadhar Number</label>
          <input type="text" className="form-control" maxLength="12" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-control" maxLength="10" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Branch / Department</label>
          <select className="form-select">
            <option>Select Branch</option>
            <option>Computer Science</option>
            <option>Information Technology</option>
            <option>Electronics & Communication</option>
            <option>Electrical & Electronics</option>
            <option>Mechanical</option>
            <option>Civil</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">SSLC Mark (%)</label>
          <input type="number" className="form-control" min="0" max="100" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Plus Two Mark (%)</label>
          <input type="number" className="form-control" min="0" max="100" />
        </div>

        <div className="col-md-6">
          <label className="form-label">UG Degree</label>
          <select className="form-select">
            <option>Select UG Degree</option>
            <option>B.Tech</option>
            <option>BCA</option>
            <option>B.Sc</option>
            <option>B.Com</option>
            <option>BA</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">UG Mark (%)</label>
          <input type="number" className="form-control" min="0" max="100" />
        </div>

        <div className="col-12">
          <label className="form-label d-block">
            Post Graduation Completed?
          </label>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="pg"
              id="yes"
            />
            <label className="form-check-label" htmlFor="yes">
              Yes
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="pg"
              id="no"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="no">
              No
            </label>
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label">PG Degree</label>
          <select className="form-select">
            <option>Select PG Degree</option>
            <option>M.Tech</option>
            <option>MCA</option>
            <option>M.Sc</option>
            <option>MBA</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">PG Mark (%)</label>
          <input type="number" className="form-control" min="0" max="100" />
        </div>

        <div className="col-12 text-center mt-3">
          <button className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterStudent;