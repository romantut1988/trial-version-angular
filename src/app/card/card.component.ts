import {Component, OnInit, Input} from '@angular/core'
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card
  @Input() index: number

  title = 'My Card Title'
  text = 'My sample text'

  cardDate: Date = new Date()
  textColor: any

  ngOnInit() {
  }

  changeTitle() {
    this.card.title = "Title has been changed!"
  }

  inputHandler(value: any) {
    this.title = value
  }

  changeHandler() {
    console.log(this.title)
  }
}
