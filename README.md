### ALL MANUAL TESTS FOR APPLICATION

<!-- Starting off the testings for my application -->

<!-- The first test is s test on whether or not we can create new places with our Place constructor -->

Describe: Place Constructor
Test: It will check if we can use a variable to create new places that would have the format of our Place constrcutor
Code:
    let testingPlace = new Place("Oklahoma", 19, "21st of September 2015", "I made 4 new friends", "yes");

Expected Output: testingPlace.placeName = 'Oklahoma'