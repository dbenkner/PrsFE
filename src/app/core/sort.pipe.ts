import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(sortedCol:any[], sort:string = "id", sortAsc:boolean): any[] {
    const compareFn = (a:any,b:any):number => {
      if (typeof sortedCol === 'undefined' || sortedCol === null) return 0;
      console.log(a.typeof)
      let x:any = typeof a[sort] === "number"? a[sort]: a[sort].toString().toLowerCase();
      let y:any = typeof b[sort] ===  "number"? b[sort]: b[sort].toString().toLowerCase();
      if (a === b) return 0;
      if (sortAsc) {
        return (x < y ? -1 : 1);
      }
      else {
        return (x < y ? 1 : -1);
      }
    }
    return sortedCol.sort(compareFn);
  }
}
