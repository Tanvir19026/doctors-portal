import React from 'react';
import doctor from '../../../images/5790-removebg.png';
import './MakeAppoinment.css';
const MakeAppoinment = () => {
    return (
        <section className="make-appoinment" style={{marginTop:'100px'}}>
         <div className="container">
          <div className="row">
         <div className="col-md-5 d-none d-md-block">
         <img src={doctor} alt="" srcset=""/>
         </div>
         

         <div className="col-md-7 text-dark py-5">
          <h5 className="text-primary text-uppercase">APPOINMNET</h5>
         <h1 className="my-4">Make an Appoinment<br></br>Today </h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos esse in laudantium veniam blanditiis?</p>
         <button className="btn btn-primary">Learn More</button>
         </div>






          </div>


         </div>
        </section>
    );
};

export default MakeAppoinment;