import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import * as fromActions from 'src/store/actions/user.actions';
import * as fromReducers from 'src/store/reducers/user.reducer';
import * as fromSelector from 'src/store/selectors/user.selectors';

@Injectable()
export class UserFacade {

    constructor(private store: Store<fromReducers.State>) { }

    get isLoading$(): Observable<boolean> {
        return this.store.select(fromSelector.getIsLoading);
    }
    get succeeded$(): Observable<boolean> {
        return this.store.select(fromSelector.getSucceeded);
    }
    get hasError$(): Observable<boolean> {
        return this.store.select(fromSelector.getHasError).pipe(filter((x) => x));
    }
    get error$(): Observable<any> {
        return this.store
            .select(fromSelector.getErrorMessage)
            .pipe(filter((x) => x));
    }

    get user$(): Observable<User> {
        return this.store.select(fromSelector.getUser).pipe(filter((x) => !!x));
    }

    loadUser() {
        this.store.dispatch(fromActions.getUser());
    }

}