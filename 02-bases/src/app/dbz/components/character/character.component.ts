import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter;

  public character: Character = {
    name: '',
     power: 0
  };

  emitCharacter():void {

    //*Esta variable nos sirve para debuguear una funcionalidad
    //debugger;

    console.log(this.character);

    if ( this.character.name.length === 0 ) return;
    else if (this.character.power < 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };

  }


}
