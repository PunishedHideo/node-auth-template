import {
  Credentials,
  CredentialsDocument,
  DocReturn,
} from '../api/users.interfaces';

export declare function mongoCheckUser(
  credentials: Credentials
): Promise<DocReturn | null>;

export declare function mongoCreateUser(
  credentials: Credentials
): Promise<DocReturn>;

export declare function mongoLoginUser(
  credentials: Credentials
): Promise<boolean>;
