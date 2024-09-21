import meter1 from "../assets/img/react-logo.png";
import meter2 from "../assets/img/javascript-logo.svg";
import meter3 from "../assets/img/nextjs-13.svg";
import meter4 from "../assets/img/tailwind-css-1.svg";
import meter5 from "../assets/img/typescript.svg";
import meter6 from "../assets/img/css.svg";
import meter7 from "../assets/img/nodejs.svg";
import meter8 from "../assets/img/mongodb.svg";
import meter9 from "../assets/img/python.svg";
import meter10 from "../assets/img/c++.svg";
import meter11 from "../assets/img/c.svg";
import meter12 from "../assets/img/mysql.svg";
import meter13 from "../assets/img/adobe-photoshop.svg";
import meter14 from "../assets/img/figma.svg";
import meter15 from "../assets/img/wireframecc.svg";
import meter16 from "../assets/img/wordpress.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <br /><br />
                        <h4>Front-end</h4><br />
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover" }}/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Img" style={{ marginTop:"50px", marginBottom: "82px" }}/>
                                <h5>NextJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Img" style={{  marginTop:"40px", marginBottom: "72px"  }}/>
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover" }}/>
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover" }}/>
                                <h5>CSS</h5>
                            </div>
                        </Carousel>
                        <br /><br /><br />
                        <h4>Back-end</h4><br />
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter7} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover" }}/>
                                <h5>mongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover"}}/>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover" }}/>
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover" }}/>
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover" }}/>
                                <h5>MySQL</h5>
                            </div>
                        </Carousel>
                        <br /><br /><br />
                        <h4>UI/UX Design</h4><br />
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <img src={meter13} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                                <h5>Adobe Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={meter14} alt="Img" style={{ width: "100px", height: "", objectFit: "cover" }}/>
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={meter15} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover"}}/>
                                <h5>Wireframe.cc</h5>
                            </div>
                            <div className="item">
                                <img src={meter16} alt="Img" style={{ width: "150px", height: "150px", objectFit: "cover"}}/>
                                <h5>WordPress</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Img" />
    </section>
  )
}
