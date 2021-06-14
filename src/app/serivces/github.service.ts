import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {  }

  getGithubApi() {
    return this.http.get('http://api.github.com/repositories');
  }
}
     