import { useRef, useState, useEffect } from 'react';

//import Connection from './service/Connection'
import { Link, useNavigate } from 'react-router-dom';
import Connection from '../service/Connection';

import Select from 'react-select';




const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [memberid, setMemberId] = useState('');
    const [policyid, setPolicyId] = useState('');
    const [claimid, setClaimId] = useState('');

    const policies = [
        { label: "101", value: "101" }, { label: "102", value: "102" },
        { label: "103", value: "103" },
    ];

    const navigate = useNavigate()


    function handleChange(policy) {
        setPolicyId(policy.value);
    }




    const claimstatus = async (e) => {
        e.preventDefault();
        var mid = document.getElementById("memberid").value;
        var pid = policyid;
        var cid = document.getElementById("claimid").value;
        console.log(mid, pid, cid);
        if (mid == "" || cid == "" || pid == "") {
            alert("Please enter all the details")
        }
        else {
            var response = await Connection.viewClaimStatus(mid, pid, cid)
            console.log("claim data =", response.data);
            if (response.data.length == 0) {
                console.log("Error data")
                alert("No such claim exists!!")
            } else {
                navigate("/claimstatusresult", { state: response.data })
            }
        }
    }
    return (
        <div>
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

            <div className='container2'>

                <h2>Claim Status</h2>
                <form onSubmit={claimstatus}>

                    <label htmlFor="memberid"><b>Enter Member Id:</b></label>
                    <input type="text" id="memberid" onChange={(e) => setMemberId(e.target.value)} value={memberid} placeholder='Enter the member id' required />


                    <label htmlFor="Policyid"><b>Select Policy Id:</b></label>
                    <div>
                        <Select name="policy" id="Policyid" options={policies} onChange={handleChange} />
                    </div>


                    <label htmlFor="claimid"><b>Enter Claim Id:</b></label>
                    <input type="text" id="claimid" onChange={(e) => setClaimId(e.target.value)} value={claimid} placeholder='Enter the claim id' required />

                    <button class="btn btn-primary">
                        Status
                    </button>


                </form>

            </div>
        </div>
    )
}
export default Login;