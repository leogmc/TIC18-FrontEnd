import { Component, OnInit } from '@angular/core';
import { FormService } from '../form-service.service';

@Component({
  selector: 'app-other-component',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  formData: any;
  formStatus?: string;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.formData.subscribe(data => {
      this.formData = data;
    });

    this.formService.formStatus.subscribe(status => {
      this.formStatus = status;
    });
  }
}
