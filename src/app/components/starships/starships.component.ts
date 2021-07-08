import { Component, OnInit } from '@angular/core';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships: any[]

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit(): void {
    this.starshipsService.getStarships().subscribe(res => {
      this.starships = res.results
    })
  }

}
