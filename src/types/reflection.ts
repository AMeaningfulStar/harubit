import type { BaseDocumentFields } from "./common";

export interface Reflection extends BaseDocumentFields {
  userId: string;
  groupId: string;
  biblePlanId: string;
  content: string;
}

export interface Keyword extends BaseDocumentFields {
  userId: string;
  groupId: string;
  biblePlanId: string;
  reflectionId: string | null;
  value: string;
}
