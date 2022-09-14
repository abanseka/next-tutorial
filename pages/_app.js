import { ChakraProvider } from "@chakra-ui/react";
import Nav from "../components/nav/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
