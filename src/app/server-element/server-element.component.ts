import { Component, 
  Input, 
  OnInit, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input('srvElement')  element:{ type: string, name: string,  content: string};
  @Input() name:string;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('paragraph') paragraph:ElementRef;

  constructor() { 
      console.log('constructor called');
  }

  /*This is the only lifecycle methods that takes in an arument*/
  /*In myView it tracts the changes in the component properties*/
  ngOnChanges(changes:SimpleChanges){
     console.log("ngOn changes");
     console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit Called");
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
    console.log(`Paragraph: ${this.paragraph.nativeElement.textContent}`);

  }

  //Called everytime there is a change detection
  //if you click a button it is called so as to detect whether there was a change
  ngDoCheck(){
    console.log("ngDoCheck!!!");
  }

 //AfterContent Init
 //called after we inject content via ngcontent
 ngAfterContentInit(){
   console.log("ngAfterContentInit");
 }

 //called after DO CHECKED
 ngAfterContentChecked(){
  console.log("ngAfterContentChecked");
 }

 ngAfterViewInit(){

  console.log("ngAfterViewInit");
  console.log(`Text Content: ${this.header.nativeElement.textContent}`);
  console.log(`Paragraph: ${this.paragraph.nativeElement.textContent}`);

 }

 ngAfterViewChecked(){
  console.log("ngAfterViewChecked");
 }

 ngOnDestroy(){
  console.log("ngOnDestroy");
 }

 
}
