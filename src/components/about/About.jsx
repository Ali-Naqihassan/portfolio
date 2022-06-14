import "./about.css";
import Award from "../../img/award.png";
import Pic from "../../img/pic.jpg"
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Pic}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!
        </p>
        <p className="a-desc">
        As an artist, my first love will always be crafting the visual. Through Juno I was able to leverage my creative skills with an incredible web development toolkit, and now I spend most days branding, designing and building out web interfaces as a freelancer.
        </p>
        <div className="a-award">
         
          <div className="a-award-texts">
            <h4 className="a-award-title">Internship Certificate</h4>
            <p className="a-award-desc">
             I have done four month of intership as a MERN stack Developer.
            </p>
            
          </div>
        </div>
        {/* <img src={Award} alt="" className="a-award-img" /> */}
      </div>
      
    </div>
  );
};

export default About;
