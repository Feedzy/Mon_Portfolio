import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContenueProvider } from "../../providers/contenue/contenue";

/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {
  project: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ContenueProvide: ContenueProvider) {
  this.project();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }
  Mes_Project() {
    this.ContenueProvide.project()
      .then(data => {
        this.project = data;
        console.log(this.project);
      });
  }

}
