import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectError,
  selectLoading,
  selectRecipeById,
} from '../../../store/recipe.selectors';
import { deleteRecipe, loadRecipeById } from '../../../store/recipe.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.html',
  imports: [AsyncPipe],
})
export class RecipeDetail implements OnInit {
  store = inject(Store);
  recipe$ = this.store.select(selectRecipeById);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.params['id'] || '0');
    if (id) {
      this.store.dispatch(loadRecipeById({ id }));
    }
  }

  delete(id: number) {
    this.store.dispatch(deleteRecipe({ id }));
  }
}
