import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = '';
  age: number;
  found: boolean;

  constructor(private httpClient: HttpClient) {}

  onNameKeyUp(event: any): void {
    this.name = event.target.value;
    this.found = false;
  }

  getProfile() {
    this.httpClient.get(`https://my-json-server.typicode.com/calebspain/json-faker-directory/profiles/?name=${this.name}`)
    .subscribe(
      (data: any[]) => {
        if (data.length) {
          this.age = data[0].age
          this.found = true;
        }
      }
    )
  }

  postProfile() {
    this.httpClient.post(`https://my-json-server.typicode.com/calebspain/json-faker-directory/profiles/`,
    {
      name: 'mark',
      age: 51
    })
    .subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  }

}
