// Créer un model pour TodoList
export class TodoList {
    public id: number;
    public name: string;
// Création du constructeur
    constructor(data:any) {
        this.id = data.id;
        this.name = data.name;
    }
}