import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';



class Resume extends Component {
    
    state = {  }
    render() {
        // Resume Data
        let resumeData = this.props.data;
        return (
        
        <section className='resume' >
            <div className="resume-content">
            <div className="main-col " id='resume'>
            <h1><Fade bottom cascade>Experience.</Fade></h1>
              {
                data.work && data.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3 className='about'>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
        </section>  

        
        
        
        );
    }
}
 
export default Resume;