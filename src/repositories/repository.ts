import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';




export abstract class IRepository {

  constructor(protected http: HttpClient) { }


  protected get header() {
    return {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };
  }

  protected buildCompletePath(path: string): string {
    return `${environment.apiUrl}${path}`;
  }

  protected doGet<T>(apiUrl: string) {
    const path = this.buildCompletePath(apiUrl);
    return this.http.get<T>(path).pipe(
      map((response: any) => {
        if (response.ok) {
          return response.data;
        } else {
          throw new HttpErrorResponse({ error: response });
        }
      })
    );
  }

}
