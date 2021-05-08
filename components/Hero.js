import styled from "styled-components"
import typewriter from "@utils/typewriter"
const Hero = ({ isTablet }) => {
    const words = ["Web Applications.", "eCommerce Stores.", "Progressive Web Applications."]
    return (
        <Container >
            <Name isTablet={isTablet}>
                Joydeep Singha
            </Name>
            <Title isTablet={isTablet}>
                Passionate JavaScript Developer, Student and Optimist.
            </Title>
            <SubTitle isTablet={isTablet}>
                I develop <Span>{typewriter(words)}</Span>
            </SubTitle>
        </Container>
    )
}

export default Hero
const Container = styled.div`
min-height:100vh;
background-color:#00071C;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
`
const Name = styled.h1`
font-family: 'Open Sans', sans-serif;
font-weight:bold;
color:#fff;
opacity: 0.6;
text-transform:uppercase;
font-size:24px;
margin-left:4px;
${props => props.isTablet && 'font-size:21px;'}
`
const Title = styled.h2`
color:#fff;
font-style: normal;
font-weight: bold;
font-size: 34px;
margin-top:20px;
margin-bottom: 5px;
${props => props.isTablet && 'font-size:31px;'}
${props => props.isTablet && 'margin-top:10px;'}
`
const SubTitle = styled.h2`
color:#fff;
font-style: normal;
font-weight: bold;
font-size: 34px;
${props => props.isTablet && 'font-size:31px;'}
`
const Span = styled.span`
text-decoration:underline;
`