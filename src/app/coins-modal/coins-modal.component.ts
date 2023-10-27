import {Component, Input} from '@angular/core';
import {ICoin} from "../coins/ICoin";

@Component({
  selector: 'app-coins-modal',
  templateUrl: './coins-modal.component.html',
  styleUrls: ['./coins-modal.component.css']
})
export class CoinsModalComponent {
  @Input() coinsModal: ICoin | undefined;
}
