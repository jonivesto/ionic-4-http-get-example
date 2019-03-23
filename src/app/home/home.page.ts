import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

/**
 * @author Joni-Pekka Vesto <https://www.jonivesto.com/>
 * @since 23-03-2019
 */

/** API url */
const URL = 'https://json.geoiplookup.io/api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private client: ClientService ) {}

  // Runs on page load
  ngOnInit(){
    // Params for the GET request
    var params = {};
    // Send GET request
    this.client.get(URL, null, params)
    .subscribe(data => {
      // Handle response data
      console.log(data);
    });
  }
}
