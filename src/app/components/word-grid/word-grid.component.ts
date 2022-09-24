import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'mautusse-word-grid',
  templateUrl: './word-grid.component.html',
  styleUrls: ['./word-grid.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class WordGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
