
var books = ["Broken Glass", "Harry Potter and the Goblet of Fire", "A Little Life", "The Tipping Point", "Darkmans",
"The Siege", "Light", "Visitation", "Bad Blood", "Noughts & Crosses"]

for(var i=0; i < books.length; i++) {
    console.log(books[i])
}

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
for(var i=0; i < tweets.length; i++) {
    console.log(tweets[i]['username']);
    console.log(tweets[i]['created_at']);
}