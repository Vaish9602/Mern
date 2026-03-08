import {todo} from "./db.mjs";
const router=Router();
router.get("/",(req,res)=>{
    res.json(todo)
})
router.post("/",(req,res)=>{
    const {title} = req.body;
    const createdTodo = createNewTodo(title)
    res.status(201).send(createdTodo);
})
function createNewTodo(title){
    const newTodo={
        id:crypto.randomUUID(),
        title,
        completed:false,
        createDate: new Date().toISOString()
    }
    todo.push(newTodo);
    return newTodo;
}
router.patch("/:id",(req,res)=>{
    const updatedTodoId=updateTodo(req.params.id,req.body);
    res.send(updatedTodoId);
})
function updateTodo(todoId,updatedTodo){
    let existingTodoIndex=todo.findIndex(todo=>todo.id== todoId);
    todo[existingTodoIndex]={...todo[existingTodoIndex],...updatedTodo};
    return todo[existingTodoIndex].id

}
router.delete("/:id", (req, res) => {
  const deletedId = deleteTodo(req.params.id);
  res.send(deletedId)

  
});
function deleteTodo(todoId) {

  let index = todo.findIndex(todo => todo.id == todoId);

  if (index === -1) {
    return "Todo not found";
  }

  todo.splice(index, 1);

  return "Todo deleted with id " + todoId;
}
export default router;