# Places You've BEEN Application

#### made by Mojiboye Emmanuel

### An application you can input all the places you've been to.

### Technologies Used
* Git
* Javascript
* Html
* CSS
* Bootstrap
* Jquery
* JavaScript Databases

# Description

_Travelling is his fun and what's even more fun is memories, the good and bad memories of Places we've been to. Do you need a place to store in all the Places you've been to? try out this application today :)
_

## Setup/Installation
* _Open the directory._
* _Click on the index.html file._
_Note: the website is designed to run on a web browser just be sure you have one. _
* _That's all the installation process you need to carry out. Have fun while communicating with the browser. If you like the website just be sure to give tge project a thumbs up_

## Known Bugs
_As at the launching of this Project there are zero bugs in it. But if you do find a bug in it, be sure to notify me via my various social media handles below_

## WEBSITE LINK
https://emzzy241.github.io/places-you-ve-BEEN-Application/

## License 
Licensed under the GNU General Public License 
© 2022 _by Mojiboye Emmanuel_ All Rights Reserved.

## Contact
_Connect with me @Emmanuel.9944 on instagram and on all other social media pages all @Emmanuel Oluwole_














































### ALL MANUAL TESTS FOR APPLICATION

<!-- Starting off the testings for my application -->

<!-- The first test is s test on whether or not we can create new places with our Place constructor -->

Describe: Place Constructor
Test: It will check if we can use a variable to create new places that would have the format of our Place constrcutor
Code:
    let testingPlace = new Place("Oklahoma", 19, "21st of September 2015", "I made 4 new friends", "yes");

Expected Output: testingPlace.placeName = 'Oklahoma'


<!-- The next test is on a summary button to summarize a user's experience to another user -->

Describe: Summary Method
Test: It will ensure that after user inputs in a new Place, they can also get a summary of that place
Code:    
    let testingPlace = new Place("Oklahoma", 19, "21st of September 2015", "4", "yes");

    testingPlace.summary();
Expected Output: An entire story on user's experience should be summarized


<!-- Our mock database for storing places has been stored,let's add places in here manually to see if it stores them -->

Describe: PlaceStorer(): the database housing all our places
Test: It will check to see if we can add in new places manually and access them too
Code:
    <!-- First create the global variable for PlaceStorer || also called instantiator -->
    let myPlaceStorer = new PlaceStorer();
    <!-- And then the variables -->
    let testingPlace = new Place("Oklahoma", 19, "21st of September 2015", "4", "yes");
    let testingPlace2 = new Place("Hawaii", 24, "30th of July 2009", "0", "no");

<!-- Then we input it manually like this -->
myPlaceStorer.places = testingPlace;
    
Expected Output: When we try to see what's in our PlaceStorer database, we should get both of this variables like this:
    If we do: myPlaceStorer.places
    We should get the two variables created and we can access any place detail of our choice

<!-- Test got passed but if we try adding in more than 1 place, it overrides the previous place, we don't want this, we could solve that by writing a method for it  -->


Describe: addPlace() method
Test: It will add a place to our PlaceStorer database and give each place a unique ID
Code:
    let myPlaceStorer = new PlaceStorer();
    let testingPlace = new Place("Oklahoma", 19, "21st of September 2015", "4", "yes");
    let testingPlace2 = new Place("Hawaii", 24, "30th of July 2009", 0, "no");

    myPlaceStorer.addPlace(testingPlace)
    myPlaceStorer.addPlace(testingPlace2)

Expected Output: Both variable(objects-- dataType name) gets added to our PlaceStorer database and with unique id's too

<!-- The test above has been passed, moving on to the next test -->



<!-- The next test is testing if our findPlace() method works -->

Describe: findPlace() method
Test: It will test if our findPlace() method can find a place(note: we are using that place's unique id) in our database 
Code:
    let myPlaceStorer = new PlaceStorer();
    let testingPlace = new Place("Oklahoma", 19, "21st of September 2015", "4", "yes");
    let testingPlace2 = new Place("Hawaii", 24, "30th of July 2009", "0", "no");

    myPlaceStorer.addPlace(testingPlace);
    myPlaceStorer.addPlace(testingPlace2);

    myPlaceStorer.findPlace(1);
    myPlaceStorer.findPlace(2);

<!-- THis test has been passed: moving on to the next test -->



<!-- The next test is testing if our deletePlace() method works -->

Describe: deletePlace() method
Test: it will check if the method can find that place with its unique id in our database and also delete that entire placeInfo by deleting its id
Code:
    let myPlaceStorer = new PlaceStorer();
    let testingPlace = new Place("Oklahoma", 19, "21st of September 2015", "4", "yes");
    let testingPlace2 = new Place("Hawaii", 24, "30th of July 2009", "0", "no");

    myPlaceStorer.addPlace(testingPlace);
    myPlaceStorer.addPlace(testingPlace2);

    myPlaceStorer.deletePlace(1);
    myPlaceStorer.deletePlace(2);


<!-- Test got passed and done with all the tests in the business Logic -->
<!-- Done with the business Logic, Now off to the UI Logic -->