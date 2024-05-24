import { Box, Text, Link, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={10}>
      <Flex direction="column" align="center">
        <Text mb={2}>© 2023 Financial Times. All rights reserved.</Text>
        <Flex>
          <Link href="https://twitter.com/financialtimes" isExternal mx={2}>
            Twitter
          </Link>
          <Link href="https://facebook.com/financialtimes" isExternal mx={2}>
            Facebook
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;