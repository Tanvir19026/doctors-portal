import React from 'react';
import baby from '../../../images/Mask Group 3.png';

const FeturedService = () => {
    return (
        <section className="features-services pb-0 pd-md-5 my-5">
           <div className="container mb-5">
           <div className="row mb-5">
           <div className="col-md-5 mb-4 m-md-0">
             <img className="img-fluid" src={baby} alt="" srcset=""/>
            </div>
            <div className="col-md-7 align-self-center">
               <h2>Exceptional Dental<br></br>Care on Your Terms</h2> 
               <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quasi consequuntur pariatur voluptas ullam saepe officia veniam quibusdam nihil neque. adipisicing elit. Accusamus consequatur sit vel ullam expedita consequuntur!</p>
               <button className="btn btn-primary">Learn More</button>
            </div>
           </div>




           </div>

        </section>
    );
};

export default FeturedService;