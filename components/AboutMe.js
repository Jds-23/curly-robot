import styled from "styled-components"

const AboutMe = ({ isTablet }) => {
    return (
        <Container isTablet={isTablet}>
            <ImgBox isTablet={isTablet}>
                <Img src="./my-image.jpg" />
            </ImgBox>
            <TextBox>
                <p style={{ textAlign: isTablet ? "center" : 'left' }}>
                    Hey! My name is Joydeep Singha and I enjoy building stuffs. I genuinely enjoy transforming challenging UI designs into real-life applications with pixel-perfect precision. My goal is to always write code in a manner that makes the application not only efficient but also scalable.
                <br />
                    <br />
                Here are a few technologies I've been working with recently:
                </p>
                <TechList>
                    <TechListItem>
                        ReactJs
                    </TechListItem>
                    <TechListItem>
                        JavaScript(ES6+)
                    </TechListItem>
                    <TechListItem>
                        CSS/SCSS
                    </TechListItem>

                    <TechListItem>
                        TypeScript
                    </TechListItem>
                    <TechListItem>
                        NextJs
                    </TechListItem>
                    <TechListItem>
                        Firebase
                    </TechListItem>

                    <TechListItem>
                        StyledComponents
                    </TechListItem>
                    <TechListItem>
                        MaterialUI
                    </TechListItem>
                    <TechListItem>
                        Node/Express.js
                    </TechListItem>
                </TechList>
            </TextBox>
        </Container >
    )
}

export default AboutMe
const Container = styled.div`
min-height:100vh;
background-color:#00071C;
width:100%;
display:grid;
${props => props.isTablet ? 'grid-template-rows:auto;' : 'gap:30px; grid-template-columns:5fr 7fr;'}
place-items:center;
`
const ImgBox = styled.div`
border-radius: 5px;
height:fit-content;
max-width:400px;
`
const Img = styled.img`
border-radius: 5px;
width: 100%;
object-fit:contain
`

const TextBox = styled.div`
font-family: Karla;
font-style: normal;
font-weight: 400;
font-size: 22px;
color:#fff;
height:fit-content;
`

const TechList = styled.div`
display:grid;
gap: 1rem;
grid-row-gap:21px;
grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
`
const TechListItem = styled.div`
font-size:18px;
font-weight:300;
`