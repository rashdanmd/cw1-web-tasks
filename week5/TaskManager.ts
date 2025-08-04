import { Task, type Priority } from "./Task";

export class TaskManager {
  private tasks: Task[] = [];
  private nextId: number = 1;

  addTask(
    description: string,
    priority: Priority = "🙂 No rush",
    dueDate?: string
  ): void {
    const task = new Task(this.nextId++, description, priority, dueDate);
    this.tasks.push(task);
  }

  listTasks(): void {
    if (this.tasks.length === 0) {
      console.log("No tasks available.");
      return;
    }
    this.tasks.forEach((task) => {
      console.log(
        `👉 Task: ${task.description}, Status: ${
          task.completed ? "✅" : "⏳"
        }, Priority: ${task.priority}, Due: ${task.dueDate ?? "N/A"}`
      );
    });
  }

  completeTask(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.complete();
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  private filterTasks(findTasks: (task: Task) => boolean): Task[] {
    return this.tasks.filter(findTasks);
  }

  getCompletedTasks(): Task[] {
    return this.filterTasks((task) => task.completed);
  }

  celebrateCompletedTasks(): void {
    const completed = this.getCompletedTasks();
    if (completed.length === 0) {
      console.log("No completed tasks yet.");
      return;
    }
    completed.forEach((task) => {
      console.log(
        `🎉 Task "${task.description}" (Due: ${
          task.dueDate ?? "N/A"
        }) is complete! 🥳`
      );
    });
  }
}
