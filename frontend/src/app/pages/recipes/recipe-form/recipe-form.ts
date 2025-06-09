import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  addRecipe,
  loadRecipeById,
  updateRecipe,
} from '../../../store/recipe.actions';
import { selectRecipeById } from '../../../store/recipe.selectors';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.html',
  imports: [ReactiveFormsModule],
})
export class RecipeForm implements OnInit {
  fb = inject(FormBuilder);
  store = inject(Store);
  router = inject(Router);

  form: FormGroup;
  isEdit = false;
  recipeId?: number;

  constructor(private route: ActivatedRoute) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      ingredients: this.fb.array([], Validators.minLength(1)),
      instructions: ['', Validators.required],
      tags: [''],
    });
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.params['id'] || '0');
    if (id) {
      this.isEdit = true;
      this.recipeId = id;
      this.store.dispatch(loadRecipeById({ id }));
      this.store.select(selectRecipeById).subscribe({
        next: (recipe: Recipe | undefined) => {
          let res = recipe ?? null;
          if (res) {
            this.form.patchValue({
              title: res!.title,
              instructions: res!.instructions,
              tags: res!.tags,
            });
            console.log('Recipe loaded:', res);
            res!.ingredients.forEach((i: string) => this.addIngredient(i));
          }
        },
        error: (error) => {
          console.error('Error loading recipe:', error);
        },
      });
    } else {
      this.addIngredient();
    }
  }

  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient(value: string = '') {
    this.ingredients.push(this.fb.control(value, Validators.required));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  submit() {
    if (this.form.invalid) return;

    const recipe = {
      id: this.recipeId!,
      ...this.form.value,
    };

    if (this.isEdit) {
      this.store.dispatch(updateRecipe({ recipe }));
    } else {
      this.store.dispatch(addRecipe({ recipe }));
    }

    this.router.navigate(['/recipes']);
  }
}
