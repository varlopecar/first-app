import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router : Router) {
    console.log('constructor on HomePage');
  }

  ngOnInit() {
    console.log('ngOnInit on HomePage');
  }
  public ionViewWillEnter() {
    console.log('ionViewWillEnter on HomePage');
  }
  public ionViewDidEnter() {
    console.log('ionViewDidEnter on HomePage');
  }
  public ionViewWillLeave() {
    console.log('ionViewWillLeave on HomePage');
  }
  public ionViewDidLeave() {
    console.log('ionViewDidLeave on HomePage');
  }
  public ngOnDestroy() {
    console.log('ngOnDestroy on HomePage');
  }

  public goToWork() {
    this.router.navigate(['/work']);
  }
}
