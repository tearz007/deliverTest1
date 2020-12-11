import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  constructor() { }
  token(){
    return    mapboxgl.accessToken =""
  }
}
