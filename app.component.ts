import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { clearInterval } from 'node:timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Loto srečka';

  tableData: number[][]=[]; //ime tabele in kaj shranjuje

  tabela(): number[][] {
    const arr: number[][] = Array.from({ length: 5 }, () => Array(5));
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let stevilo = Math.floor(Math.random() * (45 - 7 + 1)) + 7;

        while (arr[i].includes(stevilo)) { // pregleduje ali je v tej vrsti tabele že to število, če je true, potem naredi novo, ce ke false gre dalje
          stevilo = Math.floor(Math.random() * (45 - 7 + 1)) + 7;
        }

        arr[i][j] = stevilo;
        console.log(arr[i][j]);
      }
 
    }
    return arr;
  }



//generiranje cifer

  vrednost:any =20;
  vrednost2:any =7;
  vrednost3:any =14;
  vrednost4:any =17;
  vrednost5:any =19;
  vrednost6:any =23;
  vrednost7:any =26;
  
  stevila: string[][] = [];

  saveNumbers() {
    console.log('Button clicked!');
    const tabelica: number[] = [this.vrednost,
       this.vrednost2, 
       this.vrednost3, 
       this.vrednost4,
       this.vrednost5,
       this.vrednost6,
       this.vrednost7].filter(val => val !== null) as number[];
  
  
   
    for (let i = 0; i < 7; i++) {
      this.stevila[i] = Array(7).fill(''); 
  
      for (let j = 0; j <  this.stevila[i].length; j++) {
        this. stevila[i][j] = tabelica[i] + " " + tabelica[j];

        if(i==j /*|| i==j+1 || i==j+2 || i==j+3 || i==j+4  || i==j+5 || i==j+6*/ ) //to kar je v komentarju je lahko tudi izven, vendar pa tabela ne izgeda vec lepo. Je pa rešitev pravilna
          this. stevila[i][j] = " \\  \\ ";
          

      }//druga

    }//prva
  
    
    return this.stevila;
  }

   ngOnInit(): void {
    this.tableData = this.tabela(); //shrani rezultat tabele
    this.stevila = this.saveNumbers(); //izvede celotno funkcijo
    }

}
