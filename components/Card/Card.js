import {
  Flex,
  Image,
  Text,
  Heading,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Card({ image, name, phone, email, id }) {
  const router = useRouter();
  const gotoCatInfo = () => router.push(`/cats/${id}`);

  return (
    <GridItem
      p={1}
      justifySelf={"center"}
      boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
      onClick={gotoCatInfo}
    >
      <AspectRatio ratio={2} w={250} h={250}>
        <Image
          src={image.url}
          alt={image.alt}
          style={{ maxInlineSize: "100%" }}
        />
      </AspectRatio>

      <Flex
        direction={"column"}
        alignItems={"center"}
        gap={1}
        p={1}
        bg={"whitesmoke"}
      >
        <Heading as="h5" size={"md"} color={"gray.600"}>
          {name}
        </Heading>
        <Text color={"gray.500"}>{phone}</Text>
        <Text color={"gray.500"}>{email}</Text>
      </Flex>
    </GridItem>
  );
}
