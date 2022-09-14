import Link from "next/link";
import { Box, Heading, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

function Jumbotron() {
  const router = useRouter();
  const gotoCats = () => router.push("/cats");

  return (
    <Box p={5}>
      <Heading color={"teal.600"}>Chateau de Chat</Heading>

      <Text
        lineHeight={8}
        textAlign={"justify"}
        fontSize={20}
        color={"gray.600"}
      >
        Be prepared should be your mantra when bringing a new pet into your
        home. Cats are particularly sensitive to new surroundings and some may
        hide under a bed or in a closet for days or even weeks. You can avoid
        pitfalls with your new critter and help him or her adapt more easily by
        following these guidelines: Before You Bring Your Cat Home: Cats are
        territorial, and coming into a new home leaves them feeling really
        uneasy. There’s all that unexplored space, and who knows what may lurk
        there. Do him a favor and provide a small area to call his own for the
        first few days or weeks. A bathroom or laundry room works well. Furnish
        the room with cat amenities, such as food, water and a litter box.
        You’ll want to spend time with your cat, so make sure there’s a
        comfortable place for you to sit as well. Fill a litter box with one or
        two inches of litter and place it in his room where he can use it
        undisturbed. After all, everyone deserves a modicum of privacy when
        pottying, and giving him that will help forestall litter box aversion.
        Not sure which litter to choose? Check out How to Choose A Cat Litter.
        Set up a feeding station with food and water bowls. Locate it away from
        the litter box. For more cat feeding and nutrition tips, visit our Cat
        Nutrition section. Cats love to get away from it all in small places,
        and you can provide one for your new cat as his own little safe haven.
        <pre
          style={{
            margin: "10px 0",
            color: "tomato",
            fontStyle: "italic",
            fontWeight: "bold",
            letterSpacing: 0.5,
          }}
        >
          <Link href={"https://www.petfinder.com"}>
            <a>- Copied from petfinder.com -</a>
          </Link>
        </pre>
      </Text>

      <Button mt={5} bg="green.300" onClick={gotoCats}>
        Choose Your Pet
      </Button>
    </Box>
  );
}

export default Jumbotron;
