import styled from "styled-components"

const AboutMe = () => {
    return (
        <Container>
            <ImgBox>
                <Img src="./my-image.jpg" />
            </ImgBox>
            <TextBox>
                <p>
                    Hey! My name is Joydeep Singha and I enjoy building stuffs. I genuinely enjoy transforming challenging UI designs into real-life applications with pixel-perfect precision. My goal is to always write code in a manner that makes the application not only efficient but also scalable.
                <br />
                    <br />
                Here are a few technologies I've been working with recently:
                </p>
            </TextBox>
        </Container >
    )
}

export default AboutMe
const Container = styled.div`
min-height:100vh;
background-color:#00071C;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
`
const ImgBox = styled.div`
border-radius: 5px;
`
const Img = styled.img`
border-radius: 5px;
width: 402px;
object-fit:contain
`

const TextBox = styled.div`
width:565px;
font-family: Karla;
font-style: normal;
font-weight: normal;
font-size: 22px;
color:#fff`