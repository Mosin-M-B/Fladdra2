import './OurThinking.css'
import { ThinkFuture } from '../Components/ThinkFuture/ThinkFuture'
export const OurThinking = () => {
    return(
        <>
         <div className="ourthinking_hero" >
            <div className ="ourthinking_content" >
            <h1>Ignite Your Imagination,<br/>
                Redefine Your Limits.</h1>
                
                <p>Explore our thinking and insights across the leading edge of data, cloud, and AI.</p>
            
            </div>
        </div>
        <ThinkFuture/>
        <div className="ourthinking_orgi">
            <div className="orgi_content">
            <h1>Evaluations To Transform Your Organization</h1>

                <p>Avoid costly mistakes and optimize your processes.</p>
            </div>
            
        </div>

        <div className="orgi_info">
            <div className="orgi_info1">
            <h1>Business Transformation Evaluation</h1>

                <p>Learn where the challenges lie to
                    building a dynamic, insightful data 
                    culture at your company.
                </p>
            </div>
            <div className="orgi_info2">
            <h1>Martech Evaluation</h1>

                <p>Step one on your journey to realizing 
                    better marketing impact and business outcomes.
                </p>
            </div>
        </div>

        <div className="ourthinking_know">
        <div className="know_content">
            <h1>Stay In The Know</h1>

                <p>Get the latest trends and insights across data, cloud, and AI by 
                    signing up for our newsletter series.</p>
        </div>   
    
        <div className="know_info">
            <div className="know_info1">
            <h1>The Further Observer</h1>

                <p className="p1">Catch the latest industry trends we're watching and get new insights from our
                    thought leaders delivered directly to your inbox each month.
                </p>
                <p className="p2">MONTHLY NEWSLETTER</p>
            </div>

            <div className="know_info2">
            <h1>Data Privacy</h1>

                <p className="p1">From privacy laws to data compliance, our CIPT-certified privacy leaders
                    helps you navigate the quickly changing privacy landscape.
                </p>
                <p className="p2">MONTHLY NEWSLETTER</p>
            </div>

            <div className="know_info3">
            <h1>Webinars & Videos</h1>

                <p className="p1">Replay helpful and informative content from the Further Education Community 
                    and our Youtube channels by subscribing here.
                </p>
                <p className="p2">ON-DEMAND VIDEOS</p>
            </div>
         </div>
        </div>
        </>
    )
}