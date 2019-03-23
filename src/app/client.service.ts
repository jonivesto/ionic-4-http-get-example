import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * @author Joni-Pekka Vesto <https://www.jonivesto.com/>
 * @since 23-03-2019
 */

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  /*
  * Make GET request
  * @param url
  * @param sub
  * @param params
  * @return response object
  */
  get(url, sub, params): Observable<any> {
    // Add subdirectory to url
    if(sub) url += sub + '/';
    // Add params to the url
    if(params) url += this.buildParams(params);
    // Send
    return this.http.get(url);
  }

  /*
  * Convert parameters object to string
  * @param params
  * @return string of parameters
  */
  buildParams(params): string {
    // Read params object
    var keys = Object.keys( params );
    var values = Object.values( params );
    // Quit if there are no keys
    if(keys.length == 0) return '';
    // Build in this
    var stringParams = '?';
    // Build
    for(let i = 0; i < keys.length; i++){
      stringParams += keys[i] + '=' + values[i];
      // Add '&' between
      if(i != keys.length-1) stringParams += '&';
    }
    // Debug
    //console.log('Params: '+stringParams);
    return stringParams;
  }
}
