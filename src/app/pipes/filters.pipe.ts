import { Pipe, PipeTransform } from '@angular/core';
import { todoT } from '../todos/models/todo.type';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(todo: todoT[], searchTerm: string): todoT[] {
   if(!searchTerm){
    return todo
   }
   const text = searchTerm.toLowerCase();
   return todo.filter((todo)=>{ todo.title.toLowerCase().includes(text)})
  };

}
