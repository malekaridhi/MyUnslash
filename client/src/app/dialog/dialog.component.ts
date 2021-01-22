import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ServicesService , ImageResults } from '../services.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @ViewChild("fileInput") fileInput: ElementRef;
  loading: boolean = false;
  valid: boolean = false;
  message: string = "";
  Image: File
  constructor(
    private ServicesService: ServicesService,
  ) { }

  ngOnInit(): void {
  }
  onFileChange(event) { //Method to set the value of the file to the selected file by the user
    this.Image = event.target.files[0]; //To get the image selected by the user
    this.valid = true;
 }

  onSubmit(event) { //Method to send the request to the server
    var image = new FormData(); //FormData creation
    image.append('Imagefile', this.Image); //Adding the image to the form data to be sent
    this.ServicesService //Sending the rquest from the service function
      .sendimage(image)
      .subscribe((res: any) => {
        console.log(res);
     });

   this.loading = true;
   setTimeout(() => {
     this.loading = false;
   }, 1000);

   this.message = "Uploaded"; //Message to be viewed in App page
 }

  clearFile() { // Method to clear the selected file
    this.valid = false;
    this.message = "Cleared";
   this.fileInput.nativeElement.value = "";
 }

}
