import { Component, OnInit } from '@angular/core';
import { NgbDatepicker, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DomainService } from '@app/shared/service/domain/domain.service';
import { DomainType } from '@app/shared/model/domain/domain-type';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  stream: DomainType;
  code: string;
  type: DomainType;
  estimation: string;
  estimationType: DomainType;
  startdate: NgbDateStruct;
  enddate: NgbDateStruct;
  
  streamList : DomainType[];
  estimationTypeList: DomainType[];
  projectTypeList: DomainType[];
  // Testing purpose data
  domainURL = "assets/domain.json";

  constructor(private domainService: DomainService) { 
    this.streamList = [];
    this.estimationTypeList = [];
    this.projectTypeList = [];    
  }

  ngOnInit() {
    console.log("Admin Component ngOnInit start");
    this.domainService.getDomain(this.domainURL).subscribe((data: DomainType[]) => { 
      
      data.forEach(element => {
        console.log(element.name);
        if(element.type == 'STREAM'){
          this.streamList.push(element);
        }else if(element.type == 'ESTIMATIONTYPE'){
          this.estimationTypeList.push(element);      
        }else if(element.type == 'PROJECTTYPE'){
          this.projectTypeList.push(element);
        }
      });      
    });    
  }

  create(){

  }

  checkDuplication(){
    
  }

  cancel(){

  }
}
