export interface ConversationItem {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  student_name: string;
  quiz_id: number;
  Messages: null;
}

export interface ConversationData {
  data: ConversationItem[];
}
