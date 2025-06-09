import { createReducer, on } from '@ngrx/store';
import * as RecipeActions from './recipe.actions';
import { Recipe } from '../models/recipe.model';

export interface RecipeState {
  recipes: Recipe[];
  totalRecipes?: number;
  selectedRecipe: Recipe;
  loading: boolean;
  error: any;
}

const initialRecipe: Recipe = {
  id: 0,
  ingredients: [],
  instructions: '',
  title: '',
  tags: [],
};

export const initialState: RecipeState = {
  recipes: [],
  loading: false,
  error: null,
  totalRecipes: 0,
  selectedRecipe: initialRecipe
};

export const recipeReducer = createReducer(
  initialState,

  // Load Recipes
  on(RecipeActions.loadRecipes, (state) => ({ ...state, loading: true })),
  on(RecipeActions.loadRecipesSuccess, (state, { recipes }) => ({
    ...state,
    loading: false,
    recipes,
    totalRecipes: recipes.length,
    selectedRecipe: initialRecipe,
  })),
  on(RecipeActions.loadRecipesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Load Recipe by ID
  on(RecipeActions.loadRecipeById, (state) => ({ ...state, loading: true })),
  on(RecipeActions.loadRecipeByIdSuccess, (state, { recipe }) => ({
    ...state,
    loading: false,
    selectedRecipe: recipe,
  })),
  on(RecipeActions.loadRecipeByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Add Recipe
  on(RecipeActions.addRecipe, (state) => ({ ...state, loading: true })),
  on(RecipeActions.addRecipeSuccess, (state, { recipe }) => ({
    ...state,
    loading: false,
    recipes: [...state.recipes, recipe],
    totalRecipes: state.totalRecipes ? state.totalRecipes + 1 : 1,
    selectedRecipe: initialRecipe,
  })),
  on(RecipeActions.addRecipeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Update Recipe
  on(RecipeActions.updateRecipe, (state) => ({ ...state, loading: true })),
  on(RecipeActions.updateRecipeSuccess, (state, { recipe }) => ({
    ...state,
    loading: false,
    recipes: state.recipes.map((r) => (r.id === recipe.id ? recipe : r)),
    selectedRecipe: recipe,
  })),
  on(RecipeActions.updateRecipeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Delete Recipe
  on(RecipeActions.deleteRecipe, (state) => ({ ...state, loading: true })),
  on(RecipeActions.deleteRecipeSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    recipes: state.recipes.filter((r) => r.id !== id),
    totalRecipes: state.totalRecipes ? state.totalRecipes - 1 : 0,
    selectedRecipe: initialRecipe,
  })),
  on(RecipeActions.deleteRecipeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
