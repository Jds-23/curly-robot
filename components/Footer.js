import styled from "styled-components"

const Footer = () => {
    return (
        <Container>
            <Text>
                Designed {"&"} Built by Me.
            </Text>
        </Container>
    )
}

export default Footer
const Container = styled.div`
background-color:#00071C;
width:100%;
display:flex;
align-items:center;
height:150px;
`
const Text = styled.h6`
width:100%;
font-size:22px;
color:#7CDEDC;
font-weight:400;
text-align:right;
`