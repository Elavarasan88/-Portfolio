import React from 'react'
import styled from 'styled-components'

const Intro = () => {
  return (
    <div>
        <Container>
            <Heading>Frontend Webdeveloper</Heading>
            <SideHeading>I design and code beautifully simple things and I love what I do.</SideHeading>   
            <Image src='https://mattfarley.ca/img/mf-avatar.svg'></Image> 
            <Image2 src = "https://mattfarley.ca/img/hero-devices.svg"></Image2>
        </Container>
    </div>
  )
}

export default Intro

const Container = styled.div`
    min-height : calc(100vh - 70px);
    display : flex;
    align-items : center;
    flex-direction : column;
    justify-content : center;
`
const Heading = styled.h1`
    margin-top : 60px;
    padding : 25px;
    font-size : 40px;
    color : #141c3a;
    letter-spacing : 2px;
    
`
const SideHeading = styled(Heading)`
    margin-top:0;
    font-size : 20px;
    font-weight : 400;
`
const Image = styled.img`
    padding : 25px;
`
const Image2 = styled(Image)`
    width : 60vw;
` 



