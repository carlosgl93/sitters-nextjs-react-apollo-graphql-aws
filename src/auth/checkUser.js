import { Auth } from "aws-amplify";
import { loggedInUser } from "../graphql/localState";

export const checkUser = async () => {
  let user = null;
  try {
    user = await Auth.currentAuthenticatedUser();
    loggedInUser(user);
    console.log(`user from react var: ${loggedInUser}`);
  } catch (error) {
    console.log(error);
    user = null;
    loggedInUser(user);
  }
};
