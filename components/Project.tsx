import styled from "styled-components";
import ProjectCarousel from "./ProjectCarousel";
const Project = () => {
  const projects = [
    {
      id: 0,
      imgSrc: "./chat-app.png",
      desc: "A real-time chat application. For Create groups for chat.",
      projectName: "Chat App",
      techStack: ["MaterialUI", "ReactJs"],
    },
    {
      id: 1,
      imgSrc: "./insta-clone.png",
      desc: "An instagram clone, for posting pictures, liking & commenting.",
      projectName: "Instagram Clone",
      techStack: ["Firebase", "ReactJs", "Stripe"],
    },
    {
      id: 2,
      imgSrc: "./personal-site.png",
      desc: "My Personal site where I post blogs.",
      projectName: "Personal Site",
      techStack: ["NextJs", "StyledComponents", "MDX"],
    },
  ];
  return (
    <Container>
      <ProjectCarousel projects={projects} />
    </Container>
  );
};

export default Project;
const Container = styled.div`
  min-height: 100vh;
  /* background-color:#00071C; */
  width: 100%;
  display: grid;
  place-items: center;
`;
