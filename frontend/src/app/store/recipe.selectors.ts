import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RecipeState } from './recipe.reducer';

export const selectRecipeState = createFeatureSelector<RecipeState>('recipe');

export const selectAllRecipes = createSelector(
  selectRecipeState,
  (state) => state.recipes
);
export const selectLoading = createSelector(
  selectRecipeState,
  (state) => state.loading
);
export const selectError = createSelector(
  selectRecipeState,
  (state) => state.error
);

export const selectRecipeById = createSelector(
  selectRecipeState,
  (state) => state.selectedRecipe
);

export const selectTotalRecipes = createSelector(
  selectRecipeState,
  (state) => state.totalRecipes
);
