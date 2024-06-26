/* eslint-disable react/prop-types */
import { Box, Heading, Icon, Image, Link, LinkBox, useColorMode } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import profileImg from "../images/profile.png";
import { TECH_STACK } from "../constants/data";

export default function Home(props) {
  const { colorMode } = useColorMode();

  const color = colorMode === "dark" ? "#ffd803" : "#272343";
  const colorHi = colorMode === "dark" ? "#272343" : "#ffd803";

  return (
    <Box id={`${props.id}`} h={"90vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={{ base: "column", md: "row" }} data-aos="fade-up">
      <Box h={"80vh"} w={{ base: "80%", md: "55%", lg: "50%" }} display={"flex"} alignItems={"center"} flexDir={"column"} justifyContent={"center"}>
        <Box display={"flex"} alignItems={"start"} flexDir={"column"} w={{ base: "100%", md: "80%" }}>
          <Box bgColor={colorHi} padding={"10px"}>
            <Heading fontSize={{ base: "70px", sm: "90px", md: "80px", lg: "120px" }} color={color} style={{ fontFamily: "Roboto Mono, monoscope " }}>
              Hi,
            </Heading>
          </Box>
          <Heading fontSize={{ base: "60px", sm: "65px", md: "70px", lg: "85px" }} color={color} style={{ fontFamily: "Roboto Mono, monoscope " }}>
            I&apos;m Rizky
          </Heading>
          <Heading style={{ fontFamily: "Roboto Mono, monoscope " }} fontSize={{ base: "30px", sm: "40px", md: "25px", lg: "35px" }}>
            <Typewriter
              options={{
                strings: ["Frontend Web", "Backend Web", "Fullstack Web"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </Heading>
          <LinkBox flexDirection={"row"} mt={"10px"}>
            <Link href="https://www.linkedin.com/in/fauzarizky/" isExternal>
              <Icon as={FaLinkedin} boxSize={7} />
            </Link>
            <Link href="https://github.com/fauzarizky" isExternal>
              <Icon as={FaGithub} boxSize={7} marginStart={"10px"} />
            </Link>

            <Link href="https://behance.net/fauzarizky" isExternal>
              <Icon as={FaBehance} boxSize={7} marginStart={"10px"} />
            </Link>
          </LinkBox>
          <Box mt={"10px"}>
            <Box display={"flex"} flexWrap={"wrap"} gap={"5px"}>
              {TECH_STACK.map((Icon, index) => (
                <Icon key={index} color={color} w={30} h={30} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box h={"80vh"} w={{ md: "40%", lg: "50%" }} display={{ base: "none", md: "flex" }} justifyContent={"center"} alignItems={"center"}>
        <Image src={profileImg} boxSize={{ md: "450px", lg: "450px" }} objectFit={"contain"} />
      </Box>
    </Box>
  );
}
