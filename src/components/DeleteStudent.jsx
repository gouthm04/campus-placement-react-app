import React from 'react'

const DeleteStudent = () => {
  return (
    <div>
        <div className="container mt-3">
            <div className="row g-3">
                <div className="col-12 ">
                    <label htmlFor="" className="form-label">Registration Number</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-12">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteStudent