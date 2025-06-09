import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTotalRecipes } from '../../store/recipe.selectors';
import { RouterModule } from '@angular/router';
import { loadRecipes } from '../../store/recipe.actions';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe,RouterModule],
  templateUrl: './header.html',
})
export class Header implements OnInit {
  title = 'Recipe Buddy';
  subtitle = 'Your recipe companion';
  store = inject(Store);
  totalRecipes$ = this.store.select(selectTotalRecipes);
  ngOnInit() {
    this.store.dispatch(loadRecipes());
  }
}
