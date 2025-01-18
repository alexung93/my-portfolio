import React from "react";
import { FaGithub, FaLinkedin, FaMapMarkedAlt, FaApple } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section";
import me from "../images/me.jpg";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: #FF9430;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const StyledImg = styled.img`
  float: right;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 60px;
  margin: 0px 0px -10px 0px;
  color: #FF9430;
`;

const Title = styled.h2`
  color: #FF9430;
  font-size: 30px;
  margin: 0px;
`;

const Location = styled.h4`
  font-size: 20px;
`;

const NavPadding = styled.div`
  margin-top: 50px;
`;

const StyledPortfolio = styled.img`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 200px;
  margin: 0px 0px 5px 0px;
`;

const styleListTitle = {
  fontSize: "18px", 
  color: "#FF9430", 
};

const colorNavLink = {
  color: "#545454",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Alexander Ung" />
    <NavPadding />
    
      <Section>
        <StyledDiv>
          <Name>Alexander Ung</Name>
          <Title>Software Engineer</Title>
          <Location><FaMapMarkedAlt /> San Jose, California</Location>
          <p>A dedicated software engineer with over 7 years of experience specializing in Python and SQL. I hold a Master’s degree in Information Technology with a concentration in Software Development from Southern New Hampshire University, complemented by a Bachelor’s degree in Computer Science from San Jose State University.</p>
        </StyledDiv>
    </Section>

    <div id="story" />
    <Section>
      <StyledH1> About Me </StyledH1>
      <StyledImg src={ me } alt="Me" />
      <p>Hello, I'm Alex, a software engineer based in San Jose, CA.</p>
      <p>After earning my degree in Computer Science from San Jose State University, I began my career at Apple as a data entry contractor. Within a few months, I was promoted to a software engineering role on the same project, leveraging my academic background and passion for technology.</p>
      <p>I later gained valuable experience as an Automation Engineer at Facebook, where I refactored test automation scripts, managed automation devices, and streamlined testing processes. Following that, I rejoined Apple as part of the email marketing team. There, I monitored and maintained production services to ensure reliability, developed customer-focused tools in Python, authored comprehensive documentation, and optimized production tools to improve scalability and efficiency. My role also involved writing and reviewing SQL queries, conducting quality assurance, and collaborating cross-functionally to implement best practices and enhance workflows.</p>
      <p>While my formal education focused on Java, I expanded my technical skill set by learning Python, Swift, and React, along with hands-on experience using frameworks such as Flask, Django, and Ruby on Rails. Additionally, I honed my data visualization skills with SQL and Tableau to deliver impactful insights.</p>
      <p>I’m immensely grateful for the opportunities I’ve had to collaborate with talented individuals who have inspired and guided me. As I continue my journey in software engineering, I’m eager to further develop my skills and contribute to innovative projects. My current interests include scripting, application development, and data visualization.</p>
      <p>Outside of work, I’m passionate about powerlifting, bowling, and playing video games. Recently, I’ve developed a love for pickleball and plan to play competitively. Additionally, I’m an avid fan of anime and science fiction, which fuel my imagination and creativity.</p>

      <Row>
      <Col xs={3}>
        <div>
          <h3 style={ styleListTitle }>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>SQL</li>
            <li>JavaScript</li>
            <li>Ruby on Rails</li>
            <li>Flask</li>
            <li>Tableau</li>
            <li>HTML & CSS</li>
            <li>Swift</li>
          </ul>
        </div>
      </Col>

      <Col xs={3}>
        <div>
          <h3 style={ styleListTitle }>Tools & Frameworks</h3>
          <ul>
            <li>Git</li>
            <li>Tableau</li>
            <li>Jira</li>
            <li>REST API</li>
            <li>Flask</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ul>
        </div>
      </Col>

      </Row>

    </Section>

    <div id="experience" />
    <Section>
    <StyledH1>Experience</StyledH1>

    <Tab.Container defaultActiveKey="experience1">
      <Row>
        <Col xs={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link style={ colorNavLink } eventKey="experience1"><FaApple /> Apple</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={ colorNavLink } eventKey="experience2">Facebook</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={ colorNavLink } eventKey="experience3"><FaApple /> Apple</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={ colorNavLink } eventKey="experience4"><FaApple /> Apple</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        
        <Col xs={9}>
        <Container>
            <Tab.Content>
            <Tab.Pane eventKey="experience1">
                <h3 style={{ color: "#FF9430" }}>Software Engineer</h3>
                <p style={{ float:"right" }}> Vendor </p>
                <p>June 2021 - January 2025</p>
                <li> Monitored and maintained existing services and production code to ensure optimal functionality and reliability in live environments.</li>
                <li> Designed and developed customer-centric tools using Python, addressing unique requirements and enhancing overall user satisfaction.</li>
                <li> Authored and updated detailed documentation for tools, ensuring clarity and ease of use for end-users and internal teams.</li>
                <li> Optimized and standardized production tools, reducing operational inefficiencies and improving scalability.</li>
                <li> Conducted quality assurance of SQL code to ensure accuracy, performance, and adherence to best practices.</li>
                <li> Wrote SQL queries tailored to meet end-user requirements, enabling data-driven decision-making and streamlined workflows.</li>
                <li> Collaborated cross-functionally with teams to implement best practices, driving consistency and alignment across workflows.</li>
                <li> Conducted rigorous testing and debugging of tools and services to maintain high-quality standards and minimize downtime</li>

              </Tab.Pane>
              <Tab.Pane eventKey="experience2">
                <h3 style={{ color: "#FF9430" }}>Automation Engineer</h3>
                <p style={{ float:"right" }}> Contract </p>
                <p>October 2019 - June 2021</p>
                <li> Refactored test automation scripts to align with best practices, improving efficiency and maintainability.</li>
                <li> Managed automation devices and tests, ensuring seamless continuous integration and build stability.</li>
                <li> Collaborated with cross-functional teams to identify and resolve issues, enhancing workflows.</li>
                <li> Designed and implemented tools to improve scalability and drive operational efficiency.</li>
                <li> Authored and updated documentation to streamline integration of Facebook internal tools across teams.</li>
              </Tab.Pane>
              <Tab.Pane eventKey="experience3">
                <h3 style={{ color: "#FF9430" }}>Software Engineer</h3>
                <p style={{ float:"right" }}> Vendor </p>
                <p>October 2017 - December 2018</p>
                <li> Developed proprietary web applications to ingest data into PostgreSQL and provide statistics for team leads.</li>
                <li> Built Swift and Ruby on Rails applications to streamline data validation and document review workflows.</li>
                <li> Refactored Python scripts for future JSON support, automating tasks and increasing productivity.</li>
                <li> Created a Flask web app integrating Python, Tableau, and Jira API for pipeline data visualization. </li>
                <li> Led team meetings to ensure progress, resolve blockers, and meet project deadlines.</li>
              </Tab.Pane>
              <Tab.Pane eventKey="experience4">
                <h3 style={{ color: "#FF9430" }}>Data Annotation Specialist</h3>
                <p style={{ float:"right" }}> Contract </p>
                <p>October 2016 - October 2017</p>
                <li> Conducted audits and mentored colleagues to ensure data quality and integrity.</li>
                <li> Provided constructive feedback and generated detailed bug reports for developers.</li>
              </Tab.Pane>
            </Tab.Content>
            </Container>
        </Col>
      </Row>
    </Tab.Container>
    </Section>

    <div id="projects"/>
    <Section>
      <StyledDiv>
        <StyledH1> Personal Projects </StyledH1>
        <a href="https://github.com/alexung93/my-portfolio"> <h3 style={{ fontSize: "18px", color: "#FF9430" }}> Portfolio </h3> </a>
        <a href="https://github.com/alexung93/my-portfolio">
        </a>
        <p>A personalized project to showcase myself and experience, updating it as I learn more about React and Gatsbyjs.</p>
        <a href="https://github.com/alexung93"><FaGithub size={25}/></a>
      </StyledDiv>
      
    </Section>

    <div id="contact"/>
    <Section>
      <StyledDiv> 
        <StyledH1> Connect </StyledH1>
        <p> If you are interested in knowing more about me or just want to connect with me. Visit my LinkedIn or feel free to e-mail me. </p>
        <a href="https://www.linkedin.com/in/alexanderung/"><FaLinkedin size={32}/> </a>
        <a href="mailto:alexung93@gmail.com"><IoIosMail size={32}/></a>
      </StyledDiv>
    </Section>

  </Layout>
)

export default IndexPage;
