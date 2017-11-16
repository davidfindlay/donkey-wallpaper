// Get a Handlebars instance
var hb = require("handlebars");

// Load a template
import fs = require('fs');
var template:string = fs.readFileSync('templates/template.handlebars','utf8');

// Compile said template
var compiled = hb.compile(template);
var test = compiled({"shortdate": "20171120"});

// Write JS file
fs.writeFileSync('compiled/template.js', compiled);

// Write HTML file
fs.writeFileSync('compiled/template.html', test);