import React from "react";
import { Link, Route, withRouter } from "react-router-dom";

export default function NavAll() {

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/customerdashboard">
                HOME
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/userprofile">
                PROFILE
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/getoffers">
                OFFERS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/applyloan">
                APPLY LOAN
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/transferfund">
                TRANSFER FUND
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/payemi">
                PAY EMI
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/getloandetails">
                LOAN DETAILS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                LOG OUT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

