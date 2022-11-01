import React from 'react'
import styled from 'styled-components'

const AboutMe = () => {
  return (
    <div>
        <Container>    
            <About>
                <Heading>Hi ! I'm Elavarasan Nice to meet you.</Heading>
                <Para>
                I just started  coding 1 year ago. And I learn a lot this time.
                I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                </Para>
            </About>
        </Container>    
    </div>
  )
}

export default AboutMe
const Container = styled.div`
    width : 100vw;
    display : flex;
    align-items : center;
    flex-direction : column;
    justify-content: center;
    background-color : #6E07F3;
    height : 900px;
    color : white;
`
const About = styled.div`
    padding: 150px 0;
    text-align:center;
    width : 60%;
    letter-spacing : 1.5px;

`
const Heading = styled.h1`
    margin-bottom: 40px;
`
const Para = styled(Heading)`
    font-size: 20px;
    font-weight:400;
    line-height:2;
`
