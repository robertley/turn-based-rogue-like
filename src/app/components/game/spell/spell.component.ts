import { Component, OnInit, Input } from '@angular/core';
import { Spell } from 'src/app/interfaces/spell.interface';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent implements OnInit {
  
  @Input()
  spell: Spell
  
  @Input()
  scene: number
  
  disabled: boolean

  constructor() { }

  ngOnInit() {
    if (this.scene == 0) {
      this.disabled = true;
    } else if (this.scene == 2) {
      this.disabled = false
    } else if (this.scene == 1) {
      if (this.spell.type != "healing") {
        this.disabled = true
      } else {
        this.disabled = false
      }
    }
  }

}
