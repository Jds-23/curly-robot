import styled from "styled-components"

const Header = ({ heroScrollIntoView,
    aboutMeScrollIntoView,
    workScrollIntoView }) => {
    return (
        <Container>
            <Brand src="./joydeep.svg" />
            <Nav>
                <NavItem onClick={heroScrollIntoView}>Home</NavItem>
                <NavItem onClick={aboutMeScrollIntoView}>About Me</NavItem>
                <NavItem onClick={workScrollIntoView}>Work</NavItem>
                <NavItem>Contact</NavItem>
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
    background-color:#00071C;
    position:fixed;
    top:0;
    z-index:30;
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