import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Contact = () => {

    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
    return (
        <Container isMobile={isMobile}>
            <TextBox isTablet={isTablet}
                isMobile={isMobile}>
                I am looking for any new opportunities to learn and grow. So, if you have an interesting projects let me know.
            </TextBox>
            <EmailLink target="_blank" rel="noopener noreferrer" href="mailto:joydeepsingha68.work@gmail.com">
                Say, Hi!
            </EmailLink>
        </Container>
    )
}

export default Contact;

const TextBox = styled.div`
font-family: Karla;
font-style: normal;
font-weight: 400;
font-size: 22px;
color:#fff;
height:fit-content;
${props => props.isMobile && 'font-size: 18px;'}
${props => props.isMobile && 'text-align:center;'}
${props => !props.isTablet && 'width:50%;'}
`

const Container = styled.div`
background-color:#00071C;
width:100%;
display:flex;
flex-direction:column;
margin-bottom:20px;
${props => props.isMobile && 'place-items:center;'}
`
const EmailLink = styled.a`
  position: relative;
  display: block;
  overflow: hidden;
  border:2px solid #7CDEDC;
  border-radius:5px;
  background-color:transparent;
  padding: 10px 30px;
  color:#7CDEDC;
  font-size:18px;
  font-weight:700;
  transition: all 0.25s ease-in-out;
  width:fit-content;
  cursor:pointer;
  margin-top:25px;
  &:hover {
  color: #00071C;
  background-color:#7CDEDC;
  }
`