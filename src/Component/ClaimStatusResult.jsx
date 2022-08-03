import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './viewbillresultComponent.css'

export default function ViewBillResults() {
    const navigate = useNavigate();
    const location = useLocation();

    function beginNavigation() {
        navigate("/home")
    }

    return (
        <div className='homecontainer0'>
        <nav className="navbar navbar-expand-lg navbar-dark mainNavBar">
        <Link to="/home">
            <a className="navbar-brand" href="#">Claims Management</a>
        </Link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">

            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link to="/home">
                        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                    </Link>
                </li>

                <li class="nav-item active">
                    <Link to="/submitclaim">
                        <a class="nav-link" href="#">Submit Claim <span class="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li class="nav-item active">
                    <Link to="/claimstatus">
                        <a class="nav-link" href="#">Claim Status <span class="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li class="nav-item active">
                    <Link to="/viewbill">
                        <a class="nav-link" href="#">View Bills<span class="sr-only">(current)</span></a>
                    </Link>
                </li>

                <li class="nav-item active">
                    <Link to="/">
                        <a class="nav-link" href="#">Log Out<span class="sr-only">(current)</span></a>
                    </Link>
                </li>

            </ul>

        </div>
    </nav>
            <div className="viewbillContainer">
                <div className='viewbillDiv'>
                    <div className='viewbillResult'>Claim Status Result</div>
                    <table id="viewbillDetails" className='table'>
                    <thead className="thead-dark">
                        <tr>
                        <td>Claim Id</td>
                                <td scope="col">Policy Id</td>
                                <td scope= "col">Member Id</td>
                                <td scope= "col">Hospital Name</td>
                                <td scope= "col">Amount Claimed</td>
                                <td scope= "col">Description</td>
                                <td scope= "col">Setteled</td>
                                <td scope= "col">Status</td>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                            <td>{location.state.claimId}</td>
                                <td>{location.state.policyId}</td>
                                <td>{location.state.memberId}</td>
                                 <td>{location.state.hospitalName}</td>
                                <td>{location.state.amountClaimed}</td>
                                <td>{location.state.description}</td>
                                <td>{location.state.setteled}</td>
                                <td>{location.state.status}</td>
                            </tr>
                        </tbody>
                    </table>

                    <button id="fancyButton" onClick={beginNavigation}>Back to Home</button>
                </div>
            </div>
        </div>
    )
}
