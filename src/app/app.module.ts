//Для меню вибору
import { MenuComponent } from './menu';
import { AppComponent } from './app.component';
//Основна частина сторінки
import { MainComponent } from './main';
//Форма редагування користувача
import { UpdateUserComponent } from './update_user';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';
import { SidebarModule} from 'ng-sidebar';
import {MatSidenavModule} from '@angular/material/sidenav'

import {
  MatAutocompleteModule,  MatBadgeModule,
  MatBottomSheetModule,   MatButtonModule,
  MatButtonToggleModule,  MatCardModule,
  MatCheckboxModule,      MatChipsModule,
  MatDatepickerModule,    MatDialogModule,
  MatDividerModule,       MatExpansionModule,
  MatGridListModule,      MatIconModule,
  MatInputModule,         MatListModule,
  MatMenuModule,          MatNativeDateModule,
  MatPaginatorModule,     MatProgressBarModule, 
  MatProgressSpinnerModule,  MatRadioModule,
  MatRippleModule,        MatSelectModule,
  MatSliderModule,        MatSlideToggleModule,   
  MatSnackBarModule,
  MatSortModule,          MatStepperModule,
  MatTableModule,         MatTabsModule,
  MatToolbarModule,       MatTooltipModule,
  MatTreeModule,
    
} from '@angular/material';

  @NgModule({
  exports: [
    CdkTableModule,          CdkTreeModule,
    MatAutocompleteModule,   MatBadgeModule,
    MatBottomSheetModule,    MatButtonModule,
    MatButtonToggleModule,   MatCardModule,
    MatCheckboxModule,       MatChipsModule,
    MatStepperModule,        MatDatepickerModule,
    MatDialogModule,         MatDividerModule,
    MatExpansionModule,      MatGridListModule,
    MatIconModule,           MatInputModule,
    MatListModule,           MatMenuModule,
    MatNativeDateModule,     MatPaginatorModule,
    MatProgressBarModule,    MatProgressSpinnerModule,
    MatRadioModule,          MatRippleModule,
    MatSelectModule,         MatSidenavModule,
    MatSliderModule,         MatSlideToggleModule,
    MatSnackBarModule,       MatSortModule,
    MatTableModule,          MatTabsModule,
    MatToolbarModule,        MatTooltipModule,
    MatTreeModule,
  ]
})
export class DemoMaterialModule {}

@NgModule({
  imports: [
    BrowserModule,       BrowserAnimationsModule,
    FormsModule,         HttpClientModule,
    DemoMaterialModule,  MatNativeDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [],
  declarations: [AppComponent, MenuComponent, MainComponent, UpdateUserComponent],
  bootstrap: [AppComponent, MainComponent, UpdateUserComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
