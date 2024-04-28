// Complete the Index page component for Aaron Burr's personal website
import { Box, Flex, Text, Button, Image, Link, VStack, Heading, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Box minH="100vh" bg="gray.900" color="white">
      <Flex align="center" justify="center" h="100vh" p={4} flexDirection="column">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBYXJvbiUyMEJ1cnIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQzMjg2OTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Aaron Burr" mb={4} />
        <Heading as="h1" size="xl" fontWeight="bold">
          Aaron Burr
        </Heading>
        <Text fontSize="lg" mt={2}>
          Creative Director & UI/UX Designer
        </Text>
        <VStack mt={4} spacing={3}>
          <Link href="https://linkedin.com/in/aaronburr" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/aaronburr" isExternal>
            <Button leftIcon={<FaGithub />} colorScheme="gray">
              GitHub
            </Button>
          </Link>
          <Link href="mailto:aaronburr@example.com">
            <Button leftIcon={<FaEnvelope />} colorScheme="red">
              Email Me
            </Button>
          </Link>
        </VStack>
        <Button rightIcon={<FaArrowRight />} colorScheme="teal" mt={10} size="lg">
          View My Work
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
