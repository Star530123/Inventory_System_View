import { ManuService } from './../../../../service/manu.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-manu',
  templateUrl: './new-manu.component.html',
  styleUrls: ['./new-manu.component.scss'],
})
export class NewManuComponent implements OnInit {
  form: FormGroup = new FormGroup({
    manuName: new FormControl(),
    nation: new FormControl(),
    currency: new FormControl(),
  });
  constructor(private location: Location, private manuService: ManuService) {}

  ngOnInit(): void {}

  addManu(): void {
    this.manuService.newManu(this.form.value).subscribe((result) => {
      if (result.manuSeq) {
        alert('新增成功!');
        this.location.back();
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
