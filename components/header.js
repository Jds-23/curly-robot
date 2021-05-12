import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from "react";
const Header = ({ heroScrollIntoView,
    aboutMeScrollIntoView,
    workScrollIntoView }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
    const prevScrollY = useRef(0);

    const [goingUp, setGoingUp] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && goingUp) {
                setGoingUp(false);
            }
            if (prevScrollY.current > currentScrollY && !goingUp) {
                setGoingUp(true);
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);
    console.log(goingUp)
    return (
        <Container goingUp={goingUp} isMobile={isMobile}>
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
    height:75px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    top:0;
    z-index:30;
    background: rgba(0, 7, 28, 0.3);
    backdrop-filter: blur(4px);
    transition: all 0.25s ease-in-out;
    ${props => props.isMobile && 'padding:0 15px;'}
    ${props => props.isMobile && 'height:50px;'}
    ${props => !props.goingUp && 'top:-75px;'}
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