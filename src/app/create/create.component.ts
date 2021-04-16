import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  bug:Bug=new Bug();
  constructor() { }

  ngOnInit(): void {
  }

}
