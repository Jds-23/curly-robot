import styled from "styled-components"
import typewriter from "@utils/typewriter"
const Hero = ({ isTablet, isMobile }) => {
    const words = ["Web Applications.", "eCommerce Store.", "PWAs."]
    return (
        <Container >
            <Name isMobile={isMobile} isTablet={isTablet}>
                Joydeep Singha
            </Name>
            <Title isMobile={isMobile} isTablet={isTablet}>
                Passionate JavaScript Developer, Student and Optimist.
            </Title>
            <SubTitle isMobile={isMobile} isTablet={isTablet}>
                I develop <Span>{typewriter(words)}</Span>
            </SubTitle>
            <EmailLink target="_blank" rel="noopener noreferrer" href="mailto:joydeepsingha68.work@gmail.com">
                <span className="front">
                    <span>
                        Say, Hi!
                    </span>
                </span>
            </EmailLink>
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
${props => props.isMobile && 'font-size:18px;'}
`
const Title = styled.h2`
color:#fff;
font-style: normal;
font-weight: bold;
font-size: 34px;
margin-top:20px;
margin-bottom: 5px;
${props => props.isTablet && 'font-size:31px;'}
${props => props.isMobile && 'font-size:27px;'}
${props => props.isTablet && 'margin-top:10px;'}
`
const SubTitle = styled.h2`
color:#fff;
font-style: normal;
font-weight: bold;
font-size: 34px;
${props => props.isTablet && 'font-size:31px;'}
${props => props.isMobile && 'font-size:27px;'}
`
const Span = styled.span`
text-decoration:underline;
`
const EmailLink = styled.a`
  color:#fff;
  font-size:22px;
  font-weight:700;
  background: linear-gradient(90deg, #00071C -5.0%, #59AAA8 5.0%, #59AAA8 95.0%, #00071C 105.0%);
  border-radius: 5px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  margin-top:25px;
  color:#00071C;
  width: 170px;
  height: 40px;
  transition: filter 600ms;
  & .front {
    display:grid;
    place-items:center;
    border-radius: 5px;
    width: 170px;
    height: 40px;
    background-color:  #7CDEDC;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(.3, .7, .4, 1);
  }
  &:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(.3, .7, .4, 1.5);
  }
  &:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover{
      transition: filter 250ms;
  filter: brightness(110%);
  }
`