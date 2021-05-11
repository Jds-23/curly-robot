import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
const Header = ({ heroScrollIntoView,
    aboutMeScrollIntoView,
    workScrollIntoView }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
    return (
        <Container isMobile={isMobile}>
            <Brand src="./joydeep.svg" />
            <Nav>
                <NavItem onClick={heroScrollIntoView}>Home</NavItem>
                <NavItem onClick={aboutMeScrollIntoView}>About Me</NavItem>
                <NavItem onClick={workScrollIntoView}>Work</NavItem>
            </Nav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    width:100%;
    padding:0 50px;
    height:100px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    /* background-color:#00071C; */
    position:fixed;
    top:0;
    z-index:30;
    background: rgba(0, 7, 28, 0.3);
backdrop-filter: blur(4px);
    ${props => props.isMobile && 'padding:0 15px;'}
    ${props => props.isMobile && 'height:50px;'}
`
const Brand = styled.img`
object-fit:contain;
width:60px;
`
const Nav = styled.ul`
display:flex;
list-style:none;
`
const NavItem = styled.li`
color:#fff;
opacity:0.6;
font-weight:bold;
text-transform:uppercase;
font-size:14px;
margin-left:19px;
font-family: 'Open Sans', sans-serif;
transition:0.25s ;
cursor: pointer;
&:hover{
color:#7CDEDC;
opacity:1;
transform: translate(0, -3px);
}
`