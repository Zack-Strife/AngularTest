import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Pour que ngModel soit reconnu : 
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
// Importer les nouveaux components
import { ArchivesComponent } from './components/archives.component'
import { TodoComponent } from './components/todo.component'
// On ajoute le routing
import { routing } from './app.routing' 

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, ArchivesComponent, TodoComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
