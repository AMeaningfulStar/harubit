import type { BaseDocumentFields, Role } from "./common";

export interface Group extends BaseDocumentFields {
  name: string;
  description: string | null;
  leaderId: string;
  courseId: string | null;
  inviteCode: string;
  isActive: boolean;
}

export interface GroupMember extends BaseDocumentFields {
  groupId: string;
  userId: string;
  role: Role;
  joinedAt: BaseDocumentFields["createdAt"];
}
