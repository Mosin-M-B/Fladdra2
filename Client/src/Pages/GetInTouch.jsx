import "./GetInTouch.css";
export const GetInTouch = () => {
  return (
    <>
      <div className="get_hero">
        <div className="get_hero_content">
          <h1>Take Your Business Further Today</h1>
          <p>
            Let’s connect on how we can use data, cloud, and AI to unlock your
            opportunities and drive impact for your business.
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="contact_content">
          <h1>Get In Toch </h1>
          <p>
            Connect with our team about your upcoming business projects and
            opportunities.
          </p>
          <from className="contact_form">
            <div className="contact_form_left">
              <div className="labls">
                <label htmlFor="name">First Name</label>
                <input type="text" required/>
              </div>
              <div className="labls">
                <label htmlFor="name">Last Name</label>
                <input type="text" required/>
              </div>
              <div className="labls">
                <label htmlFor="name">Company</label>
                <input type="text" required/>
              </div>
              <div className="labls">
                <label htmlFor="name">Email</label>
                <input type="email" required/>
              </div>
              <div className="labls">
                <label htmlFor="name">Phone Number</label>
                <input type="number" required/>
              </div>
            </div>
            <div className="contact_form_right">
              <label>
                Interested In:
                <select name="selectedIntrest" required>
                  <option>--None--</option>
                  <option value="Cloud Architecture & Managed Services">
                    Cloud Architecture & Managed Services
                  </option>
                  <option value="Data & Analytics">Data & Analytics</option>
                  <option value="Data Strategy & Transformation">
                    Data Strategy & Transformation
                  </option>
                  <option value="Digital & Relationship Marketing">
                    Digital & Relationship Marketing
                  </option>
                  <option value="Journey Optimization & Experimentation">
                    Journey Optimization & Experimentation
                  </option>
                  <option value="Privacy & Governance">
                    Privacy & Governance
                  </option>
                </select>
              </label>
              <label>
                Industry
                <select name="selectedIndustry" required>
                  <option value="Consumer">Consumer</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Higher Education">Higher Education</option>
                  <option value="High Tech">High Tech</option>
                  <option value="Hospitality">Hospitality</option>
                </select>
              </label>
              <div className="checkbox">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">I consent to having Further use the provided information for direct marketing purposes including contact by email or other electronic means. </label>
              </div>
              <button className="contanctbtn">
              SUBMIT
              </button>
            </div>
          </from>
        </div>
      </div>
    </>
  );
};
