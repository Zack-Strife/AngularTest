import { Component,  OnInit } from '@angular/core';
// Récupérer la class config que l'on a crée
import { Config } from './config'
// On importe le model de données
import { TodoList } from './dataModel/Todo.data.model'

@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/app.component.html'
})
export class AppComponent {
    title = Config.APP_TITLE;
    delete_btn = Config.DELETE_BTN;
    add_btn = Config.ADD_BTN;
    sub_title = Config.APP_SUBTITLE;
    //Créer la variable qui va contenir le tableau de la todo list, puis l'initialiser avec le ngOnInit au lancement de l'application
    private list: any;
    newTodo: any;

    DeleteTodo(index:any) {
        // Retire un élément du tableau
        this.list.splice(this.list.indexOf(index), 1);
    }
    // Créer une fonction qui va reset l'input 
    resetInput() {
        this.newTodo = {name: ""}
    }
    // Créer la fonction qui va ajouter l'item au tableau 
    addNewTodo() {
        this.list.push(this.newTodo);
        this.resetInput();
    }
    // Configure la variable list et met le reset input au lancement, ce qui initialise la variable newTodo
     ngOnInit() {
        this.list = Config.TODOLIST;
        this.resetInput();
    }
}
