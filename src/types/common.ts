export const ROLES = {
  USER: "USER",
  LEADER: "LEADER",
  ADMIN: "ADMIN",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export interface FirestoreTimestampLike {
  readonly seconds: number;
  readonly nanoseconds: number;
  toDate(): Date;
}

export type FirestoreDate = Date | FirestoreTimestampLike;

export interface BaseDocumentFields {
  id: string;
  createdAt: FirestoreDate;
  updatedAt: FirestoreDate;
}
