import { Pipe, PipeTransform } from '@angular/core';
import { fadeInItems } from '@angular/material/menu';

@Pipe({
  name: 'newsfilter'
})
export class NewsfilterPipe implements PipeTransform {

  transform(items: any [], searchText: string): any [] {
    if (!items || !searchText) {
      return items;
    }


    if(!items){ 
     return items;
    }
    if (!searchText){
     return items;
    }


    console.log('taulukon 1, objekti merkkijonona:' + JSON.stringify(items[0]));
    console.log('hakusana:' + searchText);

    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      return it.Title.toLocaleLowerCase().includes(searchText)
       || it.PublishDate.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
       || it.HTMLLead.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    });
  }
}
