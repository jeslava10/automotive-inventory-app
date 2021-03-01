import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Merchandise } from 'src/app/models/merchandise.model';
import { MerchandiseService } from 'src/app/services/merchandise.service';
@Component({
  selector: 'app-edit-merchandise',
  templateUrl: './edit-merchandise.component.html',
  styleUrls: ['./edit-merchandise.component.css']
})
export class EditMerchandiseComponent implements OnInit {

  merchandise:Merchandise = this.actRoute.snapshot.params['merchandise'];
  Date = new Date();
  
  constructor(public MerchandiseService: MerchandiseService, 
    public actRoute: ActivatedRoute, 
    public router: Router) {
     this.router.getCurrentNavigation()?.extras.state
     }

  ngOnInit(): void {
    this.merchandise=history.state;
  }

  editMerchandise() {
    
    if(window.confirm('¿Esta seguro que decea actualizar el registro?')){
      this.MerchandiseService.update(this.merchandise).subscribe(data => {
        this.router.navigate(['/merchandise'])
      })
    }
   }
}
