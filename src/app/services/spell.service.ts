import { Injectable } from '@angular/core'
import { ItemsMap } from '../interfaces/items-map.interface';
import * as _ from 'lodash'
import { SpellMap } from '../interfaces/spell-map.interface';
import * as spellData from '../data/spells.json'

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  allSpells: SpellMap[] = []

  createSpellMap() {
    spellData.forEach(item => {
      this.allSpells.push(item)
    })
  }

  getSpell(key) {
    return _.find(this.allSpells, { key: key }).spell
  }
}