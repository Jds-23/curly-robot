import styled from "styled-components"
import WorkItem from "./WorkItem"
const Work = () => {
    const desc = "A Portal where students and startup can register and build their profile. Student can look for job oppurnities and startup for talents."
    const projectName = "Corpworx Connect"
    return (
        <Container>
            <WorkItem imgSrc={"./corpworx.png"} desc={desc} projectName={projectName} align={"left"} />
        </Container>
    )
}

export default Work
const Container = styled.div`
min-height:100vh;
background-color:#00071C;
width:100%;
display:grid;
place-items:center;
`