import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  input='';
  hasill:number;
 satu(){
   this.input+='1';
 } 
  dua(){
   this.input+='2';
 } 
  tiga(){ 
   this.input+='3';
 } 
  empat(){
   this.input+='4';
 } 
  lima(){
   this.input+='5';
 } 
  enam(){
   this.input+='6';
 } 
  tujuh(){
   this.input+='7';
 } 
  delapan(){
   this.input+='8';
 } 
  sembilan(){
   this.input+='9';
 } 
 plus(){
   this.input+='+';
 } 
 kali(){
   this.input+='*';
 } 
 minus(){
   this.input+='-';
 } 
 hasil(){
  
  
 
 } 
clear(){
   this.input='';
 } 
}
