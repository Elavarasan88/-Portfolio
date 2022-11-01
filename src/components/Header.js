import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
        <Container>
            <LogoImg>
                <p>El <span>LOGO</span></p>
            </LogoImg>
            <Wrap>
                <a>HOME</a>
                <a>SKILLS</a>
                <a>ABOUT</a>
                <a>SERVICE</a>
                <a>RESUME</a>
                <a>CONTACT</a>
            </Wrap>
        </Container>
    </div>
  )
}


export default Header

const Container = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : space-between;
    height : 70px;
    background-color : #6E07F3;
    color : white;

`
const LogoImg = styled.div`
    p{
        padding-left : 30px;
        font-size : 34px;
        cursor : pointer;

        span{
            color : #ffffff;
        }
    }

`
const Wrap = styled.div`
    a{
        padding : 0 30px 0 15px;
        cursor : pointer;
        letter-spacing : 1.3px;

        &:hover {
            text-shadow : 0px 0px 3px white;
        }
    }

`