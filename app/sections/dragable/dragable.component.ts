import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragable',
  templateUrl: './dragable.component.html',
  styleUrls: ['./dragable.component.scss']
})

export class DragableComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $( document ).on( "mousemove", function( event ) {
    
        var cursorX = event.pageX;
    
        var leftrDistance = $( "#resized-container" ).offset().left;
    
        var result = cursorX - leftrDistance;
    
        if (result < 0) {
            result = 0
        }
    
      $("#resized").css("width", result);

    });

  }

}
