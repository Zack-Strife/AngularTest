// import des class (core) nécessaire à la création des routes
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import des composants de l'application
import { TodoComponent } from './components/todo.component';
import { ArchivesComponent } from './components/archives.component';

const appRoutes: Routes = [
  // Définition des route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'todo',
    component: TodoComponent
  },

  {
    path: 'archives',
    component: ArchivesComponent
  }
];

// Export de la class du module de routing
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);