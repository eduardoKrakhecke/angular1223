import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

export abstract class ResourceService<T> {

  constructor(
    private httpClient: HttpClient,
    private baseURL: string,
    private endpoint: string,
    private nextEndpoint: string) {
  }

  public create(resource: T ): Observable<T> {
    return this.httpClient
      .post<T>(`${this.baseURL}/${this.endpoint}`, resource)
      .pipe(map((result) => result));
  }

  public get(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(`${this.baseURL}/${this.endpoint}`)
      .pipe(map((result) => result));
  }

  public getListById(id: number): Observable<T[]> {
    return this.httpClient
      .get<T[]>(`${this.baseURL}/${this.endpoint}/${id}/${this.nextEndpoint}`)
      .pipe(map((result) => result));
  }

  public getById(id: number): Observable<T> {
    return this.httpClient
      .get<T>(`${this.baseURL}/${this.endpoint}/${id}`)
      .pipe(map((result) => result));
  }

  public update(resource: T, id: number): Observable<T> {
    return this.httpClient
      .put<T>(`${this.baseURL}/${this.endpoint}/${id}`, resource)
      .pipe(map((result) => result));
  }


  public delete(id: number): Observable<T> {
    return this.httpClient
      .delete<T>(`${this.baseURL}/${this.endpoint}/${id}`)
      .pipe(map((result) => result));
  }

}
