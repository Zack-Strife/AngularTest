import { Component , OnInit} from '@angular/core';

// Récupérer la class config que l'on a crée
import { Config } from '../config'
export const ARCHIVELIST = [
    {}
];
@Component({
    selector: 'archives',
    templateUrl: 'app/partials/components/archives.component.html'
})
export class ArchivesComponent implements OnInit{ 
   title = Config.APP_TITLE;
   delete_btn = Config.DELETE_BTN;

// Création du tableau qui va recevoir les tâches archivées
   private archivelist: any;   
   ngOnInit() {
        this.archivelist = ARCHIVELIST;
   }
}
