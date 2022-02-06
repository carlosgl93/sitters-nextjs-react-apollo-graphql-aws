import { useEffect } from "react";
import withApollo from "../src/Apollo";

import Footer from "../src/components/Footer";
import ResponsiveAppBar from "../src/components/ResponsiveAppBar";

import { loggedInUser } from "../src/graphql/localState";
import { checkUser } from "../src/auth/checkUser";
import { useReactiveVar } from "@apollo/client";

const Home = ({ children }) => {
  const userVar = useReactiveVar(loggedInUser);

  useEffect(() => {
    checkUser();
  }, [userVar]);

  // if (userVar === null) {
  //   return null;
  // }

  return (
    <>
      <ResponsiveAppBar />
      {children}
      <Footer />
    </>
  );
};

export default withApollo({ ssr: true })(Home);
