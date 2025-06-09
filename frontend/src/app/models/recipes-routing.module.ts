import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeList } from '../pages/recipes/recipe-list/recipe-list';
import { RecipeDetail } from '../pages/recipes/recipe-detail/recipe-detail';
import { RecipeForm } from '../pages/recipes/recipe-form/recipe-form';

const routes: Routes = [
  { path: '', component: RecipeList },
  { path: 'add', component: RecipeForm },
  { path: ':id', component: RecipeDetail },
  { path: ':id/edit', component: RecipeForm },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
