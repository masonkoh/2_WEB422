import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Position } from "./data/position";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PositionService {
  constructor(private http: HttpClient) {}

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(
      "https://nameless-harbor-59273.herokuapp.com/positions"
    );
  }
  savePosition(position: Position) {
    return this.http.put<any>(
      "https://nameless-harbor-59273.herokuapp.com/position/" + position._id,
      position
    );
  }

  getPosition(id: string): Observable<Position[]> {
    return this.http.get<Position[]>(
      "https://nameless-harbor-59273.herokuapp.com/position/" + id
    );
  }
}
