import { useState, useEffect } from "react"
import styled from "styled-components"
import { useMediaQuery } from 'react-responsive';

const WorkItem = ({ works }) => {
    const [state, setState] = useState(0)
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' })

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setState((prev) => (prev + 1) % works.length);
        }, 4000);
        return () => clearTimeout(timeout2);
    }, [state]);

    return (
        <Container>
            {works.map(({ id, desc, projectName, imgSrc, techStack }) => (
                <CarouselItemContainer isTablet={isTablet} isSelected={state === id} key={id}>
                    <TextBoxAnimated isTablet={isTablet} isSelected={state === id}>
                        <TechList isMobile={isMobile} isTablet={isTablet}>
                            {techStack.map((tech, id) => {
                                return (
                                    <TechListItem key={id}>
                                        {tech}
                                    </TechListItem>
                                )
                            })}
                        </TechList>
                        <Title isMobile={isMobile}>
                            {projectName}
                        </Title>
                        <Description isMobile={isMobile} isTablet={isTablet}>
                            {desc}
                        </Description>
                    </TextBoxAnimated >
                    <ImgAnimated isTablet={isTablet} isSelected={state === id} src={imgSrc} />
                </CarouselItemContainer>
            ))}
            <CarouselNav isTablet={isTablet}>
                <CarouselNavButton isSelected={state === 0} onClick={() => setState(0)}></CarouselNavButton>
                <CarouselNavButton isSelected={state === 1} onClick={() => setState(1)}></CarouselNavButton>
                <CarouselNavButton isSelected={state === 2} onClick={() => setState(2)}></CarouselNavButton>
            </CarouselNav>
        </Container>

    )
}

export default WorkItem
const Container = styled.div`
position:relative;
width:100%;
height:auto;
`
const CarouselItemContainer = styled.div`
z-index: ${props => props.isSelected ? `2` : `1`};
display:grid;
gap:30px;
${props => props.isTablet ? "grid-template-rows:1fr 1fr;" : "grid-template-columns:minmax(168px,4fr) minmax(336px,8fr);"}
overflow:hidden;
height:auto;
&:nth-child(n+2){
position: absolute;
    top:0;
    left:0;
}
`
const Img = styled.img`
object-fit:contain;
width:100%;
border-radius:5px;
opacity:  0;
transition: all 0.75s ease-in-out;
height:auto;
${props => props.isTablet && "grid-row:1/1;"}
${props => props.isTablet ? "transform:translateX(-100%);" : "transform:translateY(-100%);"}
`

const ImgAnimated = styled(Img)`
${props => props.isTablet ? (props.isSelected && "transform:translateX(0%);") : (props.isSelected && "transform:translateY(0%);")}
    ${props => props.isSelected && `opacity:1;`}
`
const TextBox = styled.div`
color:#fff;
display:flex;
flex-direction:column;
justify-content:center;
opacity:  0;
transition: all 0.75s ease-in-out;
height:auto;
${props => props.isTablet && "grid-row:2/2;"}
transform:translateX(-100%);
`
const TextBoxAnimated = styled(TextBox)`
${props => props.isSelected && "transform:translateX(0%);"}
${props => props.isSelected && `opacity:1;`}
`
const Description = styled.p`
width:100%;
font-size:22px;
z-index: -1;
${props => props.isMobile && 'font-size:18px;'}
`
const Title = styled.h3`
color:#fff;
font-size:24px;
margin-bottom:1px;
${props => props.isMobile && 'font-size:21px;'}
`
const CarouselNav = styled.div`
    display: flex;
    position: absolute;
    width: 33%;
    ${props => props.isTablet && 'width:100%;'}
    box-sizing: border-box;
    height: auto;
    bottom: 16px;
    left: 0;
    z-index: 5;
    padding: 0px 24px;
    ${props => props.isTablet && 'padding: 0px 25%;'}
`
const CarouselNavButton = styled.button`
    width: calc(100% / 3 - 8px);
    height: 5px;
    background: ${props => props.isSelected ? `rgba(255, 255, 255, 1)` : `rgba(255, 255, 255, 0.5)`};
    margin: 0px 16px 0px 0px;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    outline:none;
    cursor: pointer;
`
const TechList = styled.div`
display:grid;
gap: 1rem;
grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
min-width:25%;
${props => props.isMobile && 'min-width:50%;'}
`
const TechListItem = styled.div`
font-size:14px;
font-weight:300;
opacity:0.6;
`