import { Box, Container, Heading, Text, VStack, Link } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">
          Contact Us
        </Heading>
        <Text fontSize="lg">
          We'd love to hear from you! Reach out to us through any of the following ways:
        </Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Contact Information
          </Heading>
          <Text>Email: contact@financialtimes.com</Text>
          <Text>Phone: +123 456 7890</Text>
          <Text>
            Follow us on social media:{" "}
            <Link href="https://twitter.com/financialtimes" isExternal>
              Twitter
            </Link>
            ,{" "}
            <Link href="https://facebook.com/financialtimes" isExternal>
              Facebook
            </Link>
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;