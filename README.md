<img src="https://github.com/Amirmahdi-Kaheh/Countries-RestAPI/blob/main/assets/media/project-preview.jpg?raw=true"></img>

<h1 align="center">REST Countries API</h1>

<div align="center">
  <h3>
    <a href="https://countries-restapi.iran.liara.run/" color="white">
      Live Demo
    </a>
  </h3>
</div>
<br>
<br>
<br>

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (version 16 or later)
- npm (Node Package Manager) or Yarn

### Step 1: Clone the Repository

```shell
git clone https://github.com/Amirmahdi-Kaheh/Countries-RestAPI.git
```

### Step 2: Clone the Repository

```shell
cd Countries-RestAPI
```

### Step 3: Install Dependencies

```shell
# If you're using npm
npm install

# If you're using Yarn
yarn install
```

### Step 4: Configure Environment Variables

Create a `.env` file in the root directory of the project and define any necessary environment variables. You can use the `.env.example` file as a template.

### Step 5: Build and Run the Project

**Development Mode**
<br>
To run the project in development mode:



```shell
#If you're using npm
npm run dev

#If you're using Yarn
yarn dev
```
The application will be accessible at http://localhost:3000.
<br>
<br>


**Production Mode**
<br>
To run the project in production mode:

```shell
#If you're using npm
npm run build
npm run start

#If you're using Yarn
yarn build
yarn start
```

The application will be accessible at http://localhost:3000.


## About The Project:

<p>The RestCountries Explorer is a web application that provides information about countries from all around the world. It utilizes the REST Countries API to fetch and display data such as country names, capitals, populations, currencies, languages, and more.

## Project Features:

- Country Search: Users can search for a specific country by name, region, or language, and get detailed information about it, and also can use the keywords to search the country name ex. irn will show iran in list as well
- Country List: The application provides a list of countries with basic details like flag, name, population, capital, and region. Users can click on a country to view more detailed information.
- Country Sort: Users can sort countries based on name or population in both ASC or DESC order 
- Country Filtering: Users can filter countries based on regions (e.g., Africa, Asia, Europe, etc.) to explore countries within specific continents.
- Dark Mode: The application supports a dark mode theme for enhanced readability and user preference.
- Random Choice: Users can select the Pick Random and application take them to a random Country
- Country Detail: Users can see the full information in country detail page and links to Google Map and OpenStreet Map and also translation on country name in other languages
- PWA: Users can install web Application to have the full access from their home page 

## Technologies Used:
- Front-end Framework: <a href="https://github.com/nuxt/nuxt">Nuxt.js</a>
- CSS Framework: <a href="https://github.com/tailwindlabs/tailwindcss">Tailwind CSS</a>
- REST API: <a href="https://restcountries.com/">RestCountries API</a>
- State Management: <a href="https://github.com/vuejs/vuex">Vuex</a>
- HTTP Client: <a href="https://axios.nuxtjs.org/">Axios</a>


## Project Benefits:
<p>
The RestCountries Explorer offers a user-friendly interface that enables users to explore and learn about various countries effortlessly. It provides a rich source of information, allowing users to discover facts about different countries, their languages, currencies, and other essential details. The project also demonstrates effective integration of APIs, responsive design, and a modern user interface.

This project serves as an excellent learning resource for developers who want to understand how to consume REST APIs, manage application state using Vuex, implement responsive design with Tailwind CSS, and build interactive interfaces with Vue.js.
</p>


## Resources

Here are some additional resources that you may find helpful:

- [Nuxt.js Documentation](https://nuxtjs.org/docs) - Official documentation for Nuxt.js.
- [Vue.js Documentation](https://vuejs.org/v2/guide/) - Official documentation for Vue.js.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Official documentation for Tailwind CSS.
- [REST Countries API Documentation](https://restcountries.com/) - Documentation for the REST Countries API.
- [Fuse.js](https://fusejs.io/) - Official documentation for fuse.js, im using fuse for my search by keyword
- [v-lazy-image](https://www.npmjs.com/package/v-lazy-image) - Official documentation for v-lazy-image, im using v-lazy-image for my country flag image lazy load
- [vue-gtag](https://matteo-gabriele.gitbook.io/vue-gtag/) - Official documentation for Vue gtag, JavaScript tagging framework and API that allows you to send event data to Google Analytics
- [cookie-universal-nuxt](https://github.com/microcipcip/cookie-universal/tree/master) - Supporting Cookies on server-side rendering to init user theme before render, using for dark mode
  
You can refer to these resources to gain a deeper understanding of the frameworks, libraries, and APIs used in this project.


## Contact Information or Support

For any questions, feedback, or support requests, please feel free to contact me:

- Email: [mahdiar.dev@gmail.com](mailto:mahdiar.dev@gmail.com)
- GitHub Issues: [Project Issues](https://github.com/Amirmahdi-Kaheh/Countries-RestAPI/issues)

I'll appreciate your feedback and will do my best to respond in a timely manner.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this project in accordance with the terms of the license. Please see the [LICENSE](LICENSE) file for more details.
