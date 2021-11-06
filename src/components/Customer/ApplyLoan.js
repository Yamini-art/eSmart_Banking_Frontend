import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import NavAll from "../NavAll";

function ApplyLoan() {
  const [email, setEmail] = useState("");
  const [loanNumber, setLoannumber] = useState("");
  const [cibilScore, setCibilscore] = useState("");

  function saveUser() {
    swal({
      title: "Are you sure?",
      text: "Once applied for Loan, you will not be able to delete the loan!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! You have been successfully applied for the Loan!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    console.warn({ email, loanNumber, cibilScore });
    let data = { email, loanNumber, cibilScore };

    fetch("http://localhost:8081/esmart/customer/apply", {
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

  // const ApplyLoan = () => {
  //   setEmail(document.getElementById("emailid").value);
  //   setLoannumber(document.getElementById("loannumber").value);
  //   setCibilscore(document.getElementById("cibilscore").value);

  //   const data = {
  //     email: email,
  //     loanNumber: loanNumber,
  //     cibilScore: cibilScore,
  //   };

  //   axios.post("http://localhost:8081/esmart/customer/apply", data);
  // };

  return (
    <>
    <NavAll/>
      {/* <Navbar />
      <Alert alert={alert} /> */}
      <div className="container">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.payment/3.0.0/jquery.payment.min.js"></script>
        <div className="padding my-2">
          <div className="row">
            <div className="container-fluid d-flex justify-content-center">
              <div className="col-sm-8 col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-6">
                        <span>Apply Loan</span>
                      </div>
                      <div
                        className="col-md-6 text-right"
                        style={{ "margin-top": "5px" }}
                      ></div>
                    </div>
                  </div>
                  <div className="card-body" style={{ height: "350px" }}>
                    <div className="form-group">
                      <label for="cc-number" className="control-label">
                        Email Id
                      </label>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        id="emailid"
                        className="input-lg form-control emailid"
                        autocomplete="off"
                        placeholder="email id"
                        required
                      />
                    </div>
                    <br />

                    <div className="form-group">
                      <label for="cc-number" className="control-label">
                        Loan Number
                      </label>
                      <input
                        type="text"
                        onChange={(e) => {
                          setLoannumber(e.target.value);
                        }}
                        value={loanNumber}
                        id="loannumber"
                        className="input-lg form-control loannumber"
                        autocomplete="off"
                        placeholder="loan number"
                        required
                      />
                    </div>
                    <br />

                    <div className="form-group">
                      <label for="cc-number" className="control-label">
                        Cibil Score
                      </label>
                      <input
                        type="text"
                        onChange={(e) => {
                          setCibilscore(e.target.value);
                        }}
                        id="cibilscore"
                        value={cibilScore}
                        className="input-lg form-control cibilscore"
                        autocomplete="cc-number"
                        placeholder="cibil score"
                        required
                      />
                    </div>
                    <br />
                    {/* 
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="cc-otp" className="control-label">
                            AMOUNT
                          </label>
                          <input
                            type="number"
                            // onChange={handleAmount}
                            id="cc-amount"
                            className="input-lg form-control cc-exp"
                            autocomplete="cc-amount"
                            placeholder="0"
                            maxlength="6"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="cc-installment" className="control-label">
                            ENTER A EMI OPTION FROM
                          </label>
                          <input
                            type="number"
                            // onChange={handleInstallmentPeriod}
                            id="cc-installment"
                            className="input-lg form-control cc-exp"
                            autocomplete="cc-installment"
                            placeholder="0"
                            maxlength="2"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="col-md-12">
                      <div className="col-md-12">
                        <div class="list-group">
                          <a
                            href="#"
                            class="list-group-item list-group-item-action active"
                          >
                            CHOOSE EMI
                          </a>
                          <div id="emi"></div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="col-md-12">
                      <button
                        id="btnGetEmi"
                        // onClick={getEmi}
                        type="button"
                        className="btn btn-secondary btn-lg form-control"
                        style={{ "font-size": " .8rem" }}
                      >
                        <h7 id="loading1"> GET EMI OPTIONS </h7>
                      </button>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="cc-pin" className="control-label">
                          ENTER YOUR CARD PIN
                        </label>
                        <input
                          type="password"
                          //   onChange={handleCardPin}
                          id="cc-pin"
                          className="input-lg form-control cc-exp"
                          autocomplete="cc-pin"
                          placeholder="••••"
                          maxlength="4"
                          required
                        />
                      </div>
                    </div> */}
                    <br />
                    <div className="form-group">
                      <button
                        id="btnSend"
                        onClick={saveUser}
                        type="submit"
                        className="btn btn-success btn-lg form-control"
                        style={{ "font-size": " .8rem" }}
                        className="send"
                      >
                        <div className="btn_1">
                          <h7 id="loading"> Apply </h7>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyLoan;
