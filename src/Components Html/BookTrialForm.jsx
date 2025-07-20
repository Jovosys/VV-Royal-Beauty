import React from 'react'
import '../Components Css/RequestForm.Css'


export default function BookTrialForm({ closeIcon }) {


  return (
    <div className="appointment-form container p-4 mb-5" data-aos="zoom-in">
          <div className="text-end">
            <button className="btn-close" onClick={closeIcon}></button>
          </div>
          <h4 className="text-dark mb-4">Book a Free Trail</h4>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Name" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="tel" className="form-control" placeholder="Mobile No" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="col-md-6 mb-3">
                <select className="form-control" required>
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="City" required />
              </div>
              <div className="col-md-6 mb-3">
                <textarea className="form-control" placeholder="Remarks" rows="2"></textarea>
              </div>
            </div>
            <div className='submitbtn'>
               <button type="submit" className="btn btn-success w-25">Submit</button>
            </div>
          </form>
        </div>
  )
}
