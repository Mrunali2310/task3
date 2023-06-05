import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task3';
  UserData = [
    {Name:'Eneh Mercy',StudentID:'703703',Emailaddress:'michelle.rivera@example.com',Class:'J SS 2',Gender:'Female',image1:'assets/Ellipse 14.png'},
    {Name:'Marvin McKinney',StudentID:'877037',Emailaddress:'kenzi.lawson@example.com',Class:'JSS 3',Gender:'Female',image1:'assets/Ellipse 14 (1).png'},
    {Name:'Brooklyn Simmons',StudentID:'370357',Emailaddress:'nathan.roberts@example.com',Class:'SS 3',Gender:'Female',image1:'assets/Ellipse 14 (2).png'},
    {Name:'Dianne Russell',StudentID:'870316',Emailaddress:'felicia.reid@example.com',Class:'SS 3',Gender:'Male',image1:'assets/Ellipse 14 (3).png'},
    {Name:'Cody Fisher',StudentID:'547030',Emailaddress:'tim.jennings@example.com',Class:'SS 3',Gender:'Female',image1:'assets/Ellipse 14 (4).png'},
    {Name:'Devon Lane',StudentID:'970322',Emailaddress:'debra.holt@example.com',Class:'JSS 3',Gender:'Female',image1:'assets/Ellipse 14 (5).png'},
    {Name:'Ronald Richards',StudentID:'703703',Emailaddress:'michelle.rivera@example.com',Class:'J SS 2',Gender:'Female',image1:'assets/Ellipse 14 (6).png'},
    {Name:'Guy Hawkins',StudentID:'270374',Emailaddress:'alma.lawson@example.com',Class:'JSS 1',Gender:'Male',image1:'assets/Ellipse 14 (7).png'},
    {Name:'leanor Pena',StudentID:'570356',Emailaddress:'jackson.graham@example.com',Class:'JSS 5',Gender:'Female',image1:'assets/Ellipse 14 (8).png'},
    {Name:'Savannah Nguyen',StudentID:'703703',Emailaddress:'michelle.rivera@example.com',Class:'J SS 2',Gender:'Female',image1:'assets/Ellipse 14 (9).png'},
    
    
  ]
  names: string[] = ['enech mercy','Marvin McKinney','Brooklyn Simmons','Dianne Russell','Cody Fisher','Devon Lane','Ronald Richards','Guy Hawkins','leanor Pena',
    
  ];
  searchTerm: any;

  shouldHighlightName(name: string): boolean {
    return name.toLowerCase().includes(this.searchTerm.toLowerCase());
  }
  searchQuery: string = '';

  selectedImage: any;
 

  showImageInfo(image: any) {
    this.selectedImage = image;
  }
  selectedRowIndex: number | undefined; 

  highlightLine(index: number) {
    this.selectedRowIndex = index;
  }

}

