
/*
  STEP 1: IMPORT REQUIRED MODULES

  config:
  Contains our Appwrite project configuration,
  such as the Appwrite endpoint URL and project ID.

  Client:
  Creates a connection client for Appwrite.

  Account:
  Provides authentication methods like signup, login,
  getting the current user, and logout.

  ID:
  Generates a unique ID for a new user.
*/

import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";


/*
  STEP 2: CREATE THE AUTHENTICATION SERVICE CLASS

  A class is like a blueprint.
  We define all authentication-related methods inside it.

  For example:
  - Create a new account
  - Log in
  - Get the current user's details
  - Log out
*/

export class AuthServices {

  /*
    STEP 3: CREATE THE APPWRITE CLIENT

    new Client() creates an Appwrite client object.

    This client will be configured to communicate
    with our Appwrite project.
  */

  client = new Client();


  /*
    STEP 4: DECLARE THE ACCOUNT PROPERTY

    We declare the account property here.

    We will initialize it inside the constructor
    after configuring the Appwrite client.
  */

  account;


  /*
    STEP 5: CONSTRUCTOR

    A constructor runs automatically whenever
    we create an object from this class.

    Its job is to configure Appwrite and initialize
    the Account service.
  */

  constructor() {

    /*
      setEndpoint():
      Tells the client which Appwrite server to use.

      setProject():
      Tells the client which Appwrite project to use.

      These values come from our config file.
    */

    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);


    /*
      STEP 6: INITIALIZE THE ACCOUNT SERVICE

      this.client contains our configured Appwrite client.

      new Account(this.client) creates an Account service
      that uses this client.

      We can now use this.account for authentication.
    */

    this.account = new Account(this.client);
  }


  /*
    STEP 7: CREATE A NEW USER ACCOUNT

    This method registers a new user.

    It receives an object containing:
    - email: the user's email address
    - password: the user's password
    - name: the user's name

    Example:
    createAccount({
      email: "user@example.com",
      password: "Password123!",
      name: "Harsh"
    })

    async allows us to use await for asynchronous operations.
  */

  async createAccount({ email, password, name }) {

    try {

      /*
        account.create() sends a request to Appwrite
        to create a new user account.

        ID.unique():
        Generates a unique user ID.

        email:
        The email address for the new account.

        password:
        The password for the new account.

        name:
        The user's display name.

        await waits for Appwrite to return a result.
      */

      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );


      /*
        STEP 8: CHECK WHETHER THE ACCOUNT WAS CREATED

        If userAccount contains the newly created account,
        the signup request was successful.

        We then call logIn() to sign in the new user.
      */

      if (userAccount) {

        /*
          Automatically log in the user after signup.

          We pass the same email and password
          to the login method.

          IMPORTANT:
          Use await and return so that the caller can
          wait for and receive the login result.
        */

        return await this.logIn({ email, password });

      } else {

        /*
          If no account result is available,
          return the result to the caller.
        */

        return userAccount;
      }

    } catch (err) {

      /*
        If signup or automatic login fails,
        throw the error so the calling component
        can handle and display it.
      */

      throw err;
    }
  }


  /*
    STEP 9: LOG IN AN EXISTING USER

    This method creates an email-password session.

    A session represents the user's authenticated login.

    Parameters:
    - email
    - password
  */

  async logIn({ email, password }) {

    try {

      /*
        createEmailSession():

        Sends the email and password to Appwrite.

        If the credentials are valid,
        Appwrite creates a login session.

        We return the session result to the caller.
      */

      return await this.account.createEmailSession(
        email,
        password
      );

    } catch (error) {

      /*
        If login fails, pass the error to the caller.
      */

      throw error;
    }
  }


  /*
    STEP 10: GET THE CURRENT USER

    This method retrieves the details of the
    currently authenticated user.

    For example:
    - User ID
    - Email
    - Name

    It is useful when checking whether a user
    is already logged in.
  */

  async getCurrentUser() {

    try {

      /*
        account.get() retrieves the current user's
        account details using the active session.
      */

      return await this.account.get();

    } catch (error) {

      /*
        If no active session exists, or the request fails,
        Appwrite may throw an error.

        Returning null gives the caller a simple value
        to use when there is no available user.
      */

      return null;
    }
  }


  /*
    STEP 11: LOG OUT THE CURRENT USER

    This method deletes the current user's sessions.

    After the sessions are deleted, the user is logged out.
  */

  async logout() {

    try {

      /*
        deleteSessions():

        Deletes all sessions for the current user.

        This logs the user out of all active sessions,
        not just the current browser session.
      */

      await this.account.deleteSessions();

    } catch (error) {

      /*
        Pass the error to the caller if logout fails.
      */

      throw error;
    }
  }
}


/*
  STEP 12: CREATE A SINGLE INSTANCE

  new AuthServices() creates an object from the class.

  This object has access to all the methods we defined:
  - createAccount()
  - logIn()
  - getCurrentUser()
  - logout()

  We can import this same configured object
  into other files.
*/

const authServices = new AuthServices();


/*
  STEP 13: EXPORT THE INSTANCE

  export default allows other files to import
  and use the authServices object.

  Example:
  import authServices from "./auth";
*/

export default authServices;
