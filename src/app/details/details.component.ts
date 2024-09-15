import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  data
  constructor(private router : Router, private activatedRoute : ActivatedRoute){}
  ngOnInit() {
    /* this.data = this.router.getCurrentNavigation().extras?.state; */
    this.data = history.state;
    console.warn(this.data)
  }

}
