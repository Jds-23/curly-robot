import styled from "styled-components";
import WorkItem from "./WorkItem";
const Work = () => {
  const works = [
    {
      id: 0,
      imgSrc: "./swapx.png",
      desc: "A decentralized exchange on BSC for buying GAIN.",
      projectName: "Gain Protocol: Swapx",
      techStack: ["NextJs", "Web3js", "Metamask"],
    },
    {
      id: 1,
      imgSrc: "./presale.png",
      desc: "A presale page of GAIN.",
      projectName: "Gain Protocol: Presale",
      techStack: ["NextJs", "Web3js", "Metamask"],
    },
    {
      id: 2,
      imgSrc: "./corpworx.png",
      desc:
        "A Portal where students and startup can register and build their profile. Student can look for job oppurnities and startup for talents.",
      projectName: "Corpworx Connect",
      techStack: ["MaterialUI", "ReactJs"],
    },
    // {
    //   id: 3,
    //   imgSrc: "./dwine.png",
    //   desc: "A online store for classic wines.",
    //   projectName: "Dvine Wine",
    //   techStack: ["Firebase", "ReactJs", "Stripe"],
    // },
    // {
    //   id: 4,
    //   imgSrc: "./electrix.png",
    //   desc: "A eCommerce for electricle vehicles in India.",
    //   projectName: "Electrix",
    //   techStack: ["Bootstrap", "ReactJs", "SCSS"],
    // },
  ];
  return (
    <Container>
      <WorkItem works={works} />
    </Container>
  );
};

export default Work;
const Container = styled.div`
  min-height: 100vh;
  /* background-color: #00071c; */
  width: 100%;
  display: grid;
  place-items: center;
`;
