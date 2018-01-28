import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { Slide } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the WalkthroughModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-walkthrough-modal',
  templateUrl: 'walkthrough-modal.html',
})
export class WalkthroughModalPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewController: ViewController,
              public plt: Platform) {
  }
    @ViewChild(Slides) mySlides: Slides;

    slides = [
    {
      titlered: "COACHCARE",
      description: "Welcome to CoachCare App!",
      image: "assets/imgs/slide1.png",
    },
    {
      titlered: "HOME SCREEN",
      description: "See a snapshot of your daily progress",
      image: "assets/imgs/slide2.png",
    },
    {
      titlered: "PROGRESS",
      description: "View your progress over time",
      image: "assets/imgs/slide3.png",
    },
    {
      titlered: "FUNCTION (+) BUTTON",
      description: "load meals, weight-ins and other activities",
      image: "assets/imgs/slide3.png",
    },
    {
      titlered: "MESSAGES",
      description: "Message with your coach between visits",
      image: "assets/imgs/slide3.png",
    },
    {
      titlered: "SCHEDULE",
      description: "Schedule visits with your coach",
      image: "assets/imgs/slide3.png",
    },
    {
      titlered: "FINISHED!",
      description: "All set! If you have questions visit the Resources page under Settings",
      image: "assets/imgs/slide3.png",
    },
  ];

  counterText = 'Get started';

  goForward() {
    this.mySlides.slideNext();
  }

  goBack() {
    this.mySlides.slidePrev();
  }

  slideChanged() {
    let currentIndex = this.mySlides.getActiveIndex();
    console.log('Current index is', currentIndex);
    this.counterText = currentIndex + " of " + (this.slides.length-1);
    if (this.mySlides.isBeginning()) {
      this.counterText = "Get started"
    }
    if (this.mySlides.isEnd()){
      this.counterText = "Go to App"
    }
  }

}
