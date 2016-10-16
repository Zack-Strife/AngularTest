import { TodoList } from './dataModel/Todo.data.model'

export class Config {
    // créer les constantes qui contiennent les titres en dur
    public static get APP_TITLE():string { return 'My first to do list ! '};
    public static get DELETE_BTN():string { return 'Supprimer'};
    public static get ADD_BTN():string { return 'Ajouter une tâche'};
    public static get APP_SUBTITLE():string { return 'Ajoute une tâche a faire dans la liste!'};
    // Créer la cnnstante qui contient notre to do list
    public static get TODOLIST(): [TodoList] {
        return [ 
            {id: 0 ,name: 'Manger'},
            {id: 1 ,name: 'Dormir'},
            {id: 2,name: 'Coder'}
        ]
    }
}