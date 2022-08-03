import { useRef, useState, useEffect } from 'react';
import Select from 'react-select';
import Connection from '../service/Connection'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [memberid, setMemberId] = useState('');
    const [policyid, setPolicyId] = useState('');
    const [amount, setAmount] = useState('');
    const [policies, setOption] = useState();
    const [selectedHospital, setSelectedHospital] = useState('')


    const navigate = useNavigate();


    const hospitals = [
        { label: "Apollo hospital", value: "Apollo hospital" },
         { label: "Sanjivini", value: "Sanjivini" },
        { label: "Medanta", value: "Medanta" },
        { label: "Fortis", value: "Fortis" },
        { label: "Max", value: "Max" },
        { label: "Patanjali", value: "Patanjali" },
        { label: "Fax", value: "Fax" },
    ];

    var count = 1;





    function handleChange(event) {
        setOption(event.target.value)
    }

    function handleHospitalChange(event) {
        setSelectedHospital(event.target.value);
    }





    const submitClaim = async (e) => {
        e.preventDefault()
        console.log('selectedhospital', selectedHospital);
        var mId = document.getElementById("memberid").value;
        var pId = document.getElementById("policyid").value;
        var Amount = document.getElementById("amount").value;
        console.log(mId, pId, Amount);
        var body = {
            amountClaimed: Amount,
            hospitalName: 1234,

        }
        if (mId == "" || pId == "" || Amount == "") {
            alert("Please enter all the details")
        }
        else {
            var response = await Connection.submitClaim(mId, pId, body)
            console.log(response.data);
            if (response.data) {
                alert("Claim successfully submitted /n Claim id is : " + response.data.claimId)
                navigate("/home")
            }
            else {
                alert("Claim not Submitted")
                navigate("/home")
            }
        }
        count = count + 1;
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

            <div className='container2'>
                <h2><center>Submit Claim</center></h2>
                <form onSubmit={submitClaim}>
                    <label htmlFor="Memberid"><b>Enter Member Id:</b></label>
                    <input type="text" id="memberid" onChange={(e) => setMemberId(e.target.value)} value={memberid} placeholder='Enter the Member Id' required />

                    <label htmlFor="hospitalName"><b>Hospital:</b></label>
                    <div>
                        <Select name="hospitalName" id="hospitalName" options={hospitals} value={selectedHospital} onChange={handleHospitalChange} />

                    </div>


                    <label htmlFor="Policyid"><b>Enter Policy Id:</b></label>
                    <div>
                        <Select name="policy" id="Policyid" options={policies} onChange={handleChange} />
                    </div>

                    <label htmlFor="Amount"><b>Enter Amount:</b></label>
                    <input type="text" id="amount" onChange={(e) => setAmount(e.target.value)} value={amount} placeholder='Enter the Amount' required />

                    <button style={{ backgroundColor: "#2d3429", color: "white" }}>
                        Submit
                    </button>


                </form>

            </div>
        </div>
    )
}
export default Login;