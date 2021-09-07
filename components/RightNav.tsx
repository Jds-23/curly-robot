import styled from "styled-components";

const LeftNav = ({ isTablet }) => {
  return (
    <Container isTablet={isTablet}>
      <Nav>
        <EmailLink
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:joydeepsingha68.work@gmail.com"
        >
          joydeepsingha68.work@gmail.com
        </EmailLink>
      </Nav>
    </Container>
  );
};

export default LeftNav;

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 50px;
  width: 50px;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  ${(props) => props.isTablet && "right:25px;"}
  ${(props) => props.isTablet && "width:25px;"}
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  &::after {
    background-color: #ffffff;
    content: "";
    display: block;
    width: 1px;
    height: 160px;
    opacity: 0.6;
    margin: 0px auto;
    margin-top: 16px;
  }
`;
const EmailLink = styled.a`
  font-size: 14px;
  color: #fff;
  opacity: 0.6;
  writing-mode: vertical-rl;
  transition: 0.25s;
  cursor: pointer;
  ${(props) => props.isTablet && "font-size:12px;"}
  &:hover {
    color: #7cdedc;
    opacity: 1;
    transform: translate(0, -3px);
  }
`;
