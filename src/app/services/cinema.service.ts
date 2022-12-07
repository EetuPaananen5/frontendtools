import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import{parseString} from "xml2js"


@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private httpClient: HttpClient) { }
  url: string = "https://www.finnkino.fi/xml/News/";
  testData = [{ 'Title': 'Ensi-Palm Springs', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6124/PalmSprings_550.jpg' },
  { 'Title': 'Ensi-ilta: Karjamäen joulu', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6123/JulPaKutoppen_550.jpg' }];

  newsData = this.testData;

  getData(): Observable<any> {
    // pipe kokoaa operaattorit yhteen (map, filter, etc)
    // map operaattori, tyypin muuttamiseen (esim. response => json-tyyppiseksi)
    // filter operaattori, suodatus annetun ehdon mukaan
    return this.httpClient.get(this.url, { responseType: 'text' })
      .pipe(map(response => {
       let newsData: any[] = [];
        parseString(response, {
          trim:true,
          explicitArray: true,
          mergeAttrs: true,

        }, function (err:any, result: any){
          console.log('getJsonData .......'+ JSON.stringify(result.News.NewsArticle));
          newsData= result.News.NewsArticle
        });


        console.log('getXMLData...' + response);
        
        // tässä muunnetaan xml-data json muotoon
        return newsData;
      }));
  }


  getTestData(): Observable<any> {
    let newsData = [];
    return of(this.testData);
  }
}
