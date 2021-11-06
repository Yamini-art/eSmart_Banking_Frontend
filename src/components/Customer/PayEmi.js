import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import NavAll from "../NavAll"
// import { Navbar } from "./Navbar";
// import { Alert } from "./Alert";
// import uri from "./services/api.json";

function PayEmi() {
  const [emailId, setEmailId] = useState("");
  const [installment, setInstallment] = useState("");

  function saveUser() {
    swal({
      title: "Are you sure?",
      text: "Once paid, you will not be able to recover this paid EMIs!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your EMI has been successfully paid!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    console.warn({ emailId, installment });
    let data = { emailId, installment };

    fetch("http://localhost:8080/customer-service/esmart/customer/payEMI", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      // console.warn("result", result);
      result.json().then((Response) => {
        console.warn("response", Response);
      });
    });
  }

  return (
    <div>
      <NavAll/>
      {/* <Navbar />
      <Alert alert={alert} /> */}
      <div className="container my-5 box ">
        <h5 className="heading">Pay EMI</h5>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="form-row">
              <div className="col-xs-12 form-group required">
                <label className="control-label">Email Id</label>
                <input
                  //   onChange={handleNumber}
                  //   value={cardNumber}
                  autocomplete="off"
                  className="form-control "
                  type="text"
                  value={emailId}
                  onChange={(e) => {
                    setEmailId(e.target.value);
                  }}
                  id="cardNumber"
                  required
                />
              </div>
            </div>
            <br />
            <div className="col-xs-12 form-group required">
              <label className="control-label">Installments</label>
              <input
                type="text"
                value={installment}
                onChange={(e) => {
                  setInstallment(e.target.value);
                }}
                autocomplete="off"
                className="form-control "
                type="text"
                id="cardNumber"
                required
              />
            </div>
          </div>
          <br />

          {/* <div className="form-row d-flex justify-content-center">
            <div className="col-6 form-group cvc required m-1">
              <label className="control-label">Instalment</label>
              <input
                //   onChange={handleInstallment}
                //   value={installment}
                autocomplete="off"
                className="form-control "
                placeholder="0"
                type="number"
                id="installment"
                required
              />
            </div> */}

          {/* <div className="col-6 form-group expiration required m-1">
              <label className="control-label">MPIN</label>
              <input
                //   onChange={handleMpin}
                //   value={mpin}
                className="form-control "
                placeholder="MPIN"
                autocomplete="off"
                type="password"
                id="mpin"
                maxlength="4"
                required
              />
            </div> */}
          {/* </div> */}

          <div className="form-row">
            {/* <div className="col-md-12">
              <br />
              {/* <div className="form-control total btn btn-info">
                  Total:
                  <span className="amount">₹ {total}</span>
                </div> */}
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 form-group">
            <br />
            <button
              onClick={saveUser}
              className="form-control btn btn-primary submit-button "
              type="submit"
              className="pay"
            >
              <div className="pay_1">
                <h6 id="loading"> Pay » </h6>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
}

export default PayEmi;
