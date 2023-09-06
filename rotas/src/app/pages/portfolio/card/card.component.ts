import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private parametrizador: ActivatedRoute,
    private navegador: Router
    ) {

    // Criando parametros
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )

    // recuperando parametros SE ele existir
    this.parametrizador.firstChild?.queryParams.subscribe(
      res => console.log(res)
    )
   }

  ngOnInit(): void {

    // apos o componente ser iniciado ele volta pra home
    // setInterval(()=>{
    //   this.navegador.navigate(['/'])
    // }, 5000)
  }

}
