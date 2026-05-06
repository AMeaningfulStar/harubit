import type { BaseDocumentFields } from "./common";

export interface Course extends BaseDocumentFields {
  title: string;
  description: string | null;
  durationDays: number;
  isDefault: boolean;
  createdBy: string | null;
}

export interface BiblePassage {
  book: string;
  startChapter: number;
  startVerse: number | null;
  endChapter: number;
  endVerse: number | null;
  displayText: string;
}

export interface BiblePlan extends BaseDocumentFields {
  courseId: string;
  dayNumber: number;
  scheduledDate: string | null;
  passages: BiblePassage[];
}
