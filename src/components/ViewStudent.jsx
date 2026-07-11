import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewStudent = () => {
    const [data,changeData] = useState([])

    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json")
        .then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        },[]
    )
  return (
    <>
    <NavBar/>
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-3">Registered Students</h2>

          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Registration No.</th>
                  <th>Full Name</th>
                  <th>Branch</th>
                  <th>SSLC Mark (%)</th>
                  <th>Plus Two Mark (%)</th>
                  <th>UG Mark (%)</th>
                  <th>PG Mark (%)</th>
                </tr>
              </thead>

              <tbody>
                {data.map(
                    (value,index) => {
                        return (
                            <tr>
                                <td>{value.regNo}</td>
                                <td>{value.fullName}</td>
                                <td>{value.branch}</td>
                                <td>{value.sslcMark}</td>
                                <td>{value.plusTwoMark}</td>
                                <td>{value.ugMark}</td>
                                <td>{value.pgMark}</td>
                                
                            </tr>
                        )
                    }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ViewStudent;