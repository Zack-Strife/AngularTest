import { Component} from '@angular/core';

// Récupérer la class config que l'on a crée
import { Config } from '../config'

@Component({
    selector: 'archives',
    templateUrl: 'app/partials/components/archives.component.html'
})
export class ArchivesComponent{ 
   title = Config.APP_TITLE;
    delete_btn = Config.DELETE_BTN;
}
