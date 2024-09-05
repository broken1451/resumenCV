import { Component, inject, OnInit } from '@angular/core';
import { AboutService } from '../../../services/about.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit{

  public aboutService = inject(AboutService);
  
  ngOnInit(): void {
  
  }

  myFunction() {

 

  // Get the text from the span
    var copyText: string = (document.getElementById("myInput") as HTMLElement).innerText;
  
    // Create a temporary input element
    var tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = copyText;
    
    // Select the text inside the temporary input element
    tempInput.select();
    
    // Copy the text inside the temporary input element
    navigator.clipboard.writeText(tempInput.value).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Copied " + copyText + " to clipboard",
        showConfirmButton: false,
        timer: 1500
      });
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  
    // Remove the temporary input element
    document.body.removeChild(tempInput);
  }

}
