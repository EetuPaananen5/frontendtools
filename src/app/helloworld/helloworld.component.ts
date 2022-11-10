import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']


})
export class HelloworldComponent implements OnInit {

  etunimi: string = " ";

  title: string = "Harjoittelua"

  itemImageUrl = 'https://cdn.pixabay.com/photo/2016/01/26/00/26/canazei-1161799_960_720.jpg'

  constructor() {

  }

  ngOnInit(): void {
  }

  changeimg() {
    if (this.itemImageUrl == 'https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg') 
    {
      this.itemImageUrl = 'https://cdn.pixabay.com/photo/2016/01/26/00/26/canazei-1161799_960_720.jpg';
    } else 
    {
      this.itemImageUrl = 'https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg';
    }
   

  }

}
