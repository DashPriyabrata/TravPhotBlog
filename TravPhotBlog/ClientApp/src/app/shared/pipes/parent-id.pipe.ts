import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parentId'
})
export class ParentIdPipe implements PipeTransform {

  transform(items: any[], id: number = 0): any {
    return items.filter(i => i.ParentId === id);
  }

}
