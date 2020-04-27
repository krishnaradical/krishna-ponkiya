import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CommonService } from './common.service';
import { EHRUserResponseVO } from '../_models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthenticationService extends  CommonService {
    private currentUserSubject: BehaviorSubject<EHRUserResponseVO>;
    public currentUser: Observable<EHRUserResponseVO>;
    cachedRequests: Array<HttpRequest<any>> = [];

    public collectFailedRequest(request): void {
      this.cachedRequests.push(request);
    }
    constructor(private http: HttpClient) { 
        super();
        this.currentUserSubject = new BehaviorSubject<EHRUserResponseVO>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): EHRUserResponseVO {
        return this.currentUserSubject.value;
    }
    login(usernameOrEmail: string, password: string) {
        return this.http.post<any>(environment.apiURL+`/api/auth/signin`, { usernameOrEmail: usernameOrEmail, password: password })
            .pipe(map(ehrUserResponseVO => {
                // login successful if there's a jwt token in the response
                if (ehrUserResponseVO && ehrUserResponseVO.accessToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
               localStorage.setItem('jwt', ehrUserResponseVO.accessToken);
               localStorage.setItem('currentUser' ,JSON.stringify(ehrUserResponseVO));
               this.currentUserSubject.next(ehrUserResponseVO);
               this.setJwtValues();
            }
                return ehrUserResponseVO;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('jwt');
        this.currentUserSubject.next(null);
        localStorage.clear();
    }
}