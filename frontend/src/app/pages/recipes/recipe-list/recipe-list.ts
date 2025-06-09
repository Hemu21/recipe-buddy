import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAllRecipes,
  selectError,
  selectLoading,
} from '../../../store/recipe.selectors';
import { deleteRecipe, loadRecipes } from '../../../store/recipe.actions';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  imports: [RouterModule, AsyncPipe],
  templateUrl: './recipe-list.html',
})
export class RecipeList implements OnInit {
  store = inject(Store);
  recipes$ = this.store.select(selectAllRecipes);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  ngOnInit() {
    this.store.dispatch(loadRecipes());
  }

  delete(id: number) {
    this.store.dispatch(deleteRecipe({ id }));
  }
}
