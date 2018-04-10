import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    var currentImageIndex = -1,
    maxImageIndex = 0,
    images,
    changeInterval = 3500;

    // Prepares relevant variables to cycle throguh images
    var setUp = function() {
      images = document.images;
      maxImageIndex = images.length;
      currentImageIndex = 0;
    };

        // Changes the banner currently being displayed
    var changeBanner = function() {
      var i;

      currentImageIndex = (currentImageIndex >= maxImageIndex - 1) ? 0 : currentImageIndex += 1;

      for (i = 0; i < maxImageIndex; i += 1) {
          images[i].hidden = (i !== currentImageIndex);
      }
    };

    setUp();

    images[currentImageIndex].hidden = false; // show the first banner image;

    setInterval(changeBanner, changeInterval); // following a delay, keep changing the banner image by the specified interval
  }

}
