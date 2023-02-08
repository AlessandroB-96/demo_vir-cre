import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  display: boolean = true;

mostraSidebar(){
    if(document.getElementById('sidebar')?.classList.contains("visibility")){
        document.getElementById('sidebar')?.classList.add("removeVisibility");
        document.getElementById('sidebar')?.classList.remove("visibility");
        document.getElementById("table")?.classList.add("maxWidth");
        document.getElementById("table")?.classList.remove("startingWidth");
        document.getElementById("dettaglio")?.classList.add("marginDettaglio");
        // document.getElementById("dettaglio")?.classList.remove("startingWidth");
    }
    else{
        document.getElementById('sidebar')?.classList.add("visibility");
        document.getElementById('sidebar')?.classList.remove("removeVisibility");
        document.getElementById("table")?.classList.remove("maxWidth");
        document.getElementById("table")?.classList.add("startingWidth");
        document.getElementById("dettaglio")?.classList.remove("marginDettaglio");
        // document.getElementById("dettaglio")?.classList.add("startingWidth");
    }
  }

}
