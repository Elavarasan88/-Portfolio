import React from 'react'
import styled from 'styled-components'
import logo from '../images/1174949_js_react js_logo_react_react native_icon.png'

const Skills = () => {
  return (
    <div>
        <Main>
            <Container>
                <h2>SKILLS</h2>
                <Image src='https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png' ></Image>
                <ReactLogo src={logo}></ReactLogo>
                <h2>React js</h2>
            </Container>
        </Main>    
    </div>
  )
}

export default Skills
const Main = styled.div`
    display : flex;
    justify-content:center;
`
const Container = styled.div`
    border-radius:30px;
    display:flex;
    justify-content:center;
    background-color : white;
    width : 80%;
    top:-150px; 
    position:relative;
    flex-direction:column;
    align-items:center;
    border: 0.1px solid lightblue;
    padding:30px 0;
    box-shadow:0px 3px 5px lightblue;

    h2{
        font-size : 29px;
        color : #141c3a;

    }

`
const Image = styled.img`
    margin-top:40px;
    width : 50%;

`
const ReactLogo = styled.img`
    margin-top:40px;
    width:30%;

`