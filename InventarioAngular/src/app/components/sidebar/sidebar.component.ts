import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public searchstring: string;
  constructor(
    private _router: Router,
    private _activateR: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  Search(){
    //console.log('Here!');
    if (this.searchstring || this.searchstring == '') {
      this._router.navigate(['/buscar/', this.searchstring])
    }
  }
}
