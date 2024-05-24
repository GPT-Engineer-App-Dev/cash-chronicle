import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">
          Welcome to Financial Times
        </Heading>
        <Text fontSize="lg">
          Stay updated with the latest financial news and insights.
        </Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Featured Articles
          </Heading>
          <Text>Article 1: The impact of global markets...</Text>
          <Text>Article 2: Financial strategies for 2023...</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;