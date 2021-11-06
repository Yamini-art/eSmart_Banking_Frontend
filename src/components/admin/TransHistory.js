import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function TransHistory() {
  const [data, setData] = useState([]);

  const GetOffers = async () => {
    axios
      .get(
        "http://localhost:8080/admin-service/esmart/admin/getTransactionHistory"
      )
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          console.log(data);
        }
      });
  };

  useEffect(() => {
    GetOffers();
  }, [data]);

  return (
    <div className="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded fixed-top ">
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
              <b>Transaction History</b>
            </h2>
          </div>
          {/*<div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">*/}
          {/*    <Button variant="primary " onClick={handleShow}>*/}
          {/*        Activate Id*/}
          {/*    </Button>*/}
          {/*</div>*/}
        </div>
        <div className="row">
          <div className="table-responsive ">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Transaction Id</th>
                  <th>Sender Account No</th>
                  <th>Receiver Account No</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((e) => {
                  return [
                    <tr>
                      <td>{e.id}</td>
                      <td>{e.transactionId}</td>
                      <td>{e.receiverAccount}</td>
                      <td>{e.senderAccount}</td>
                      <td>{e.amount}</td>
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
  );
}
export default TransHistory;
