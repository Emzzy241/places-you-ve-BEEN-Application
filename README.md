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
    let testingPlace = new Place("Oklahoma", 19, "21st of September 2015", "I made 4 new friends", yes);

    testingPlace.summary();
Expected Output: An entire story on user's experience should be summarized
