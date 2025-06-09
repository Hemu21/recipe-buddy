import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RecipeService } from '../services/recipe.service';
import * as RecipeActions from './recipe.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RecipeEffects {
  actions$ = inject(Actions);
  constructor(private recipeService: RecipeService) {}

  // Effect to load recipes
  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.loadRecipes),
      mergeMap(() =>
        this.recipeService.getAll().pipe(
          map((recipes) => RecipeActions.loadRecipesSuccess({ recipes })),
          catchError((error) => of(RecipeActions.loadRecipesFailure({ error })))
        )
      )
    )
  );

  // Effect to load a recipe by ID
  loadRecipeById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.loadRecipeById),
      mergeMap(({ id }) =>
        this.recipeService.getById(id).pipe(
          map((recipe) => RecipeActions.loadRecipeByIdSuccess({ recipe })),
          catchError((error) =>
            of(RecipeActions.loadRecipeByIdFailure({ error }))
          )
        )
      )
    )
  );

  // Effect to add a recipe
  addRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.addRecipe),
      mergeMap(({ recipe }) =>
        this.recipeService.add(recipe).pipe(
          map((newRecipe) =>
            RecipeActions.addRecipeSuccess({ recipe: newRecipe })
          ),
          catchError((error) => of(RecipeActions.addRecipeFailure({ error })))
        )
      )
    )
  );

  // Effect to update a recipe
  updateRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.updateRecipe),
      mergeMap(({ recipe }) =>
        this.recipeService.update(recipe).pipe(
          map((updatedRecipe) =>
            RecipeActions.updateRecipeSuccess({ recipe: updatedRecipe })
          ),
          catchError((error) =>
            of(RecipeActions.updateRecipeFailure({ error }))
          )
        )
      )
    )
  );

  // Effect to delete a recipe
  deleteRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.deleteRecipe),
      mergeMap(({ id }) =>
        this.recipeService.delete(id).pipe(
          map(() => RecipeActions.deleteRecipeSuccess({ id })),
          catchError((error) =>
            of(RecipeActions.deleteRecipeFailure({ error }))
          )
        )
      )
    )
  );
}
