export type Priority = "🚨 Urgent" | "🙂 No rush" | "🐢 Take your time";

export class Task {
  id: number;
  description: string;
  completed: boolean;
  priority: Priority;
  dueDate: string | null;

  constructor(
    id: number,
    description: string,
    priority: Priority = "🙂 No rush",
    dueDate: string | null = null
  ) {
    this.id = id;
    this.description = description;
    this.completed = false;
    this.priority = priority;
    this.dueDate = dueDate;
  }

  complete(): void {
    this.completed = true;
  }
}
