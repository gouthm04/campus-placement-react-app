import React from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
  return (
    <div>
        <NavBar/>
        <div className="container mt-3">
            <div className="row g-3">
                <div className="col-12 ">
                    <label htmlFor="" className="form-label">Registration Number</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchStudent