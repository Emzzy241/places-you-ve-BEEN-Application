// Now we need a database to store all of the places our users have been to, let's create a mock one for users

function PlaceStorer() {
    this.places = {};
    this.currentId = 0;
}

// the first method for the database: the method for adding in places into the database and giving each place a unique id

PlaceStorer.prototype.addPlace = function (place) {
    place.id = this.assignId();
    this.places[place.id] = place;
};

PlaceStorer.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};


// the method for finding places
// this method works with each place unique id's. if the method finds that place in our database, it will return that particular place but if it can't find that place, it returns false 

PlaceStorer.prototype.findPlace = function (id) {
    if (this.places[id] !== undefined) {
        return this.places[id];
    }
    return false;
};

// the method for deleting places
// deletePlace() method: we want to be able to find a place by its id in our database, and delete that particular place if its in our database

PlaceStorer.prototype.deletePlace = function (id) {
    if (this.places[id] === undefined) {
        return false;
    }
    delete this.places[id];
    return true;
}

// the constructor format for creating new places

function Place(placeName, yourAge, dateYouVisitedPlace, howManyNewFriendsFromPlace, wouldYouLikeToGoAgain) {
    this.placeName = placeName;
    this.yourAge = yourAge;
    this.dateYouVisitedPlace = dateYouVisitedPlace;
    this.howManyNewFriendsFromPlace = howManyNewFriendsFromPlace;
    this.wouldYouLikeToGoAgain = wouldYouLikeToGoAgain;
}


// defining a method that will summarize everything for the user
// First method for Place constructor

Place.prototype.summary = function () {
    return "Hi, You don't need to know my name but I have something to tell you about this place I once visited. The name of the place was "
        + this.placeName + ", I visited the place when I was " + this.yourAge + " and the day I visited was on the " + this.dateYouVisitedPlace + ". I made a total number of "
        + this.howManyNewFriendsFromPlace + " new friends at this place. Thanks for hearing me out, I know you would want to know if I would love to go to this place again and my answer is " + this.wouldYouLikeToGoAgain.toUpperCase() + "!!!";

}

// User Interface Logic 

// TO start the ui logic, we create the global variable making the database for PlaceStorer || also called instantiator
let myPlaceStorer = new PlaceStorer();


// the editPlaces() method

function editPlace(id) {
    let edittingPlace = myPlaceStorer.findPlace(id);

    $("#new-place-name").val(edittingPlace.placeName);
    $("#new-user-age").val(edittingPlace.yourAge);
    $("#new-date-user-visited-place").val(edittingPlace.dateYouVisitedPlace);
    $("#new-friends-user-made").val(edittingPlace.howManyNewFriendsFromPlace);
    $("#new-users-status").val(edittingPlace.wouldYouLikeToGoAgain);

    myPlaceStorer.deletePlace(id);
    $("#show-place-infos").hide();

}


// This method will take in Place as an object and display the placeDiaries

function displayPlaceDetails(placesToDisplay) {
    let placesList = $("ul#all-places");
    let htmlForPlaceInfo = "";
    Object.keys(placesToDisplay.places).forEach(function (key) {
        const userPlace = placesToDisplay.findPlace(key);
        htmlForPlaceInfo += "<li id=" + userPlace.id + ">" + userPlace.placeName + "</li>";

    });
    placesList.html(htmlForPlaceInfo);
    // after we call this function in our .ready() function, we can now add in a place successfully and get the name: all thanks to the DOM

}

// function for showPlaces()

function showPlaces(placeId) {
    const place = myPlaceStorer.findPlace(placeId);
    $("#show-place-infos").show();
    $(".show-place-name").html(place.placeName);
    $(".show-user-age").html(place.yourAge);
    $(".show-date-visited").html(place.dateYouVisitedPlace);
    $(".show-friends-user-made").html(place.howManyNewFriendsFromPlace);
    $(".show-user-status").html(place.wouldYouLikeToGoAgain);

    // function section for deleteButton
    let delButton = $("#deleteButton");
    delButton.empty();
    delButton.append("<button class='deleteButton btn btn-danger' id=" + place.id + ">Delete</button>");


    // function section for editButton
    let edButton = $("#editButton");
    edButton.empty();
    edButton.append("<button class='editButton btn btn-success' id=" + place.id + ">Edit</button>");

    /* TRYING A SUMMARY BUTTON
    let sumButton = $("#summaryButton");
    sumButton.empty();
    sumButton.append("<button class='summaryButton btn btn-warning' id=" + place.id + ">Summary</button> ");

    Thhis didn't work because our database and the constructor format for creating places are different from each other so we cannot do
    myPlaceStorer.summary(this.id); because our database doesn't know this method but our constructor for creating new places(Place constructor) recognizes this  method
    */
}



function attachPlacesListener() {
    $("ul#all-places").on("click", "li", function () {
        // console.log("The id of this <li> is " + this.id + " !"); let us make it call a function now
        showPlaces(this.id);
        // "this" over here, refers to the <li> on the on() method... "click" is the event our handler is listening for while the "li" is the actual element that the handler is attached to
    });

    // code for the delete button
    $("#deleteButton").on("click", ".deleteButton", function () {
        // myPlaceStorer.deletePlace(this.id);
        myPlaceStorer.deletePlace(this.id);
        $("#show-place-infos").hide();
        displayPlaceDetails(myPlaceStorer);
    });

    // code for the edit button
    $("#editButton").on("click", ".editButton", function () {
        editPlace(this.id);
    });

    /*
    $("#summaryButton").on("click", ".summaryButton", function(){
        myPlaceStorer.summary(this.id);
        $("#show-place-infos").hide();
        displayPlaceDetails(myPlaceStorer.summary());
    });
    */
}


$(document).ready(function () {
    attachPlacesListener();
    $("#allPlaces").submit(function (e) {
        e.preventDefault();
        const nameOfPlace = $("#new-place-name").val();
        const ageOfUser = $("#new-user-age").val();
        const dateUserVisited = $("#new-date-user-visited-place").val();
        const friendsUserMade = $("#new-friends-user-made").val();
        const wouldUserGoAgain = $("#new-users-status").val();

        // Emptying form fields
        $("#new-place-name").val("");
        $("#new-user-age").val("");
        $("#new-date-user-visited-place").val("");
        $("#new-friends-user-made").val("");
        $("#new-users-status").val("");



        let newPlace = new Place(nameOfPlace, ageOfUser, dateUserVisited, friendsUserMade, wouldUserGoAgain);
        myPlaceStorer.addPlace(newPlace);
        console.log(myPlaceStorer.places);
        // calling the displayPlaceDetails whenever we create a new place
        displayPlaceDetails(myPlaceStorer);
    });
});