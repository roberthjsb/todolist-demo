export class TodoModel {
    text:string='';
    finalizada:boolean=false;
}

export const createTodo=(text:string)=>{
    const t=new TodoModel()
    t.text=text;
    return t;
}
