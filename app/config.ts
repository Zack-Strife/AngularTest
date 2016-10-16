import { TodoList } from './app.component'

export class Config {
    // créer les constantes qui contiennent les titres en dur
    public static get APP_TITLE():string { return 'My first to do list ! '};
    // Créer la cnnstante qui contient notre to do list
    public static get TODOLIST(): [TodoList] {
        return [ 
            {id: 0, name: 'Manger'},
            {id: 1, name: 'Dormir'},
            {id: 2, name: 'Coder'}
        ]
    }
}