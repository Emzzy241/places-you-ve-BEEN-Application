### ALL MANUAL TESTS FOR APPLICATION

<!-- Starting off the testings for my application -->

<!-- The first test is s test on whether or not we can create new places with our Place constructor -->

Describe: Place Constructor
Test: It will check if we can use a variable to create new places that would have the format of our Place constrcutor
Code:
    let testingPlace = new Place("Oklahoma", 19, "21st of September 2015", "I made 4 new friends", "yes");

Expected Output: testingPlace.placeName = 'Oklahoma'


<!-- The next test is on a summary button to summarize a user's experience to another user -->

Describe: Submit Method
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
    let testingPlace2 = new Place("Hawaii", 24, "30th of July 2009", "0", "no");

    myPlaceStorer.addPlace(testingPlace)
    myPlaceStorer.addPlace(testingPlace2)

Expected Output: Both variable(objects-- dataType name) gets added to our PlaceStorer database and with unique id's too

<!-- The test above has been passed, moving on to the next test -->



<!-- The next test is testing if our findPlace() method works -->

Describe: findPlace() method
Test: It will test if our findPlace() method can find a place in our database
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