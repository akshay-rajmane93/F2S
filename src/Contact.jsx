import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const Contact=()=>{
    const[data,setData]= useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    });
    const[records, setRecords] = useState([]);

 

    const inputeChange = (event)=>{
            const value = event.target.value;
            const name = event.target.name;
            setData((prev)=>{
                return{...prev,[name]:value};
            });
    }

    const submit =(e)=>{
       e.preventDefault();
       const newRecord = {...data,id:new Date().getTime().toString()};
        setRecords([...records,newRecord]);
        if(data.fullname && data.email && data.phone && data.msg !==""){
        alert(`Welcome ${data.fullname} we receive your ${data.phone} & ${data.email} with message : ${data.msg}`);
        setData({fullname:"",
        phone:"",
        email:"",
        msg:""});
        }else{
            alert('please fill data');
        }

    }
   

    return(<><div className="main_contact_div">
        <div className="my-3">
            <h1 className="text-center"> Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={submit}>
                             <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input value={data.fullname} name="fullname" onChange={inputeChange} autoComplete="off" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" required/>
                            </div>
                            <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">Phone</label>
                            <input value={data.phone} name="phone" onChange={inputeChange} autoComplete="off" type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" required/>
                            </div>
                            <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input value={data.email} name="email" onChange={inputeChange} autoComplete="off" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email Adress" required/>
                            </div>
                            <div class="mb-2">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea  value={data.msg} name="msg" onChange={inputeChange} autoComplete="off" class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                            </div>
                            <div class="col-12">
                                <a  href="./contact" class="btn" onClick={submit}>Submit form</a>
                            </div>
                            
                    </form>
                   
                </div>
                
            </div>
        </div>
        </div>
    </>);
};
 

export default Contact;