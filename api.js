// ========================================
// API Integration Demo for Students
// Fetching Data from External APIs
// ========================================

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log("First 3 users:", users.slice(0, 3));
}

async function fetchUserPosts(userId = 1) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    console.log(`Posts by user ${userId}:`, posts.slice(0, 3));
}

// Fetching Data from REST Countries API

async function fetchAgeData(userId = 1) {
    const response = await fetch(`https://api.agify.io/?name=meelad`);
    const agify = await response.json();
    console.log(`Agify data:`, agify);

}


// Fetching Data from Cat Facts API

async function fetchCatFacts(userId = 1) {
    const response = await fetch(`https://catfact.ninja/fact`);
    const facts = await response.json();
    console.log(`Cat facts:`, facts);
}


// Fetching Data from PokeAPI

async function fetchPokeAPI(userId = 1) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
    const pokemon = await response.json();
    console.log(`Pokemon ${userId}:`, pokemon);
}


// Fetching Data from Advice Slip API

async function fetchAdviceSlip(userId = 1) {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const advice = await response.json();
    console.log(`Advice for user ${userId}:`, advice);
}

// Fetching Data from Quotable API
async function fetchDogBreed(userId = 1) {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const dogData = await response.json();
    console.log(`Random dog image for user ${userId}:`, dogData);
}

// Run the API calls

fetchUsers();
fetchAgeData();
fetchCatFacts();
fetchPokeAPI();
fetchAdviceSlip();
fetchDogBreed(); 

// Fetching APIS from my hosted webpage

async function fetchMyAPI() {
    const response = await fetch(`https://fa25-cs300-marcrobertson.github.io/Data/users.json`);
    const data = await response.json();
    console.log(`Data from my API:`, data);
}

// Fetching Products Data from my hosted webpage

async function fetchProductsAPI() {
    const response = await fetch(`https://fa25-cs300-marcrobertson.github.io/Data/products.json`);
    const products = await response.json();
    console.log(`Data from my Products API:`, products);
}


// Fetching Data from Open Data on my hosted webpage

async function fetchOpenDataAPI() {
    const response = await fetch(`https://fa25-cs300-marcrobertson.github.io/Data/open_data.geojson`);
    const open_data = await response.json();
    console.log(`Data from my Open Data API:`, open_data);
}

// Call the API functions

fetchMyAPI();
fetchProductsAPI();
fetchOpenDataAPI();

