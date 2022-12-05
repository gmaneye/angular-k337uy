import {ChangeDetectionStrategy, Component} from '@angular/core';

interface SubItem {

}

interface Item {
  subitems: SubItem[]
}

@Component({
  selector: `my-app`,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  moreColumns = false

  get columns(): string[] {
    return !this.moreColumns ? ['a','b','c'] : ['a', 'c'];
  } 

  data: Item[] = [
    {subitems: [{}, {}, {}]},
    {subitems: [{}]},
    {subitems: [{}, {}]},
  ]
}
