

const day = "a"

switch (day) {

    case "monday":
        console.log("We have QA meeting")
        break;
    case "tuesday":
        console.log("Elastic Client Meeting")
        break;
    case "wednesday":
        console.log("sales Meeting with US Team")
    case "thusrday":
        console.log("No meeting")
        break;
    case "Friday":
        console.log("Cool Friday")
        break;
    case "saturday":
    case "Sunday":
        console.log("Enjoy the Weekend")
        break;
    default:
        console.log("Invalid day")
        break;

}


const language = "chinese"

switch (language) {

    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!")
        break;
    case "spanish":
        console.log("2nd place in number of native speakers")
        break;
    case "english":
        console.log("3rd place")
        break;

    case "hindi":
        console.log("Number 4")
        break;
    case "arabic":
        console.log("5th most spoken language")
        break;
    default:
        console.log('Great language too :D')
}