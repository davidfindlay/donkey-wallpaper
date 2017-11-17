import "./Template";
import {Template} from "./template";

var testdata = {
    "acquisition_date": "2013-12-06",
    "caption": "Australia Week - Bribie Island, Deception Bay and northern Moreton Bay are visible in this image, showing beaches and sandbars.",
    "credit": "<a href=\"n/a\">n/a</a>",
    "date": "2017-11-06",
    "description": "Australia Week - Bribie Island, Deception Bay and northern Moreton Bay are visible in this image, showing beaches and sandbars.",
    "location": "Bribie Island, Australia",
    "location_url": "https://tools.wmflabs.org/geohack/geohack.php?pagename=Bribie_Island&params=27_00_S_153_07_E_region:AU_type:isle",
    "mission": "Expedition 38",
    "mission_url": "<a href=\"https://www.nasa.gov/mission_pages/station/expeditions/expedition38/index.html/\">Expedition 38</a>",
    "photographer": "n/a",
    "photographer_url": "n/a",
    "tags": [
        "day",
        "ocean",
        "bay",
        "beach",
        "sandbar",
        "island",
        "city"
    ]
};

testdata["shortdate"] = testdata.acquisition_date;

let tb = new Template();
tb.hb_file = "templates/template.handlebars";
tb.out_file = "compiled/template.html";
tb.generate();