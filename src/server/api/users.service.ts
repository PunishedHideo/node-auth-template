import { mongoCheckUser, mongoCreateUser, mongoLoginUser } from '../db/mongodb.js';
import {
  Credentials,
  CredentialsDocument,
  DocReturn,
} from './users.interfaces.js';
// DECLARE TYPES for mysql.js(if needed)

export function checkUserDb(
  credentials: Credentials
): Promise<DocReturn | null> {
  // make checkUsers first
  return mongoCheckUser(credentials); // returns - DocReturn OR null if not found
}

export function createUserDb(credentials: Credentials): Promise<DocReturn> {
  // prob change add 2 other props in Credentials
  return mongoCreateUser(credentials); // returns - DocReturn
}

export function loginUserDb(credentials: Credentials): Promise<boolean> {
  // prob change add 2 other props in Credentials
  return mongoLoginUser(credentials); // returns - DocReturn
}
