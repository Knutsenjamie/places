function States(city, landmarks, timeOfYear) {
  this.city = city;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

let Washington = new States("Seattle", ["The Needle", "Queen Anne"], "1995" )
let Oregon = new States("Portland", ["Voodoo Donuts", "Pittock Mansion"], "2000")
let Hawaii = ("Oahu", ["Waikiki", "Waimanalo Beach"], "2019")
let California = ("San Diego", ["Balboa Park", "Seaworld"], "2017")
let Illinois = ("Chicago", ["The Bean", "Museum of Art"], "2015");
let Colorado = new States("Boulder", ["Mountain1", "Mountain2"], "2022");



