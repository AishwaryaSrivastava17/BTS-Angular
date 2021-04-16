import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import {CreateService}from '../create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  bug:Bug=new Bug();
  bugArray:Bug[]=[];
  constructor(private createService:CreateService) { }
save(){
 const promise=this.createService.save(this.bug);
 promise.subscribe(response=> {
  console.log(response);
  alert('Bug Created')
  this.bugArray.push(Object.assign({}, this.bug));
},
error=> {
  console.log(error);
  alert('error happenned..')
})

}
  ngOnInit(): void {
  }

}
