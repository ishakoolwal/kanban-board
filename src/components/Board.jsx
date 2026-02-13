import Column from "./column";

export default function Board() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Kanban Board
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Column title="To Do" type="todo" />
        <Column title="In Progress" type="inprogress" />
        <Column title="Done" type="done" />
      </div>
    </div>
  );
}
