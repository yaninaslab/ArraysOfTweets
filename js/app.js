// Presenting an array of strings - 10 book names
var books = ["Broken Glass", "Harry Potter and the Goblet of Fire", "A Little Life", "The Tipping Point", "Darkmans",
"The Siege", "Light", "Visitation", "Bad Blood", "Noughts & Crosses"];
// Printing every book's name in the order they appear in the array
for(var i=0; i < books.length; i++) {
    console.log(books[i])
}
// Creating an array of JavaScript Objects with specified key-value pairs
var tweets = [{
    tweet: "This is the first tweet",
    username: "john",
    created_at: "2021-11-02",
    age: "19",
},
{
    tweet: "This is the second tweet",
    username: "nick",
    created_at: "2021-11-03",
    age: "21",
},
{
    tweet: "This is the third tweet",
    username: "joey",
    created_at: "2021-11-04",
    age: "25",
}
]
// Printing out the specific values based on the keys mentioned
for(var i=0; i < tweets.length; i++) {
    console.log(tweets[i]['username']);
    console.log(tweets[i]['created_at']);
}