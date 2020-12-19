# blogger resource for ksoichiro.blogspot.com

## Description for source code

### Template

- src/template/template.hbs
  - import external files using handlebars
- src/template/partials/label-icon-svg.svg
  - label icon SVG file

### CSS

- src/css/memorandum.scss
  - main styles
- src/css/inline.scss
  - important, partial styles that is embedded into HTML
- src/css/bundle-pc-css.scss
  - styles for PC
- src/css/bundle-mobile-css.scss
  - styles for mobile

### JavaScript

- src/js/memorandum.js
  - script to be placed to GitHub Pages
- src/js/load-fonts-js.js
  - script embedded into HTML to load font files

## How to release

```
npm run build
```

This will generate:

1. memorandum.min.css
1. memorandum.min.js
1. dist/template/template.html

No.1 and 2 are deployed to GitHub Pages and accessed via

- https://ksoichiro.github.io/memorandum/memorandum.min.css
- https://ksoichiro.github.io/memorandum/memorandum.min.js

so they should be committed and pushed to this repository.

No.3 should be copied to Blogger theme manually.

```
cat dist/template/template.html | pbcopy
```
