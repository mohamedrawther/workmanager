import { Component, OnInit, Input } from '@angular/core';
import { DomainService } from '@app/shared/service/domain/domain.service';
import { DomainType } from '@app/shared/model/domain/domain-type';

@Component({
  selector: 'app-domain',
  template: `     
    <select [(ngModel)]="stream2" name="stream2" class="mb-3 custom-select form-control input-group-text" id="inputGroupSelect02">
      <option *ngFor="let strm of streamList" [ngValue]="strm">{{strm.name}}</option>                     
    </select>    
  `,
  styles: []
})
export class DomainComponent implements OnInit {

  streamList : DomainType[];
  estimationTypeList: DomainType[];
  projectTypeList: DomainType[];

  // Testing purpose data
  domainURL = "assets/domain.json";

  @Input()
  domainName: string;

  constructor(private domainService: DomainService) { 
    this.streamList = [];
    this.estimationTypeList = [];
    this.projectTypeList = [];
    this.domainName='';
  }

  ngOnInit() {   
  }

}
