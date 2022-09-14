import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cat Crib</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex p={2} w="60%" m={"20px auto"}>
        <Jumbotron />
      </Flex>
    </div>
  );
}
