import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  constructor(private httpClient: HttpClient) { 
  }

  getResults (keyword: String) {
    return this.httpClient.get(`https://devapi.luckytrip.co.uk/api/2.0/top_five/destinations?city_or_country&search_value=${keyword}`)
  }

  getDestinationInformation (destinationId: number) {
    return this.httpClient.get(`https://devapi.luckytrip.co.uk/api/2.0/top_five/destination?id=${destinationId}`)
  }
}
