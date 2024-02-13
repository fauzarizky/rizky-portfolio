import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Link, SimpleGrid, Stack, Text, useColorMode } from "@chakra-ui/react";
import portfolio1 from "../images/mac-view-median-web.png";
import portfolio2 from "../images/mac-view-project-2.png";
import portfolio3 from "../images/web-advice-quote.png";
import portfolio4 from "../images/mac-view-weather-app.png";
import portfolio5 from "../images/desktop-todo-app.png";
import portfolio6 from "../images/iphone-view-recipe-app.png";
import portfolio7 from "../images/resto-management-desktop.png";
import portfolio8 from "../images/mac-view-split-bill.png";
import portfolio9 from "../images/mac-view-prompt-craft.png";

export default function Projects(props) {
  const { colorMode } = useColorMode();
  const listProjects = [
    {
      id: 9,
      title: "Prompt Craft Web App",
      desc: "Develop a Full-Stack Web App using Next.js.The application utilizes mongoDB Atlas as its online database, with Mongoose serving as Object-Relational Mapping(ORM) tool for interacting with MongoDB.",
      img: portfolio9,
      link: "https://prompt-craft-alpha.vercel.app",
    },
    {
      id: 8,
      title: "Split Bill Web App",
      desc: "Develop a split bill application using ReactJS, and ChakraUI + Tailwindcss. Utilize local browser storage to persist data.",
      img: portfolio8,
      link: "https://fauzarizky.github.io/split-bill-web/",
    },
    {
      id: 7,
      title: "Resto Management Web App",
      desc: "Develop a restaurant management application using ReactJS, and ChakraUI. Utilize firebase to store data and authentication for user.",
      img: portfolio7,
      link: "https://resto-management.vercel.app/",
    },
    {
      id: 6,
      title: "Recipe Web App",
      desc: "Develop a mobile first recipe web app using ReactJS, Tailwindcss, and ChakraUI. Utilize local browser storage to persist data.",
      img: portfolio6,
      link: "https://recipe-web-app-pi.vercel.app",
    },
    {
      id: 5,
      title: "ToDo List Web App",
      desc: "Develop a ToDo List application using ReactJS and ChakraUI. Utilize local browser storage to save data.",
      img: portfolio5,
      link: "https://fauzarizky.github.io/todo-app/",
    },
    {
      id: 4,
      title: "Weather Web App",
      desc: "Practice to develop a website with weather API using ReactJS and ChakraUI.",
      img: portfolio4,
      link: "https://fauzarizky.github.io/weather-app",
    },
    {
      id: 3,
      title: "Advice & Quote Web App",
      desc: "Design and develop a website that generates customized quotes and advice using existing APIs.",
      img: portfolio3,
      link: "https://fauzarizky.github.io/advice-quote",
    },
    {
      id: 2,
      title: "Event Management Web App",
      desc: "Develop homepage with navigation, footer, and event filtering feature using React JS and ChakraUI.(Group Project)",
      img: portfolio2,
      link: "https://resilient-yeot-af509a.netlify.app",
    },
    {
      id: 1,
      title: "Publishing Platform Web App",
      desc: "Creating a static publishing platform using HTML and Tailwindcss only.",
      img: portfolio1,
      link: "https://fauzarizky.github.io/median-web",
    },
  ];

  const color = colorMode === "dark" ? "#ffd803" : "#272343";
  return (
    <div data-aos="fade-up">
      {/* eslint-disable-next-line react/prop-types*/}
      <Box id={`${props.id}`} minH={"93vh"} display={"flex"} flexDir={"column"} justifyContent={"center"} style={{ fontFamily: "Roboto Mono, monoscope" }} mb={{ base: "20px", md: "20px", lg: 0 }}>
        <Heading textAlign={"center"} textDecor={"underline"} color={color} mt={{ base: "40px", md: 0 }}>
          Projects
        </Heading>
        <Box mt={"20px"}>
          <SimpleGrid templateColumns="repeat(3, 1fr)" spacing={"10"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={{ base: "column", md: "row" }} flexWrap={"wrap"} mb={"15px"}>
            {listProjects.map((project) => (
              <Card key={project.id} maxW="sm" minH={"550px"}>
                <CardBody>
                  <Image src={project.img} alt={project.title} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{project.title}</Heading>
                    <Text>{project.desc}</Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Link href={project.link} isExternal>
                    <Button variant="solid" color={"#ffd803"} bgColor={"#272343"} _hover={{ color: "#272343", bgColor: "#ffd803" }}>
                      Visit
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}
