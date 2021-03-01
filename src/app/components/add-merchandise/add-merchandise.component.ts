import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Merchandise } from 'src/app/models/merchandise.model';
import { MerchandiseUser } from 'src/app/models/merchandise-user.model';
import { MerchandiseService } from 'src/app/services/merchandise.service';

@Component({
  selector: 'app-add-merchandise',
  templateUrl: './add-merchandise.component.html',
  styleUrls: ['./add-merchandise.component.css']
})
export class AddMerchandiseComponent implements OnInit {

  @Input() merchandise:Merchandise = {productName: '', 
  amount: 0,
  admissionDate: new Date,
  id:0,
  modificationDate:new Date,
   idUser:{id:2, name:"Juan Eslava",age:27, admissionDate:new Date("2021-03-01"), idAppointment:{id:2, description:"Manager"}}}

  constructor(public MerchandiseService: MerchandiseService, public actRoute: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
  }

   saveMerchandise() {
      this.MerchandiseService.create(this.merchandise).subscribe(data => {
        this.router.navigate(['/merchandise'])
      })
  }
}
