import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div style="text-align:center">  
  <div style="color:blue">
    <h1>
      Marvellous Infosystems
    </h1>
    <h2>
      Educating for better tomorrow.
    </h2>
  </div>
    <h1>
      Welcome to {{ title }}!
    </h1>
</div>`,  //inline

//templateUrl: './app.component.html'
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystems';
}
