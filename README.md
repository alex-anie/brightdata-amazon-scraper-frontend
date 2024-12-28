![Scrape and Build LinkedIn user_.png](/local-image/Scrape%20and%20Build%20LinkedIn%20user_.png)

# Bright Data Web Scraping Challenge

This project is my official submission for the [Brightdata web Scraping challenge](https://dev.to/challenges/brightdata). 

## Live Demo

You can find the live [demo here](https://brightdata-amazon-scraper-gules.vercel.app/).

![demo-preview.gif](/local-image/demo-preview.gif)

## About Project

This project uses Brightdata to scrape data from Amazon and return the data output on the page. You can search anything you want and expect to see it load on the page as long what you search can be found on amazon.

## Use

Type the name of what you want to search for example, “laptop” and click the send icon. The website will display a loader but as soon as the data is returned it will render on the page.

## Stacks used (Frontend)

- React
- Vite
- Tailwindcss
- React Icons
- Axios

## Stacks used (Backend)

Note: that this project fetches data from a backend project on a separate repo. You can [check it here](https://github.com/alex-anie/brightdata-amazon-scraper-backend). 

- Cors
- Brightdata (for proxy and data fetching)
- Render (for api hosting)
- Dotenv (load env)
- express (to setup server and routes)
- nodemon (local dev)
- puppeteer-core (Scraping data from Amazon)

## Project Setup

This is  React project with Vite setup 

You can download or clone the [Github repo here](https://github.com/alex-anie/brightdata-amazon-scraper-frontend).

```bash
npm run dev 
```

You the command above to run the project locally.

## Others

Remember to check the `package.json` file to get an idea of the packages used to develop the project.