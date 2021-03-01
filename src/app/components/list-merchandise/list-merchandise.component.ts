import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Merchandise } from 'src/app/models/merchandise.model';
import { MerchandiseService } from 'src/app/services/merchandise.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-list-merchandise',
  templateUrl: './list-merchandise.component.html',
  styleUrls: ['./list-merchandise.component.css']
})
export class ListMerchandiseComponent implements OnInit {

  listMerchandises: Merchandise[] = [];
  listMerchandisesFilter: Merchandise[] = [];
  filterMerchandise: string = "";
  constructor(private MerchandiseService: MerchandiseService, public actRoute: ActivatedRoute,
    public router: Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getMerchandise();
  }

  getMerchandise() {
    this.MerchandiseService.getAll().subscribe(data => {
      this.listMerchandises = data
      this.listMerchandisesFilter = data
    });
  }

  filterTable() {
    !this.filterMerchandise.length ? this.listMerchandises = this.listMerchandisesFilter : ''


    this.listMerchandises = this.listMerchandises.filter((item) => {
      console.log(this.datepipe.transform(item.admissionDate, 'yyyy-MM-dd'))
      if (item.productName.toLocaleLowerCase().includes(this.filterMerchandise.toLocaleLowerCase())) {
        return item;
      }else if (item.idUser.name.toLocaleLowerCase().includes(this.filterMerchandise.toLocaleLowerCase())) {
        return item;
      }else if (this.datepipe.transform(item.admissionDate, 'yyyy-MM-dd')?.toString().includes(this.filterMerchandise)) {
        return item;
      }
      return null;

    });
  }

  deleteMerchandise(merchandise: Merchandise) {
    this.MerchandiseService.delete(merchandise).subscribe(data => {
    });
    this.ngOnInit();
  }
}
