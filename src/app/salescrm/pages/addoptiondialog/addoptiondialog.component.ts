import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addoptiondialog',
  templateUrl: './addoptiondialog.component.html',
  styleUrls: ['./addoptiondialog.component.css']
})
export class AddoptiondialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


row3 = [
  {
    id : '',
  }
];



addTable3() {
  const obj = {
    id: '',
  }
  this.row3.push(obj)
}



deleteRow3(x){
  var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
    this.row3.splice(x, 1 );
  }   
} 


}
