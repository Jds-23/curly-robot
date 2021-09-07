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
                <span className="front">
                    <span>
                        Say, Hi!
                    </span>
                </span>
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