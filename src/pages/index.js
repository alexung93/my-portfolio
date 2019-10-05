import React from "react";
import { FaGithub, FaLinkedin, FaMapMarkedAlt, FaApple } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section";
import me from "../images/me.jpg";
import portfolio from "../images/portfolio.jpg";
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
          <p>A software engineer with 2+ years of experience in Python and SQL. With a Bachelor's degree in Computer Science from San Jose State University. Currently studying for a Master's degree in Informational Technology with a concentration in Software Development.</p>
        </StyledDiv>
    </Section>

    <div id="story" />
    <Section>
      <StyledH1> Story Time </StyledH1>
      <StyledImg src={ me } alt="Me" />
      <p>Hi there. I'm Alex, a software engineer based in San Jose, CA.  </p>

      <p>After graduating from San Jose State University. I was contracted at Apple for data entry work. Shortly after a couple months, I was promoted to a software engineer within the same project due to my background in computer science. </p>
      <p>Even though I learned Java from school, I picked up Python, Swift, and React. Also got more experience with Flask, Django and Ruby on Rails. I was able to apply my school experience with SQL and learned Tableau on the way, creating visualizations for data. </p>
      <p> I am grateful that I got the experience to meet awesome people that were skilled and learned a lot from them. And I wish to learn a lot on my journey within the field. My current interests are scripting, creating applications and data. </p>

      <p> A few hobbies of mine is powerlifting, bowling, and playing video-games. I have been powerlifting for around 6 years and it has been a fun journey that I enjoy. I casually bowl and for my free-time I enjoy playing video games. I am also a fan of anime and sci-fi things. </p>

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
              <Nav.Link style={ colorNavLink } eventKey="experience2"><FaApple /> Apple</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        
        <Col xs={9}>
        <Container>
            <Tab.Content>
              <Tab.Pane eventKey="experience1">
                <h3 style={{ color: "#FF9430" }}>Software Engineer</h3>
                <p style={{ float:"right" }}> Vendor </p>
                <p>October 2017 - December 2018</p>
                <li> Developed proprietary web applications under NDA which ingested data daily into a PostgreSQL database
and provided summary statistics for use by technical and non-technical team leads </li>
                <li> Developed a Swift application which ingested data and provided summary statistics for use by technical
and non-technical team leads </li>
                <li> Built and shipped a Ruby on Rails application that would allow the users to upload files and allow admins
to review the files and give feedback utilizing a Postgres backend  </li>
                <li> Refactored Python code that was used to validate data to fit future JSON data formats </li>
                <li> Developed a Flask web application used to visualize data for a pipeline, ingested data from utilizing the Jira
API and other databases using Python and Tableau </li>
                <li> Managed and maintained a Postgres database containing a variety of data </li>
              </Tab.Pane>
              <Tab.Pane eventKey="experience2">
                <h3 style={{ color: "#FF9430" }}>Data Annotation Specialist</h3>
                <p style={{ float:"right" }}> Contract </p>
                <p>October 2016 - October 2017</p>
                <li> Audited colleagues' data sets </li>
                <li> Trained other colleagues on application that was being used</li>
                <li> Provided feedback/bug reports for the application</li>
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
          <StyledPortfolio src={ portfolio } alt="Portfolio"/>
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
