'use strict';
const Handlebars = require('handlebars');
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const meow = require('meow');

const cli = meow(`
    Usage
      $ hbs <input>

    Options
      --partial  Partial files
      --output   Output directory

    Examples
      $ hbs template.hbs --partial 'partials/*' --output dist
`, {
  flags: {
    partial: {
      type: 'string'
    },
    output: {
      type: 'string'
    }
  }
});

handlebars(cli.input[0], cli.flags);

function handlebars(source, flags) {
  const partials = glob.sync(flags.partial);
  for (let i = 0; i < partials.length; i++) {
    const partial = partials[i];
    const name = path.basename(partial, path.extname(partial));
    Handlebars.registerPartial(name, fs.readFileSync(partial, { encoding: "utf-8" }));
  }
  const template = Handlebars.compile(fs.readFileSync(source, { encoding: "utf-8" }));
  const result = template({});
  const outputFile = path.join(flags.output, path.basename(source, path.extname(source)) + '.html');
  fs.writeFileSync(outputFile, result);
}
