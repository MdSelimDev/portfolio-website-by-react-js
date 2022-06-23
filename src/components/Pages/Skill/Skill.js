import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import Header from "../Share/Header/Header";

const Skill = () => {
  const htmlSkill = 85;
  const cssSkill = 80;
  const jsSkill = 65;
  const bootSkill = 75;
  const tailSkill = 60;
  const reactSkill = 70;
  const expressSkill = 40;
  const nodeSkill = 40;
  const mongodbSkill = 40;
  const mateUiSkill = 50;

  return (
    <div>
      <Header />
      <h1 className="pt-3 text-center head-main-title">
        My Skills<span>.</span>
      </h1>
      <Container>
        <div className="skill-main">
          <Row>
            <Col lg={6}>
              <div className="div-skill-left">
                <div className="html-skill mt-4">
                  <h3>Html 5</h3>
                  <ProgressBar
                    animated
                    striped
                    variant="success"
                    now={htmlSkill}
                    label={`${htmlSkill}% HTML 5`}
                  />
                </div>
                <div className="css-skill mt-4">
                  <h3>Css3</h3>
                  <ProgressBar
                    animated
                    striped
                    variant="primary"
                    now={cssSkill}
                    label={`${cssSkill}% CSS 3`}
                  />
                </div>
                <div className="js-skill mt-4">
                  <h3>Javascript</h3>
                  <ProgressBar
                    animated
                    striped
                    variant="warning"
                    now={jsSkill}
                    label={`${jsSkill}% JAVASCRIPT`}
                  />
                </div>
                <div className="Bootstrap-skill mt-4">
                  <h3>Bootstrap 5</h3>
                  <ProgressBar
                    animated
                    striped
                    variant="info"
                    now={bootSkill}
                    label={`${bootSkill}% BOOTSTRAP 5`}
                  />
                </div>
                <div className="tailwind-skill mt-4">
                  <h3>Tailwind Css</h3>
                  <ProgressBar
                    animated
                    striped
                    variant="dark"
                    now={tailSkill}
                    label={`${tailSkill}% TAILWIND CSS`}
                  />
                </div>
                <div className="react-skill mt-4">
                  <h3>React Js</h3>
                  <ProgressBar
                    animated
                    striped
                    variant="primary"
                    now={reactSkill}
                    label={`${reactSkill}% REACT JS`}
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="express-skill mt-4">
                <h3>Express Js</h3>
                <ProgressBar
                  animated
                  striped
                  variant="danger"
                  now={expressSkill}
                  label={`${expressSkill}% EXPRESS JS`}
                />
              </div>
              <div className="nodejs-skill mt-4">
                <h3>Node Js</h3>
                <ProgressBar
                  animated
                  striped
                  variant="success"
                  now={nodeSkill}
                  label={`${nodeSkill}% NODE JS`}
                />
              </div>
              <div className="react-skill mt-4">
                <h3>MongoDb</h3>
                <ProgressBar
                  animated
                  striped
                  variant="dark"
                  now={mongodbSkill}
                  label={`${mongodbSkill}% MONGODB`}
                />
              </div>
              <div className="react-skill mt-4">
                <h3>Material UI</h3>
                <ProgressBar
                  animated
                  striped
                  variant="warning"
                  now={mateUiSkill}
                  label={`${mateUiSkill}% MATERIAL UI`}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
