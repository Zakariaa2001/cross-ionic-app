import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  
  keyword!:string;
  currentPage:number=1;
  size:number=10;
  dataImages: any[] = [];
  totalPages!:number;
  

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  onLoadImages(){
    this.dataImages = [];
    this.currentPage = 1;
    this.totalPages =0;
    this.doSearch();
  }

  doSearch() {
    this.httpClient.get<ApiResponse>('https://pixabay.com/api/?key=41660342-81cc94bd7c50fe22dce799108&q=' + this.keyword + '&per_page=' + this.size + '&page=' + this.currentPage)
    .subscribe(
      (data) => {
        data.hits.forEach(image => {
          this.dataImages.push(image)
          this.totalPages = data.totalHits/this.size;
        })
      },
      (err) => {
        console.log(err);
      }
    );

  }

  onIonInfinite(event:any) {
    if (this.currentPage<this.totalPages) {
      console.log(this.currentPage+"/"+this.totalPages)
      ++this.currentPage;
      this.doSearch();
      event.target.complete()
    }
    if(this.currentPage>=this.totalPages) {
      event.target.disabled = true;
    }
  }

}
interface ApiResponse {
  totalHits: number;
  hits: any[];
}
