import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.page.html',
  styleUrls: ['./work.page.scss'],
})
export class WorkPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit on WorkPage');
  }
  public ionViewWillEnter() {
    console.log('ionViewWillEnter on WorkPage');
  }
  public ionViewDidEnter() {
    console.log('ionViewDidEnter on WorkPage');
  }
  public ionViewWillLeave() {
    console.log('ionViewWillLeave on WorkPage');
  }
  public ionViewDidLeave() {
    console.log('ionViewDidLeave on WorkPage');
  }
  public ngOnDestroy() {
    console.log('ngOnDestroy on WorkPage');
  }

}
