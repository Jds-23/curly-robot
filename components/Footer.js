import styled from "styled-components"
import { useMediaQuery } from 'react-responsive';
const Footer = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
    return (
        <Container isMobile={isMobile}>
            <Text isMobile={isMobile}>
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
${props => props.isMobile && 'height:40px;'}
`
const Text = styled.h6`
width:100%;
font-size:22px;
color:#7CDEDC;
font-weight:400;
text-align:right;
${props => props.isMobile && 'font-size:16px;'}
`