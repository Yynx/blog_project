// Sentiment analysis
const ml = require('ml-sentiment')();
// A function that loops through the comments.
const sentAnalysis = (ourComments) => {
    console.log(ourComments);
    ourComments.forEach((comment) => {
        // Blog logic and assigning emojiz 
        if (comment === undefined) {
            return;
        }
        else {
            comment.blogSentiment = ml.classify(comment.content);
            console.log(`Sentiment is ${comment.blogSentiment}`);

            if (comment.blogSentiment >= 5) {
                comment.blogEmoji = '😃';
            }
            else if (comment.blogSentiment > 0) {
                comment.blogEmoji = "🙂";
            }
            else if (comment.blogSentiment == 0) {
                comment.blogEmoji = "😐";
            }
            else {
                comment.blogEmoji = "😕";
            }
        }
        // Comment logic and assigning emojiz 
        if (comment.comments[0] === undefined) {
            return;
        }
        else {
            console.log(`Comment is ${comment.comments[0].content}`);
            comment.comments[0].commentSentiment = ml.classify(comment.comments[0].content);
            console.log(`Sentiment is ${comment.commentSentiment}`);

            if (comment.comments[0].commentSentiment >= 5) {
                comment.comments[0].commentEmoji = '😃';
            }
            else if (comment.comments[0].commentSentiment > 0) {
                comment.comments[0].commentEmoji = "🙂";
            }
            else if (comment.comments[0].commentSentiment == 0) {
                comment.comments[0].commentEmoji = "😐";
            }
            else {
                comment.comments[0].commentEmoji = "😕";
            }
        }
    });
    return ourComments
};

module.exports = sentAnalysis;

// ourComments.forEach((comment) => {
//     // Logic and assigning emojiz 
//     if (comment.comments[0] === undefined) {
//         return;
//     }
//     else {
//         console.log(`Comment is ${comment.comments[0].content}`);
//         comment.sentiment = ml.classify(comment.comments[0].content);
//         console.log(`Sentiment is ${comment.sentiment}`);

//         if (comment.sentiment >= 5) {
//             comment.emoji = '😃';
//         }
//         else if (comment.sentiment > 0) {
//             comment.emoji = "🙂";
//         }
//         else if (comment.sentiment == 0) {
//             comment.emoji = "😐";
//         }
//         else {
//             comment.emoji = "😕";
//         }
//     }
// });

// // Send sentiment.html
// app.get('/sent', (req, res) => {
//     res.render('sentiment.html');
// });

// // Define a route to send json file
// app.get('/info', (req, res) => {
//     res.json(ourComments);
// });