import Marquee from "react-fast-marquee";

const About = ({
  sectionTitle = "02 // About me",
  nextSection = "service",
}) => {
  return (
    <div className="nicolas_sm_section" id="about">
      <div className="nicolas_sm_about">
        <div className="container">
          <div className="nicolas_sm_main_title">
            <div className="left">
              <span>{sectionTitle}</span>
            </div>
            <div className="center">
              <p>
                Hello, my name’s Nikolas Raio, I’m a bay-area born designer
                based in Ghana. I’m currently at Envoy as a senior web designer
                creating connected brands, product commerce, and web
                experiences.
              </p>
            </div>
            <div className="right">
              <div className="scroll anchor">
                <a href={`#${nextSection}`} />
                <img className="sm_svg" src="img/svg/down_arrow.svg" alt={2} />
              </div>
            </div>
          </div>
          <div className="extra_container">
            <div className="biography">
              <ul>
                <li>
                  <div className="list_inner">
                    <span>Born in</span>
                    <h3>East legon Accra, Ghana</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Experience</span>
                    <h3>15 years experience</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Date of birth</span>
                    <h3>20 december, 1994</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <span>Language</span>
                    <h3>German, english, spanish</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nicolas_sm_round">
          <Marquee className="marquee">
            <div className="wrap">
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>3k+ success projects</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>2k+ happy clients</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>30+ team members</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>3k+ success projects</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>2k+ happy clients</h3>
              </div>
              <div>
                <img src="img/about/star.png" alt={1} />
              </div>
              <div>
                <h3>30+ team members</h3>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default About;
