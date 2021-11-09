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
},
// Adding more tweets to the array
{
    tweet: "This is the fourth tweet",
    username: "johnny",
    created_at: "2021-11-25",
    age: "16",
},
{
    tweet: "This is the fifth tweet",
    username: "andrew",
    created_at: "2021-11-29",
    age: "12",
},
{
    tweet: "This is the sixth tweet",
    username: "jack",
    created_at: "2021-11-06",
    age: "28",
},
{
    tweet: "This is the seventh tweet",
    username: "alex",
    created_at: "2021-11-08",
    age: "29",
},
{
    tweet: "This is the eighth tweet",
    username: "den",
    created_at: "2021-11-09",
    age: "26",
},
{
    tweet: "This is the ninth tweet",
    username: "dan",
    created_at: "2021-11-10",
    age: "19",
},
{
    tweet: "This is the tenth tweet",
    username: "len",
    created_at: "2021-11-11",
    age: "18",
},

]
// Printing out the specific values based on the keys mentioned
for(var i=0; i < tweets.length; i++) {
    console.log(tweets[i]['username']);
    console.log(tweets[i]['created_at']);
}
// I can't make it working
function tweets(array) {
    for(var i=0; i < tweets.length; i++) {
        if(tweets([i]['age']) >= 18) {
            return true;
        }else {
            return false;
        }
    }
}