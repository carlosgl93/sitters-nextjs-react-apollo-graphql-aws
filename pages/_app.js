import { AmplifyProvider } from "@aws-amplify/ui-react";
import withApollo from "../src/Apollo";
import { Authenticator } from "@aws-amplify/ui-react";
import awsmobile from "../src/aws-exports";
import Amplify from "aws-amplify";

// import "@aws-amplify/ui-react/styles.css"; // default theme
// Amplify.configure(awsmobile);

function MyApp({ Component, pageProps }) {
  return (
    // <AmplifyProvider>
    <Component {...pageProps} />
    // </AmplifyProvider>
  );
}

export default withApollo({ ssr: true })(MyApp);
