import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import NavAll from "../NavAll"

// import { Alert } from "./Alert";
// import { Navbar } from "./Navbar";
// import uri from './services/api.json';

function TransferFund() {
  const [sendrId, setSendrId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [amount, setAmount] = useState("");

  function saveUser() {
    swal({
      title: "Are you sure?",
      text: "Once amount transfered, you will not be able to recover the transfer fund!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Transfered Succesfully!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    console.warn({ sendrId, receiverId, amount });
    let data = { sendrId, receiverId, amount };

    fetch(
      "http://localhost:8080/customer-service/esmart/customer/fundTransfer",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((result) => {
      // console.warn("result", result);
      result.json().then((Response) => {
        console.warn("response", Response);
      });
    });
  }

  return (
    <>
    <NavAll/>
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
                        <span>TRANSFER AMOUNT</span>
                      </div>
                      <div
                        className="col-md-6 text-right"
                        style={{ "margin-top": "-5px" }}
                      >
                        <img src="https://img.icons8.com/color/36/000000/visa.png" />
                        <img src="https://img.icons8.com/color/36/000000/mastercard.png" />
                        <img src="https://img.icons8.com/color/36/000000/amex.png" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body" style={{ height: "350px" }}>
                    <div className="form-group">
                      <label for="cc-number" className="control-label">
                        Sender Account Number
                      </label>
                      <input
                        type="text"
                        // onChange={handleCardNumber}
                        value={sendrId}
                        onChange={(e) => {
                          setSendrId(e.target.value);
                        }}
                        id="acc-number"
                        className="input-lg form-control cc-number"
                        autocomplete="cc-number"
                        placeholder="••••••••••••••••"
                        // maxlength="16"
                        required
                      />
                    </div>
                    <br />

                    <div className="form-group">
                      <label for="cc-number" className="control-label">
                        Receiver Account Number
                      </label>
                      <input
                        type="text"
                        value={receiverId}
                        onChange={(e) => {
                          setReceiverId(e.target.value);
                        }}
                        id="acc-number"
                        className="input-lg form-control cc-number"
                        autocomplete="cc-number"
                        placeholder="••••••••••••••••"
                        maxlength="16"
                        required
                      />
                    </div>
                    <br />

                    <div className="form-group">
                      <label for="cc-number" className="control-label">
                        Amount
                      </label>
                      <input
                        type="text"
                        value={amount}
                        onChange={(e) => {
                          setAmount(e.target.value);
                        }}
                        id="acc-number"
                        className="input-lg form-control cc-number"
                        autocomplete="cc-number"
                        placeholder="••••••••••••••••"
                        maxlength="16"
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
                          <h7 id="loading"> SEND </h7>
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

export default TransferFund;
