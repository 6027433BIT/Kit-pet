import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  // pics = ["","","","",""];
  // namepet = ["แมงมุม","งู","แมลงสาป","มด","หนู"];

  Pet={
    category: [
      {
        "pics": "https://4.bp.blogspot.com/-l-WoCuOQYdg/WivGQAxLQdI/AAAAAAAA0sY/ju7ECZTRzgEftnkZ692uy6uD14kfMFD-wCLcBGAs/s320/%25E0%25B9%2581%25E0%25B8%25A1%25E0%25B8%2587%25E0%25B8%25A1%25E0%25B8%25B8%25E0%25B8%25A1%25E0%25B8%259E%25E0%25B9%2580%25E0%25B8%2599%25E0%25B8%2588%25E0%25B8%25A31.jpg",
        "namepet": "แมงมุม"
      },
      {
        "pics": "http://www.zoothailand.org/zoo_office/fileupload/encyclopedia_file/604.JPG",
        "namepet": "งู"
      },
      {
        "pics": "https://www.scimath.org/images/uploads/picture_247255110410_1.jpg",
        "namepet": "แมลงสาป"
      },
      {
        "pics": "https://www.greenbestproduct.com/images/content/crop-1539447850638.jpg",
        "namepet": "มด"
      },
      {
        "pics": "https://itp1.itopfile.com/ImageServer/d243cd5f9f6b1fc7/285/0/iTopPlus259411528427.jpg",
        "namepet": "หนู"
      }
  ]
  }

  constructor() {

  }

}
