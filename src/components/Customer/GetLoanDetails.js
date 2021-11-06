import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import NavAll from "../NavAll"

function GetLoanDetails() {
  const [data, setData] = useState([]);

  const GetOffers = async () => {
    axios
      .get(
        "http://localhost:8080/customer-service/esmart/customer/getLoanDetails?emailId="+
          document.getElementById("emailId").value
      )
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          console.log(data);
        }
      });
  };

  return (
    <>
    <NavAll/>
    <div className="mb">
      <input
        id="emailId"
        className="form-control"
        type="emailid"
        placeholder="emailid"
        autoComplete="off"
        name="email"
      />
      <Button
        className="btn-primary btn w-15"
        type="submit"
        onClick={GetOffers}
      >
        Show
      </Button>
      

      <div className="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded ">
          <div className="row ">
            <div className="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                {/*<form className="form-inline">*/}
                {/*    <input className="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>*/}

                {/*</form>*/}
              </div>
            </div>
            <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred text-primary">
              <h2>
                <b>Loan Details</b>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="table-responsive ">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Loan Number</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Installment Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((e) => {
                    return [
                      <tr>
                        <td>{e.loanNumber}</td>
                        <td>{e.name}</td>
                        <td>{e.amount}</td>
                        <td>{e.installnmentsAmoumt}</td>
                      </tr>,
                    ];
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* <!--- Model Box ---> */}

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
    </>
  );
}

export default GetLoanDetails;
