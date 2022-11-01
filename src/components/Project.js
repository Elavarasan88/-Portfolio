import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';

const Project = () => {
  return (
    <div>
      <Container>
        <h2>MY PROJECTS</h2>
        <Projects>
          <a href='/#'><img alt='' src='https://cdn.calculatorsoup.com/images/thumbnails/calculators_math_basic.png'/></a>
          <a href='/#'><img alt='' src='https://cdn.dribbble.com/users/946315/screenshots/14418455/media/aa6c3f7af3f8bd4d83d4447df9a15e8a.png?compress=1&resize=400x300'/></a>
          <a href='/#'><img alt='' src='https://logos-world.net/wp-content/uploads/2020/10/Tesla-Emblem.png'/></a>
        </Projects>
        <GitHubButton>
          <GitHubIcon />
          <a>Github</a>
        </GitHubButton>

      </Container>
    </div>
  )
}

export default Project

const Container = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
    h2{
      font-size:30px;
      color:#141c3a;
    }
`
const Projects = styled.div`
    a {
      img{
        height:200px;
        width:200px;
        border : 0.2px solid lightblue;
        margin:60px;
        padding:20px;
        display:relative;
        transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover{
          transform : scale(1.05);
        }
        
        

      }

      a{
        display:absolute;
        
      }

    }
  
`
const GitHubButton = styled.button`
    width:200px;
    height:60px;
    border:2px solid blue;
    background-color:white;
    margin-bottom:30px;
    border-radius:20px;
    color:blue;
    transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    
    
    
    
    a{
      margin-left:15px;
      font-size:30px;
      

    }
    &:hover{
      background-color:blue;
      color:white;
    }


    `