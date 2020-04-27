import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({templateUrl: 'home.component.html',
styleUrls: ['./home.component.css'],
selector :"home",

})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService,public router: Router,private route: ActivatedRoute) {
       // this.currentUser = JSON.parse(localStorage.getItem('jwt'));
    }

    ngOnInit() {
       // this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllUsers() 
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}