export const FIRESTORE_COLLECTIONS = {
  users: "users",
  groups: "groups",
  groupMembers: "groupMembers",
  courses: "courses",
  biblePlans: "biblePlans",
  readingProgress: "readingProgress",
  reflections: "reflections",
  keywords: "keywords",
} as const;

export type FirestoreCollectionKey = keyof typeof FIRESTORE_COLLECTIONS;

export type FirestoreCollectionName =
  (typeof FIRESTORE_COLLECTIONS)[FirestoreCollectionKey];
