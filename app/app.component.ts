import { Component,  OnInit } from '@angular/core';
// Récupérer la class config que l'on a crée
import { Config } from './config'

// Créer un model pour TodoList
export class TodoList {
    public id: number;
    public name: string;
}
@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/app.component.html'
})
export class AppComponent {
    title = Config.APP_TITLE;
    //Créer la variable qui va contenir le tableau de la todo list, puis l'initialiser avec le ngOnInit au lancement de l'application
    private list: any;

    ngOnInit() {
        this.list = Config.TODOLIST;
    }
}
