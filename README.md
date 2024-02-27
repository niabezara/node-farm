 Node Farm

Node Farm is a simple web application built with Node.js that allows users to browse organic and non-organic products. The project uses a data.json file to store product information and templates in the "template" folder to render different pages. 

## Project Structure

- `data/`: Contains the `data.json` file with information about organic and non-organic products.
- `template/`: Contains Handlebars templates for rendering pages.
  - `template-card.html`: Template for rendering product cards.
  - `template-product.html`: Template for rendering detailed product pages.
  - `overview.html`: Template for rendering the overview page.
- `app.js`: Main entry point for the application.
- `replaceTemplate.js`: Script to replace placeholder values in the templates.

## Features

- Overview page displaying organic and non-organic products.
- Product pages with detailed information about each product.
- Data stored in a JSON file for easy maintenance.
