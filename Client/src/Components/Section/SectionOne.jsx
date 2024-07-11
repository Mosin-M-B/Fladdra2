import "./SectionOne.css";
import PropTypes from 'prop-types';

export const SectionOne = ({h2,h3,para}) => {
  return (
    <>
      <section className="sectionOne">
        <div className="rotateimg"></div>
        <div className="s1c">
          <div className="innersection">
            <div className="innersectionheading">
              <h2>{h2}</h2>
            </div>
            <div className="sectioncontent">
              <p>
                {para}
              </p>
              <h3>{h3}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


SectionOne.propTypes = {
  h2: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};