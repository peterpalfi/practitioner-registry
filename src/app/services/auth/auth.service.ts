import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    @Output() authStatus: EventEmitter<any> = new EventEmitter();

    constructor(private afAuth: AngularFireAuth) { }

    async logout(): Promise<void> {
        return this.afAuth.signOut().then(res =>
            this.authStatus.emit(false));
    }

    async login(email: string, password: string): Promise<void> {
        return this.afAuth.signInWithEmailAndPassword(email, password).then(res =>
        this.authStatus.emit(true));
    }

    authenticated(): boolean {
        return this.afAuth.authState !== null;
    }

    currentUserObservable(): any {
        return this.afAuth.authState;
    }
}