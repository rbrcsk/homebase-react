var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
const {HomebaseProvider:HomebaseProvider$$module$js_gen$todo_example, useTransact:useTransact$$module$js_gen$todo_example, useQuery:useQuery$$module$js_gen$todo_example} = window.homebase.react;
const config$$module$js_gen$todo_example = {schema:{":user/name":{":db/unique":":db.unique/identity"}, ":todo/project":{":db/valueType":":db.type/ref", ":db/cardinality":":db.cardinality/one"}, ":todo/owner":{":db/valueType":":db.type/ref", ":db/cardinality":":db.cardinality/one"}}, initialData:[{":db/id":-1, ":user/name":"Stella"}, {":db/id":-2, ":user/name":"Arpegius"}, {":db/id":-3, ":project/name":"Make it"}, {":db/id":-4, ":project/name":"Do it"}, {":todo/name":"Fix ship", ":todo/owner":-1, 
":todo/project":-3, ":todo/created-at":new Date("2003/11/10")}, {":todo/name":"Go home", ":todo/owner":-2, ":todo/project":-4, ":todo/created-at":new Date("2003/11/9")}]};
const App$$module$js_gen$todo_example = () => module$node_modules$react$index.createElement(HomebaseProvider$$module$js_gen$todo_example, {config:config$$module$js_gen$todo_example}, module$node_modules$react$index.createElement(Todos$$module$js_gen$todo_example, null));
const Todos$$module$js_gen$todo_example = () => module$node_modules$react$index.createElement("div", null, module$node_modules$react$index.createElement(TodoInput$$module$js_gen$todo_example, null), module$node_modules$react$index.createElement(TodoList$$module$js_gen$todo_example, null));
const TodoInput$$module$js_gen$todo_example = () => {
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement("form", {onSubmit:e => {
    e.preventDefault();
    transact([{":todo/name":e.target.elements[":todo/name"].value, ":todo/created-at":new Date}]);
    e.target.reset();
  }}, module$node_modules$react$index.createElement("input", {autoFocus:true, type:"text", name:":todo/name", placeholder:"What needs to be done?", autoComplete:"off", required:true}));
};
const TodoList$$module$js_gen$todo_example = () => {
  const [todos] = useQuery$$module$js_gen$todo_example(`[:find ?todo
      :where [?todo :todo/name]]`);
  return module$node_modules$react$index.createElement("div", null, todos.sort((a, b) => a.get(":todo/created-at") > b.get(":todo/created-at") ? -1 : 1).map(todo => module$node_modules$react$index.createElement(Todo$$module$js_gen$todo_example, {key:todo.get(":db/id"), todo})));
};
const Todo$$module$js_gen$todo_example = $jscomp$destructuring$var0 => {
  var {todo} = $jscomp$destructuring$var0;
  return module$node_modules$react$index.createElement("div", null, module$node_modules$react$index.createElement("hr", null), module$node_modules$react$index.createElement(TodoCheck$$module$js_gen$todo_example, {todo}), module$node_modules$react$index.createElement("span", {style:todo.get(":todo/completed?") ? {textDecoration:"line-through "} : null}, todo.get(":todo/name")), module$node_modules$react$index.createElement("br", null), module$node_modules$react$index.createElement(TodoProject$$module$js_gen$todo_example, 
  {todo}), " | ", module$node_modules$react$index.createElement(TodoOwner$$module$js_gen$todo_example, {todo}), module$node_modules$react$index.createElement("br", null), module$node_modules$react$index.createElement("small", {style:{color:"grey"}}, todo.get(":todo/created-at").toLocaleString()));
};
const TodoCheck$$module$js_gen$todo_example = $jscomp$destructuring$var1 => {
  var {todo} = $jscomp$destructuring$var1;
  const [transact] = useTransact$$module$js_gen$todo_example();
  return module$node_modules$react$index.createElement("input", {type:"checkbox", value:!!todo.get(":todo/completed?"), onChange:e => transact([{":db/id":todo.get(":db/id"), ":todo/completed?":e.target.checked}])});
};
const TodoProject$$module$js_gen$todo_example = $jscomp$destructuring$var2 => {
  var {todo} = $jscomp$destructuring$var2;
  const [transact] = useTransact$$module$js_gen$todo_example();
  const [projects] = useQuery$$module$js_gen$todo_example(`[:find ?project
      :where [?project :project/name]]`);
  return module$node_modules$react$index.createElement(module$node_modules$react$index.Fragment, null, module$node_modules$react$index.createElement("label", {htmlFor:"todo-project-" + todo.get(":db/id")}, "Project:"), module$node_modules$react$index.createElement("select", {name:"projects", id:"todo-project-" + todo.get(":db/id"), value:todo.get(":todo/project", ":db/id") || "", onChange:e => transact([{":db/id":todo.get(":db/id"), ":todo/project":Number(e.target.value)}])}, module$node_modules$react$index.createElement("option", 
  {value:""}), projects.map(project => module$node_modules$react$index.createElement("option", {key:project.get(":db/id"), value:project.get(":db/id")}, project.get(":project/name")))));
};
const TodoOwner$$module$js_gen$todo_example = $jscomp$destructuring$var3 => {
  var {todo} = $jscomp$destructuring$var3;
  const [transact] = useTransact$$module$js_gen$todo_example();
  const [users] = useQuery$$module$js_gen$todo_example(`[:find ?user
      :where [?user :user/name]]`);
  return module$node_modules$react$index.createElement(module$node_modules$react$index.Fragment, null, module$node_modules$react$index.createElement("label", {htmlFor:"todo-owner-" + todo.get(":db/id")}, "Owner:"), module$node_modules$react$index.createElement("select", {name:"users", id:"todo-owner-" + todo.get(":db/id"), value:todo.get(":todo/owner", ":db/id") || "", onChange:e => transact([{":db/id":todo.get(":db/id"), ":todo/owner":Number(e.target.value)}])}, module$node_modules$react$index.createElement("option", 
  {value:""}), users.map(user => module$node_modules$react$index.createElement("option", {key:user.get(":db/id"), value:user.get(":db/id")}, user.get(":user/name")))));
};
/** @const */ var module$js_gen$todo_example = {};
/** @const */ module$js_gen$todo_example.App = App$$module$js_gen$todo_example;

$CLJS.module$js_gen$todo_example=module$js_gen$todo_example;
//# sourceMappingURL=module$js_gen$todo_example.js.map
