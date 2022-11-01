
import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    
        <Container>
            <h2>Living, Learing, & Leveling up</h2>
            <LogoWrap>
                <ul>
                    <li><TwitterIcon/></li>
                    <li><MailIcon/></li>
                    <li><LinkedInIcon /></li>
                    <li><FacebookIcon /></li>
                    <li><InstagramIcon /></li>
                </ul>
            </LogoWrap>
            <Copyrights>
                Copyrights @ 2018.
            </Copyrights>
        </Container>
  )
}

export default Footer

const Container = styled.div`
    height : 500px;
    background-color:#6E07F3;
    display :flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;


    h2{
        color:white;
    }
`
const LogoWrap = styled.div`

    ul{
        display : flex;
        
        li{
            color:white;
            padding:15px;
            list-style-type:none;
            border:2px solid rgba(255, 255, 255, 0.5);
            border-radius:40%;
            margin-right:20px;
            transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        
        &:hover{
            color:blue;
            background-color:white;
        }
        
        
        }

    }
    

`
const Copyrights = styled.p`
    color :white;

`