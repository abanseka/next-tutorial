import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Alert,
  Stack,
  Image,
  Button,
  Heading,
  AlertIcon,
  AspectRatio,
} from "@chakra-ui/react";
import axios from "axios";

export default function Cat() {
  const [cat, setCat] = useState(null);
  const [alert, setAlert] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const gotoCats = () => router.push("/cats");

  const fetchCat = async () => {
    try {
      const data = await axios.get(`/api/cats/${id}`);
      setCat(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCat();
  }, [id]);

  return (
    <>
      {cat && (
        <>
          <Head>
            <title>{cat.name}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          {alert && (
            <Alert
              w={"20%"}
              m={"auto"}
              position={"absolute"}
              top={0}
              left={0}
              right={0}
              status="success"
            >
              <AlertIcon />
              Meow!!
            </Alert>
          )}

          <Flex
            gap={10}
            w={"80%"}
            m={"50px auto"}
            p={2}
            wrap="wrap"
            justifyContent={"center"}
          >
            <Flex flexDirection={"column"}>
              <AspectRatio ratio={2} w={500} h={500}>
                <Image
                  src={cat.image.url}
                  alt={cat.image.alt}
                  borderRadius={"10px 10px 0 0"}
                />
              </AspectRatio>
              <Heading
                p={5}
                w={"100%"}
                color={"gray.600"}
                bg={"whitesmoke"}
                textAlign={"center"}
              >
                {cat.name}
              </Heading>
            </Flex>

            <Flex flexDirection="column" gap={30} p={2} minW={500} maxW={450}>
              <Text color={"blue.700"}>{cat.description}</Text>

              <Stack w={"50%"} m="auto">
                <Button
                  bg={"green.500"}
                  color={"whiteAlpha.900"}
                  onClick={() => {
                    setAlert(true);
                    setTimeout(() => setAlert(false), 5000);
                  }}
                >
                  Adopt Me
                </Button>

                <Button bg={"orange.300"} onClick={gotoCats}>
                  Go back
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
}
