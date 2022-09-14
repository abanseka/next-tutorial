import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const route = useRouter();

  return (
    <Flex p={3} bg="gray.100" w={"60%"} m={"auto"}>
      <Box w="70%" m="auto" p={2}>
        <Link href={"/"}>
          <Heading as={"h2"} size={"md"} color={"orange.500"} cursor="pointer">
            Kitty.io
          </Heading>
        </Link>
      </Box>
      <Button bg={"green.200"} onClick={() => route.push("/cats")}>
        Choose your pet
      </Button>
    </Flex>
  );
}
