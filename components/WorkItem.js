import { useState } from "react"
import styled from "styled-components"

const WorkItem = ({ works }) => {
    const [state, setState] = useState(0)

    return (
        <Container>
            {works.map(({ id, desc, projectName, imgSrc, techStack }) => (
                <CarouselItemContainer isSelected={state === id} key={id}>
                    <TextBoxAnimated isSelected={state === id}>
                        <TechList>
                            {techStack.map((tech, id) => {
                                return (
                                    <TechListItem key={id}>
                                        {tech}
                                    </TechListItem>
                                )
                            })}
                        </TechList>
                        <Title>
                            {projectName}
                        </Title>
                        <Description>
                            {desc}
                        </Description>
                    </TextBoxAnimated >
                    <ImgAnimated isSelected={state === id} src={imgSrc} />
                </CarouselItemContainer>
            ))}
            <CarouselNav>
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
grid-template-columns:minmax(168px,4fr) minmax(336px,8fr);
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
transform:translateY(100%);
opacity:  0;
transition: all 0.75s ease-in-out;
`

const ImgAnimated = styled(Img)`
    ${props => props.isSelected && `transform:translateY(0);`}
    ${props => props.isSelected && `opacity:1;`}
`
const TextBox = styled.div`
color:#fff;
display:flex;
flex-direction:column;
justify-content:center;
transform:translateX(-100%);
opacity:  0;
transition: all 0.75s ease-in-out;
height:auto;
`
const TextBoxAnimated = styled(TextBox)`
${props => props.isSelected && `transform:translateX(0);`}
    ${props => props.isSelected && `opacity:1;`}
`
const Description = styled.p`
width:100%;
font-size:22px;
z-index: -1;
`
const Title = styled.h3`
color:#fff;
font-size:24px;
margin-bottom:1px;
`
const CarouselNav = styled.div`
    display: flex;
    position: absolute;
    width: 33%;
    box-sizing: border-box;
    height: auto;
    bottom: 16px;
    left: 0;
    z-index: 5;
    padding: 0px 24px;
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

`
const TechListItem = styled.div`
font-size:14px;
font-weight:300;
opacity:0.6;
`