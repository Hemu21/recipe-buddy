import { Observable } from "rxjs";
import { Recipe } from "../models/recipe.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private url = `${environment.API_URL}/recipes`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url);
  }
  getById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.url}/${id}`);
  }
  add(recipe: Recipe) {
    return this.http.post<Recipe>(this.url, recipe);
  }
  update(recipe: Recipe) {
    return this.http.put<Recipe>(`${this.url}/${recipe.id}`, recipe);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
