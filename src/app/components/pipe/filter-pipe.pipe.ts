import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipePipe implements PipeTransform {
  publish!:any
  transform(articles:any[], valuePublishFilter:string):any[]{
    if (!articles)  return []
    if(!valuePublishFilter) return articles
    return articles?.filter((article:any) => {
      this.publish = article.published.toString()
      return this.publish.includes(valuePublishFilter) 
    });
     
  }

}
