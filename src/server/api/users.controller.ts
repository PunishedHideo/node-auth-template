import { Request, Response } from 'express'; // types
import { Credentials } from './users.interfaces.js';
import { checkUserDb, createUserDb, loginUserDb } from './users.service.js';

// TODO make a RequestConstructor.ts class with constructor that constructs send object

// JUST FOR TEST
const findUserDatabase = async (req: Request, res: Response) => { // NOTE useless and just for test
  // checks if user is in database
  const credentials = req.body as Credentials;
  // TODO make a request to the db and see if the login is already present
  if (await checkUserDb(credentials)) {
    console.log("User already present in database");
  } else {
    console.log("User is not present in the database");
  }
  // no res yet
};
// JUST FOR TEST

const storeUserDatabase = async (req: Request, res: Response) => {
  const credentials = req.body as Credentials;
  // TODO make a request to the db and see if the login is already present
  if (await checkUserDb(credentials)) {
    console.log("User already present in database");
    res.status(409).send("User already present in database") // TODO change send with RequestConstructor
  } else {
    await createUserDb(credentials);
    res.status(201).send("User created") // TODO change send with RequestConstructor
  }
};

const loginUserDatabase = async (req: Request, res: Response) => { // still not possesses res
  const credentials = req.body as Credentials;
  // TODO make a request to the db and see if the login is already present
  if (await checkUserDb(credentials)) {
    // compare password(or compare password hashes via bcrypt - it will give out true if they are good)
    await loginUserDb(credentials)
    res.status(200).send("User logged in") // TODO change send with RequestConstructor
  } else {
    console.log('User is not present in the database and before signing in needs to sing up first')
    res.status(404).send("User is not present in the database and before signing in needs to sing up first") // TODO change send with RequestConstructor
  }
};

export { findUserDatabase, storeUserDatabase, loginUserDatabase };
