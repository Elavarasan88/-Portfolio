import React from 'react'
import styled from 'styled-components'
import AboutMe from './AboutMe'
import Intro from './Intro'
import Skills from './Skills'
import Project from './Project'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
        <Container>
            <Intro /> 
            <AboutMe/>   
            <Skills/>    
            <Project />   
            <Footer /> 
        </Container>
    </div>
  )
}

export default Home

const Container = styled.div`
    min-height : 100vh;
    background-color: #ffffff;
`
