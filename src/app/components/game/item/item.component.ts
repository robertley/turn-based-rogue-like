import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/interfaces/item.interface';
import { Hero } from 'src/app/interfaces/hero.interface';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  
  @Input()
  item: Item
  
  @Input()
  index: number

  hero: Hero
  
  showInfoBox = false;
  
  minDamage;
  maxDamage;
  
  constructor(private itemService: ItemService, private heroService: HeroService) { }

  ngOnInit() {
    this.hero = this.heroService.hero
  }
  
  // TODO better algorithm
  calculateDamage() {
    console.log("c damage")
    if (this.item.type == "melee") {
      if (this.hero.stats.strength >= this.item.power) {
        this.minDamage = this.item.power + ((this.hero.stats.strength / (this.item.power * 2)) * this.item.power)
        this.maxDamage = this.minDamage * 1.25
      } else {
        this.minDamage = this.item.power - ((this.hero.stats.strength / (this.item.power * 2)) * this.hero.stats.strength)
        this.maxDamage = this.minDamage * 1.25
      }
    }
  }

}
