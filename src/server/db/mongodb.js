// For tomorrow:
// BCRYPT a password(also see nonce)
// after finishing work with mongodb see JWT and other auth stuff
// make simple checking login in db/storing user/logging in with all technologies
// proceed with other stuff after finishing all above

// NOTE Bcryption/Nonce and other stuff with password can go here in the credentialsFull(31)

import { MongoClient } from 'mongodb';
import { v7 as uuidv7 } from 'uuid';
import bcrypt from 'bcrypt';

// MONGO INIT
const mongoClient = new MongoClient('mongodb://localhost:27017'); // Your mongodb URI
await mongoClient.connect();
const database = mongoClient.db('mongodatabase');
const collection = database.collection('users');

export async function mongoCheckUser(credentials) {
  // NOTE done but needs testing
  const { login, password } = credentials;
  const find = await collection.findOne({ login });
  // doc(object) returned - { id: number(UNIQUE, INCREMENTAL), uuid: string, login: string, password: string }
  return find;
};

export async function mongoCreateUser(credentials) {
  // NOTE done but needs testing
  const { login, password } = credentials;

  // HASHING
  const salt = 10; // salting the hash makes it more and more uncrackable
  const hashPassword = async (password, salt) => {
      const hash = await new Promise((resolve, reject) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      });
      return hash;
  };
  const credentialsFull = {
    // NOTE Bcryption/Nonce and other stuff with password can go here
    uuid: uuidv7(),
    login: login,
    password: await hashPassword(password, salt),
  };
  // HASHING

  const insert = await collection.insertOne(credentialsFull);
  return insert;
};

export async function mongoLoginUser(credentials) {
  // NOTE done but needs testing
  const { login, password } = credentials;
  const find = await collection.findOne({ login });
  // doc(object) returned - { id: number(UNIQUE, INCREMENTAL), uuid: string, login: string, password: string }
  const compare = bcrypt.compare(password, find.password, function(err, result) {
    if (result) {
      // sign in the user
      console.log('Hashes compared with success. Logging user in')
    } else {
      // deny sign in
      console.log('Invalid hash comparison! Denying the login')
    }
});
};


