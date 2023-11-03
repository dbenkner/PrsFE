import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  config: any = null;

  constructor(
    private http: HttpClient
  ) { }
  getSettings(): void {
    console.debug("Reading config.json");
    this.http.get("./assets/config.json").subscribe(
      (cfg) => {
        console.debug("Returned config.json");
        this.config = cfg;
        console.debug("assets/config.json", this.config)
      }
    )
  }
}
