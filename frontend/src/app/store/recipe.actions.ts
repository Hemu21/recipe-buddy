import { createAction, props } from '@ngrx/store';
import { Recipe } from '../models/recipe.model';

// Action for load recipes
export const loadRecipes     = createAction('[Recipe] Load Recipes');
export const loadRecipesSuccess = createAction('[Recipe] Load Recipes Success', props<{ recipes: Recipe[] }>());
export const loadRecipesFailure = createAction('[Recipe] Load Recipes Failure', props<{ error: any }>());

// Action for load recipe by ID
export const loadRecipeById       = createAction('[Recipe] Load Recipe By ID', props<{ id: number }>());
export const loadRecipeByIdSuccess = createAction('[Recipe] Load Recipe By ID Success', props<{ recipe: Recipe }>());
export const loadRecipeByIdFailure = createAction('[Recipe] Load Recipe By ID Failure', props<{ error: any }>());

// Action for add recipe
export const addRecipe       = createAction('[Recipe] Add Recipe', props<{ recipe: Recipe }>());
export const addRecipeSuccess = createAction('[Recipe] Add Recipe Success', props<{ recipe: Recipe }>());
export const addRecipeFailure = createAction('[Recipe] Add Recipe Failure', props<{ error: any }>());

// Action for update recipe
export const updateRecipe       = createAction('[Recipe] Update Recipe', props<{ recipe: Recipe }>());
export const updateRecipeSuccess = createAction('[Recipe] Update Recipe Success', props<{ recipe: Recipe }>());
export const updateRecipeFailure = createAction('[Recipe] Update Recipe Failure', props<{ error: any }>());

// Action for delete recipe
export const deleteRecipe       = createAction('[Recipe] Delete Recipe', props<{ id: number }>());
export const deleteRecipeSuccess = createAction('[Recipe] Delete Recipe Success', props<{ id: number }>());
export const deleteRecipeFailure = createAction('[Recipe] Delete Recipe Failure', props<{ error: any }>());
