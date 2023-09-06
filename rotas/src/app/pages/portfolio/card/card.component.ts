import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private parametrizador: ActivatedRoute) {

    // Criando parametros
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )

    // recuperando parametros
    this.parametrizador.queryParams.subscribe(
      res => console.log(res)
    )
   }

  ngOnInit(): void {
  }

}
