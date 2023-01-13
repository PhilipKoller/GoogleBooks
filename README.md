## Google Books

This project is a web application that allows users to search for books using the Google Books API.


### Prerequisites

- A computer with an internet connection and a web browser
- A code editor or integrated development environment (IDE)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) installed on your computer
- Google Books API Key

## Setup

1. Clone the repository  
```git clone https://github.com/PhilipKoller/GoogleBooks.git```  

1. Install dependencies  
```npm install```

3. Create a .env file in the root directory of the project and add your Google Books API Key and Port Number
```API_KEY=YOUR_API_KEY```  
```PORT=YOUR_PORT_NUMBER```

4. Build Webpack   
```npm run build```  

5. Start server    
```npm run server-start```  

6. Navigate to
```http://localhost:[port]```

## Mockup
![Imgur](https://i.imgur.com/ai7rxH9.png)
## Server Overview
![Imgur](https://i.imgur.com/y1csWzI.png)

## Technical Requirements

| No. | Description | Test Method |
|-----|-------------|-------------|
| 1.0 | The app must use the Google Books API to retrieve search results.| Inspection  |
| 1.1 | The app must be able to handle pagination and display a maximum of 10 results per page.| Inspection  |
| 1.2 | The app must be able to format the results as "First author [, second author [, third author...]] - Title". | Inspection  |
| 2.0 | The app must be able to expand a result to show its description if one exists. | Inspection  |
| 3.0 | The app should display the total number of search results. | Inspection  |
| 4.0 | The app must display the total number of search results. | Inspection  |
| 5.0 | The app must display the name of the author who appears most commonly in the results. | Inspection  |
| 6.0 | The app must display the oldest and newest publication dates within the search parameters. | Inspection  |
| 7.0 | The app must display the server response time. | Inspection  |
