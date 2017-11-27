import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AnswersHeader } from '../classes/answers-header';

@Component({
  selector: 'app-header-list-detail',
  templateUrl: './header-list-detail.component.html',
  styleUrls: ['./header-list-detail.component.css']
})
export class HeaderListDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HeaderListDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AnswersHeader) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
