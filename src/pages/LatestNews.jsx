import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const LatestNews = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">
          Latest News
        </Heading>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Recent Updates
          </Heading>
          <Text>News 1: Market trends show...</Text>
          <Text>News 2: New policies affecting...</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default LatestNews;