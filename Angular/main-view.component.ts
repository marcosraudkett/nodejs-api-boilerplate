import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import {ItemComponent} from '../../interfaces/item-component';

const endpoint = 'http://node.marcosraudkett.com:8083/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})


export class MainViewComponent implements OnInit {
  components: object[];
  todo: string[];
  board: ItemComponent[];
  template ="Template";
  boardMain = "Board";
  componentsTitle = "Components";
  itemPrompt: string;
  idForBoard: number;
  elements:any = [];

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getElementsAPI(): Observable<any> {
    return this.http.get(endpoint + 'elements').pipe(
      map(this.extractData));
  }

  getElements() {
    this.elements = [];
    this.getElementsAPI().subscribe((data: {}) => {
      console.log(data.data);
      this.elements = data.data;
      restComponents = data.data;
      return this.elements;
    });
  }


  ngOnInit() {
    
    this.getElements();

/*
    console.log(restComponents);
    

    for (var i in restComponents) {
        if (restComponents.hasOwnProperty(i)) {
            // Code and stuff
            //restComponents.push(i);
            console.log("Works");
            i++;
        }
    }
*/
    /* tähän pitäisi saada ne elementit */
    this.components = this.elements;
  

  this.todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  this.board = [
    
  ];
  
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      
      
    }
  }
  noReturnPredicate() {
    return false;
  }
  addItem(itemPrompt: string): void{

    this.board.push({
      
        'id':1,
        'title':'Title',
        'prompt':this.itemPrompt,
        'width':4,
        'colwidths':'',
        'main':true,
        'editing':false
      
    })
  }
  
  editItem(item:ItemComponent): void{
    item.editing=true;
  }
  deleteItem(id:number){
    console.log("deleting id: "+id);
    this.board = this.board.filter(board=>board.id!==id);
  }
}
