import type { BaseDocumentFields, Role } from "./common";

export interface User extends BaseDocumentFields {
  authUid: string;
  email: string | null;
  displayName: string | null;
  photoUrl: string | null;
  role: Role;
}
