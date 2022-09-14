import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Nav() {
  return (
    <Flex p={3} bg="gray.100">
      <Box w="70%" m="auto" p={2}>
        <Link href={"/"}>
          <Heading as={"h2"} size={"md"} color={"orange.500"} cursor="pointer">
            Kitty.io
          </Heading>
        </Link>
      </Box>
    </Flex>
  );
}
