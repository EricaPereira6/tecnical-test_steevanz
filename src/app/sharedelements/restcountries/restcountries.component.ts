import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restcountries',
  templateUrl: './restcountries.component.html',
  styleUrls: ['./restcountries.component.scss']
})
export class RestcountriesComponent {
  countries: Country[] = [];
  selectedCountry : string = '';

  constructor(private http: HttpClient) {
    this.http.get<Country[]>('https://restcountries.com/v3.1/all')
    .subscribe((response: Country[]) => {
      response.forEach(el=>
        this.countries.push(el));
    });
  }
}

interface Country{
  name: CountryName;
}
interface CountryName{
  common: string;
}
