import styled from "styled-components"
import typeWriter from "./TypeWriter"
const Hero = () => {
    const words = ["Web Applications.", "eCommerce Stores.", "Progressive Web Applications."]
    return (
        <Container>
            <Name>
                Joydeep Singha
            </Name>
            <Title>
                Passionate JavaScript Developer, Student and Optimist.
            </Title>
            <SubTitle>
                I develop <Span>{typeWriter(words)}</Span>
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
`
const Title = styled.h2`
color:#fff;
font-style: normal;
font-weight: bold;
font-size: 34px;
margin-top:20px;
margin-bottom: 5px;
`
const SubTitle = styled.h2`
color:#fff;
font-style: normal;
font-weight: bold;
font-size: 34px;
`
const Span = styled.span`
text-decoration:underline;
`