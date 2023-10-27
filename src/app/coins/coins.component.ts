import {Component, OnInit} from '@angular/core';
import {CoinsService} from "./coins.service";
import {ICoin} from "./ICoin";

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  constructor(private allCoins: CoinsService) {
  }
  coins: ICoin[] = [];
  search: string = "";
  coinParent: ICoin | undefined;

  getCoins() {
    this.allCoins.fetchAll().subscribe(data =>{
      this.coins = data.data;
      return this.coins;
    })
  }

  ngOnInit() {
    this.getCoins();
  }

  selectCoin(coin: ICoin) {
    this.coinParent = coin;
  }

}
