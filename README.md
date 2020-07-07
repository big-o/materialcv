# Material CV

A CV/resume made with Jekyll and Material design. Suitable for desktop, mobile and
print.

## Features

* Customisable theme.
* Easily maintain your CV content with markdown files, without needing to worry about
  the layout.
* Responsive layout suitable for large desktops/small desktops/mobile.
* Print preview will re-render the document in a format suitable for printing or saving
  to PDF.

## Getting started

Simply fork the project, and then add your personal information:

* Put your name and contact details in `_data/about.yml`.
* Write the contents of your CV in the `.md` files in `contents/`.

Optionally, you can also configure the section order/names/icons and the colour scheme
in `_config.yml`.

View your CV locally by running `bundle exec jekyll serve` and browse to
`http://localhost:4000`. Alternatively, push your content to GitHub and view your page
online at `https://<username>.github.io/<fork>` (make sure you enable github pages on
your fork first).

## Demo

See a live demo [here](https://big-o.github.io/materialcv).

The layout follows a simple card-based format on most desktops. The colour can easily be
changed by editing the theme properties in `_config.yml`:

<img src="./img/web.png" alt="web" height="300px" />

On small/mobile devices, the cards take on a more vertical format to better utilise
space:

<img src="./img/mobile.png" alt="mobile" height="300px" />

The print format is also optimised for PDF/paper. As well as having a more
paper-friendly layout, you can also ensure that URLs are displayed alongside any anchor
labels, so no information is lost:

<img src="./img/print.png" alt="print" height="300px" />
