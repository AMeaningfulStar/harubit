import type { BaseDocumentFields } from "./common";

export interface ReadingProgress extends BaseDocumentFields {
  userId: string;
  groupId: string;
  courseId: string;
  biblePlanId: string;
  readDate: string;
  isRead: boolean;
  readAt: BaseDocumentFields["createdAt"] | null;
}
