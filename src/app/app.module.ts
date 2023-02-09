import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TopbarComponent } from './topbar/topbar.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { AccordionModule } from 'primeng/accordion';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopbarComponent,
    SidebarComponent,
    DettaglioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    SplitterModule,
    ListboxModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    AvatarModule,
    AvatarGroupModule,
    SidebarModule,
    PanelModule,
    MenuModule,
    AccordionModule,
    CardModule,
    FieldsetModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    InputTextareaModule
  ],
  providers: [HomepageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
