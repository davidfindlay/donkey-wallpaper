import fs = require('fs');

export class Template {

    hb_file: string;
    out_file: string
    context;

    generate() {
        // Get a Handlebars instance
        var hb = require("handlebars");
        hb.registerHelper('helper_date', require('helper-date'));

        // Load a template
        var template:string = fs.readFileSync(this.hb_file,'utf8');

        // Compile said template
        var compiled = hb.compile(template);
        var html = compiled(this.context);

        // Write HTML file
        fs.writeFileSync(this.out_file, html);
    }

}