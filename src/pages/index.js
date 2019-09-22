import React from "react";
import { Link } from "gatsby";
import { FaGithub, FaLinkedin, FaMapMarkedAlt, FaApple } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap';

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Section from "../components/section";
import me from "../images/me.jpg";
import styled from "styled-components";

const StyledH1 = styled.h1`
  margin-top 10px;
  margin-bottom 35px;
`;

const StyledImg = styled.img`
  float: right;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledDiv = styled.div`
  text-align:center;
`;

const LanguagesDiv = styled.div`
  float: left;
`;

const ToolDiv = styled.div`
  margin-left: 40%;
`;

const NavPadding = styled.div`
  margin-top: 50px;
`;

const SectionCenterAlign = styled(Section)`
  justify-content: center;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Alexander Ung" />
    <NavPadding />
    <SectionCenterAlign>
      <StyledDiv>
      <h1>Alexander Ung</h1>
      <h2>Software Engineer</h2>
      <h4><FaMapMarkedAlt /> San Jose, California</h4>
      <p>A software engineer with 2+ years of experience in Python and SQL. With a Bachelor's Degree in Computer Science from San Jose State University.</p>
      <a href="https://www.linkedin.com/in/alexanderung/"><FaLinkedin size={32}/></a>
      <a href="mailto:alexung93@gmail.com"><IoIosMail size={32}/></a>
      </StyledDiv>
    </SectionCenterAlign>

    <div id="about-me" />
    <Section>
      <StyledH1> About Me </StyledH1>
      <StyledImg src={ me } alt="Me" />
      <p>Hi there. I'm Alex, a software engineer based in San Jose, CA.  </p>

      <p>After graduating from San Jose State University. I was contracted at Apple for data entry work. Shortly after a couple months, I was promoted to a software engineer within the same project due to my background in computer science. </p>
      <p>Even though I learned Java from school, I picked up Python, Swift, and React. Also got more experience with Flask, Django and Ruby on Rails. I was able to apply my school experience with SQL and learned Tableau on the way, creating visualizations for data. </p>
      <p> I am grateful that I got the experience to meet awesome people that were skilled and learned a lot from them. And I wish to learn a lot on my journey within the field. My current interests are scripting, creating applications and data. </p>

      <LanguagesDiv>
      <h3>Programming Languages</h3>
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
      </LanguagesDiv>

      <ToolDiv>
      <h3>Tools & Frameworks</h3>
      <ul>
        <li>Git</li>
        <li>Tableau</li>
        <li>Jira</li>
        <li>REST API</li>
        <li>Flask</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>
      </ToolDiv>
        

    </Section>

    <div id="experience" />
    <Section>
    <StyledH1>Experience</StyledH1>

    <Tab.Container defaultActiveKey="experience1">
      <Row>
        <Col xs={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="experience1"><FaApple /> Apple</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="experience2"><FaApple /> Apple</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        
        <Col xs={9}>
        <Container>
            <Tab.Content>
              <Tab.Pane eventKey="experience1">
                <h3>Software Engineer</h3>
                <p style={{ float:"right" }}> Vendor </p>
                <p>October 2017 - December 2018</p>
                <li> Created automated scripts and web applications using ​Python ​that supported productivity of  the team </li>
                <li> Developed a ​Swift ​application to help parse through and analyze data </li>
                <li> Built a ​Ruby on Rails​ application that was used by other teams  </li>
                <li> Refactored ​Python ​code to better tailor future practices </li>
                <li> Collaborated with other teams/developers to create a ​Flask ​web application for metrics </li>
                <li> Created ​Tableau ​dashboards to visualize a pipeline </li>
                <li> Managed and maintained a ​Postgres ​database containing a variety of data </li>
              </Tab.Pane>
              <Tab.Pane eventKey="experience2">
                <h3>Data Annotation Specialist</h3>
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
    <StyledH1> Projects </StyledH1>
    <p> WIP </p>
    </Section>

    <div id="contact"/>
    <Section>
    <StyledH1> Contact Me </StyledH1>
    <p> If you are interested in knowing more about me or just want to connect with me. Click on my  LinkedIn or feel free to e-mail me. </p>
    <Link href="https://www.linkedin.com/in/alexanderung/"><FaLinkedin size={32}/> </Link>
    <Link href="mailto:alexung93@gmail.com"><IoIosMail size={32}/></Link>
    

    </Section>
  </Layout>
)

export default IndexPage;
