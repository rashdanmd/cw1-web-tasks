import { TaskManager } from "./TaskManager";

function main(): void {
  const taskManager = new TaskManager();

  taskManager.addTask("Pay parking ticket", "🚨 Urgent", "2025-08-06");
  taskManager.addTask(
    "Buy anniversary gift",
    "🐢 Take your time",
    "2025-08-08"
  );

  console.log("\n📜 TASK LIST:");
  taskManager.listTasks();

  taskManager.completeTask(1);
  taskManager.deleteTask(2);

  console.log("\n✅ COMPLETED TASKS:");
  taskManager.celebrateCompletedTasks();
}

main();
