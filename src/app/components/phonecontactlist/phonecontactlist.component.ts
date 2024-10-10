import { Component } from '@angular/core';

@Component({
  selector: 'app-phonecontactlist',
  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent {
  phoneList: string[]=["Rico - 09223344556", "Sam - 09112233445"];
  phone: string="";

  addPhones(){
    if (this.phone){
      this.phoneList.push(this.phone);
      this.phone="";
    }
  }
  removeItem(index: number) {
    this.phoneList.splice(index, 1);
  }
}
