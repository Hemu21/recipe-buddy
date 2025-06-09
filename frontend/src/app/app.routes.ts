import { Routes } from '@angular/router';
import { RecipeList } from './pages/recipes/recipe-list/recipe-list';
import { RecipeForm } from './pages/recipes/recipe-form/recipe-form';
import { RecipeDetail } from './pages/recipes/recipe-detail/recipe-detail';

export const routes: Routes = [
  {
    path: 'recipes',
    loadChildren: () => import('./models/recipes-routing.module').then(m => m.RecipesRoutingModule),
  },
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: '**', redirectTo: 'recipes' },
];
