import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DetailsComponent } from "./details/details.component";
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { DetaillsComponent } from './detaills/detaills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CommonModule, RouterModule, ProductsListComponent, DetailsComponent, DetaillsComponent]
})
export class AppComponent {
  title = 'prod-app';
  base64: any;


  onInputChanged(event: any) {
    let targetEvent = event.target;
    let file: File = targetEvent.files[0]
    let fileReader: FileReader = new FileReader();
    fileReader.onload = (e) => {
      this.base64 = fileReader.result;
    }
    fileReader.readAsDataURL(file);
    console.warn(this.base64)
  }
}
