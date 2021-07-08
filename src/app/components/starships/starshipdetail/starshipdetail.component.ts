import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starshipdetail',
  templateUrl: './starshipdetail.component.html',
  styleUrls: ['./starshipdetail.component.css']
})
export class StarshipdetailComponent implements OnInit {

  starship: any

  constructor(private route: ActivatedRoute, private starshipsService: StarshipsService) { }

  ngOnInit(): void {
    this.starshipsService.getDetail(this.route.snapshot.params.id).subscribe(res => {
      this.starship = res
    })
  }

}
