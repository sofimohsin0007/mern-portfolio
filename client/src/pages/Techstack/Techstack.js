import React from "react";
import { TechstackList } from "../../utils/TchstackList";
import { JackInTheBox, Fade } from "react-awesome-reveal";

import "./techstack.css"; // Assuming you have a CSS file for styling

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <JackInTheBox>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming languages, frameworks, databases, front-end
            and back-end tools, and APIs
          </p>
        </JackInTheBox>
        <Fade direction="left" duration={2000}>
          <div className="row">
            {TechstackList.map((tech) => (
              <div key={tech._id} className="col-md-4">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Techstack;
