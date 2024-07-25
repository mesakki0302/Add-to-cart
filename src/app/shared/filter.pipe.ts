import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],filterString:any,propname:string):any[] {
    const result:any=[];
    if(!value ||filterString===""||propname===""){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propname].trim().includes(filterString)){
        result.push(a)
      }
    })
    return result;
  }

}