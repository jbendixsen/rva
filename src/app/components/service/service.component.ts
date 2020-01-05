import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  text: string;

  @Input()
  image: string;

  constructor() { }

  ngOnInit() {
  }

}
