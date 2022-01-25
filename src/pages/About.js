import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import PageContainer from "../components/pagepart/PageContainer";
import AboutImage from "../components/pagepart/AboutImage";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const [state] = useState({
    heading: "About Us",
    pageHeading: "world best travel agency company sice 2005",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  });
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="travel friends about page" />
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
      </PageContainer>
    </>
  );
};
export default About;
