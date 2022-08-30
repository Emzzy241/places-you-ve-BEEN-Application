// Now we need a database to store all of the places our users have been to, let's create a mock one for users

function PlaceStorer(){
    this.places = {};
    this.currentId = 0;
}

// the first method for the database: the method for adding in places into the database and giving each place a unique id

PlaceStorer.prototype.addPlace = function(place){
    place.id = this.assignId();
    this.places[place.id] = place;
};

PlaceStorer.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
};


// the method for finding places
// this method works with each place unique id's. if the method finds that place in our database, it will return that particular place but if it can't find that place, it returns false 

PlaceStorer.prototype.findPlace = function(id){
    if(this.places[id] !== undefined){
        return this.places[id];
    }
    return false;
};

// the method for deleting places
// deletePlace() method: we want to be able to find a place by its id in our database, and delete that particular place if its in our database

PlaceStorer.prototype.deletePlace = function(id){
    if(this.places[id] === undefined){
        return false;
    }
    delete this.places[id];
    return true;
}

// the constructor format for creating new places

function Place(placeName, yourAge, dateYouVisitedPlace, howManyFNewFriendsFromPlace , wouldYouLikeToGoAgain){
    this.placeName = placeName;
    this.yourAge = yourAge;
    this.dateYouVisitedPlace = dateYouVisitedPlace;
    this.howManyFNewFriendsFromPlace = howManyFNewFriendsFromPlace;
    this.wouldYouLikeToGoAgain = wouldYouLikeToGoAgain;
}


// defining a method that will summarize everything for the user
// First method for Place constructor

Place.prototype.summary = function(){
    return "Hi, You don't need to know my name but I have something to tell you about this place I once visited. The name of the place was "
     + this.placeName + ", I visited the place when I was " + this.yourAge + " and the day I visited was on the " + this.dateYouVisitedPlace + ". I made a total number of "
     + this.howManyFNewFriendsFromPlace + " new friends at this place. Thanks for hearing me out, I know you would want to know if I would love to go to this place again and my answer is " + this.wouldYouLikeToGoAgain.toUpperCase() + "!!!";

}

// User Interface Logic 

// TO start the ui logic, we create the global variable making the database for PlaceStorer || also called instantiator
let myPlaceStorer = new PlaceStorer();

