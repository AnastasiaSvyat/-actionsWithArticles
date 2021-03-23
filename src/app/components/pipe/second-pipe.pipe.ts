import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'secondPipe',
  pure: false

})
export class SecondPipePipe implements PipeTransform {
  transform(articles:any, value:any):any{
    if(!value) return articles
    return articles?.filter((article:any) => {
    return article.categoryId.includes(value)
  });
  }
}
