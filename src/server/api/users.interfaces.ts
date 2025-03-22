import { ObjectId } from 'mongodb'

export interface Credentials {
  login: string;
  password: string;
}

export interface CredentialsDocument {
  _id: ObjectId,
  uuid: string;
  login: string;
  password: string;
}

export interface DocReturn {
  acknowledged: boolean;
  insertedId: string; // NOTE may give an error because of the strange import, need to check type again
}
