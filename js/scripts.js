function States(city, landmarks, timeOfYear) {
  this.city = city;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

let Washington = new States("Seattle", ["The Needle", "Queen Anne"], "1995" )
let Oregon = new States("Portland", ["Voodoo Donuts", "Pittock Mansion"], "2000")
let Hawaii = new States ("Oahu", ["Waikiki", "Waimanalo Beach"], "2019")
let California = new States ("San Diego", ["Balboa Park", "Seaworld"], "2017")
let Illinois = new States ("Chicago", ["The Bean", "Museum of Art"], "2015");
let Colorado = new States("Boulder", ["Mountain1", "Mountain2"], "2022");


$(document).ready(function () {
  $("#Washington").click(function () {
    $("#washingtonInfo").slideToggle()
    $("#washingtonInfo").html(`${Washington.city}, ${Washington.landmarks}, ${Washington.timeOfYear}`);
  })
  $("#Oregon").click(function () {
    $("#oregonInfo").slideToggle()
    $("#oregonInfo").html(`${Oregon.city}, ${Oregon.landmarks}, ${Oregon.timeOfYear}`);
  })
  
  $("#Hawaii").click(function () {
    $("#hawaiiInfo").slideToggle()
    $("#hawaiiInfo").html(`${Hawaii.city}, ${Hawaii.landmarks}, ${Hawaii.timeOfYear}`);
  })

  $("#California").click(function () {
    $("#californiaInfo").slideToggle()
    $("#californiaInfo").html(`${California.city}, ${California.landmarks}, ${California.timeOfYear}`);
  })

  $("#Illinois").click(function () {
    $("#illinoisInfo").slideToggle()
    $("#illinoisInfo").html(`${Illinois.city}, ${Illinois.landmarks}, ${Illinois.timeOfYear}`);
  })

  $("#Colorado").click(function () {
    $("#coloradoInfo").slideToggle()
    $("#coloradoInfo").html(`${Colorado.city}, ${Colorado.landmarks}, ${Colorado.timeOfYear}`);
  })
    event.preventDefault();
  });
