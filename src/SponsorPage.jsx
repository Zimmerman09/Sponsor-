import React from 'react'
import './SponsorPage.css'



const SponsorPage = () => {
  return (
    <>
    <div className='heading'>
        <h3>
    Sponsor Us
        </h3>
        <div className='redline'>
        </div>
        <div className='subhead'>
        "Join us, fuel dreams, empower change, sponsor now."
        </div>
    </div>


    <div class="row">

        <div class="plans">
            <img src='./public/pngwing.com (32).png'/>
            <h3>Principal Partners</h3>
            <h3>INR 41,000 And Above</h3>
            <ul>
                <li>Large size logo on the team website,banners, and posters.</li>
                <li>Prederred position for a large size logo on a team car.</li>
                <li>Special acknowledgment in media and press releases.</li>
                <li>Special mention and promotion in events and public gatherings where the car is on display.</li>
            </ul>
           
            <button>
                Know More
            </button>
        </div>
        <div class="plans">
        <img src='./public/pngwing.com (31).png'/>
            <h3>Gold Partners</h3>
            <h3>INR 21,000 - 40,000</h3>
            <ul>
                <li>Large size logo on the team website,banners, and posters.</li>
                <li>Prederred position for a logo on a team car.</li>
                <li>Acknowledgment in media and press releases.</li>
                <li>Mention and promotion in events and public gatherings where the car is on display.</li>
            </ul>
            <button>
                Know More
            </button>
            
        </div>
        <div class="plans">
        <img src='./public/pngwing.com (29).png'/>
            <h3>Silver Partners</h3>
            <h3>INR 11,000 - 20,000</h3>
            <ul>
                <li>Medium size logo on the team website,banners, and posters.</li>
                <li>Position for a logo on a team car.</li>
            </ul>
            <button>
                Know More
            </button>
            
        </div>
        <div class="plans">
        <img src='./public/pngwing.com (30).png'/>
            <h3>Bronze Partners</h3>
            <h3>Below INR 11,000</h3>
            <ul>
                <li>Small size logo on the team website and banners.</li>
                <li>Position for a small size logo on a team car.</li>
            </ul>
            <button>
                Know More
            </button>

           
        </div>
    </div>

    <div className='heading'>
        <h3>
            Our Previous Sponsors
        </h3>
        <div className='redline2'>

        </div>
        <div className='subhead'>
            it was only possible because of the support of these companoes that our journey has been successful. <br/>
            So, as a token of respect,we put out the names of these companies in front of you dignitaries
        </div>
    </div>
        <div className='image'>
            <img src='./public/Screenshot (44).png'/>
        </div>
        
    
    <div className='heading'>
        <h3>Bank Details</h3>
        <div className='redline3'>

        </div>
        <div className='details'>
        <p>
            Account Name - REVANTA N.I.T JAMSHEDPUR
        </p>
        <p>
            Account Number - 31071926039
        </p>
        <p>
            IFSC CODE - SBIN0001882
        </p>
        </div>
        
        </div>
    
    



    </>
  )
}

export default SponsorPage
