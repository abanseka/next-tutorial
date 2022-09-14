import Link from "next/link";
import { Container, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

function Jumbotron() {
  const router = useRouter();
  const gotoCats = () => router.push("/cats");

  return (
    <Container p={5} w={"80%"} ml={2}>
      <Heading>Chateau de Chat</Heading>

      <div style={{ marginTop: 5 }}>
        Are you a cat person, Or are you looking tobecome one. no matter the
        choice you are in the right place. At cat Crib, we have a vast diversity
        of cats for adoption. Make the decision to find a companion that will
        brigten your mood and make your day now and then.
        <pre>
          <span>-Get a new freind today-</span>
        </pre>
      </div>

      <Button mt={5} bg="green.300" onClick={gotoCats}>
        Choose Your Pet
      </Button>
    </Container>
  );
}

export default Jumbotron;
