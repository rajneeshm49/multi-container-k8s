import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'abc';
  title = 'client';

  blog = {hero: ''};
  error_msg = '';
    
  constructor(private homeService: HomeService) { }

  onSubmit(): void {
    this.homeService.displayHomePage(this.blog).subscribe(
      res => {
        if(res.success === false) {
          this.error_msg = 'Some error occurred while creating blog. Please try again later';
        } else {
          //this.router.navigate(['/']);
          console.log(res);
          this.title = res.mykey;
        }
      }
    );
  }
}
