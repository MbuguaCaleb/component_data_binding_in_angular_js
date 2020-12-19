import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  //events props passed to the component
  @Output() serverCreated =new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated')blueprintCreated =new EventEmitter<{serverName:string, serverContent:string}>();

  //newServerName = '';
 // newServerContent = '';

 @ViewChild('serverContentInput') serverContentInput:ElementRef;

  constructor() { }

  ngOnInit(): void {
 
  }

  onAddServer(nameInput:HTMLInputElement)
  {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName:nameInput.value, 
      serverContent:this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement){
    this.blueprintCreated.emit({
      serverName:nameInput.value, 
      serverContent:this.serverContentInput.nativeElement.value,
    });
  }
  
}
