import React from "react";
import { Row, Col } from "reactstrap";
import {
  noMarginPad,
  topCenter,
  topAlign,
  allCenter,
  full,
} from "../../Constants/alignments";
import cn from "classnames";
import will from "../../assets/images/team-will.jpeg";
import sunil from "../../assets/images/team-sunil.jpeg";
import dina from "../../assets/images/team-dina.jpg";
import github from "../../assets/images/github-logo-black.svg";
import linkedin from "../../assets/images/linkedin.svg";

const Team = () => {
  return (
    <div className={cn(full, topCenter, noMarginPad)}>
      <Row className={cn(full, "my-2", noMarginPad, topAlign)}>
        <Col xs="6" md="4" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={will} alt="will" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-3", "text-center")}>
            <b>Will Shahda</b>
            <br />
            CEO & Solidity Developer
          </p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/opz">
                <img src={github} alt="" className={cn("github-logo")} />
              </a>
            </li>
            <li class="list-inline-item">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/willshahda/">
                <img src={linkedin} alt="" className={cn("github-logo")} />
              </a>
            </li>
          </ul>
        </Col>
        <Col xs="6" md="4" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={sunil} alt="sunil" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-3", "text-center")}>
            <b>Sunil Srivatsa</b>
            <br />
            DeFi Strategist
          </p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/alphastorm">
                <img src={github} alt="" className={cn("github-logo")} />
              </a>
            </li>
            <li class="list-inline-item">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sunilsrivatsa/">
                <img src={linkedin} alt="" className={cn("github-logo")} />
              </a>
            </li>
          </ul>
        </Col>
        <Col xs="6" md="4" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={dina} alt="sunil" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-3", "text-center")}>
            <b>Dina Deljanin</b>
            <br />
            Front-end Developer
          </p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/dinadeljanin">
                <img src={github} alt="" className={cn("github-logo")} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
