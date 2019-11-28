// Sentiment analysis
const ml = require('ml-sentiment')();
// A function that loops through the comments.
// const sentAnalysis = (ourComments) => {
//     //console.log(ourComments);
//     ourComments.forEach((comment) => {
//         // Blog logic and assigning emojiz 
//         if (comment === undefined) {
//             return;
//         }
//         else {
//             comment.blogSentiment = ml.classify(comment.content);
//             //console.log(`Sentiment is ${comment.blogSentiment}`);
//             if (comment.blogSentiment >= 5) {
//                 comment.blogEmoji = '😃';
//             }
//             else if (comment.blogSentiment > 0) {
//                 comment.blogEmoji = "🙂";
//             }
//             else if (comment.blogSentiment == 0) {
//                 comment.blogEmoji = "😐";
//             }
//             else {
//                 comment.blogEmoji = "😕";
//             }
//         }
//         // Comment logic and assigning emojiz 
//         if (comment.comments[0] === undefined) {
//             return;
//         }
//         else {
//             //console.log(`Comment is ${comment.comments[0].content}`);
//             comment.comments[0].commentSentiment = ml.classify(comment.comments[0].content);
//             //console.log(`Sentiment is ${comment.commentSentiment}`);

//             if (comment.comments[0].commentSentiment >= 5) {
//                 comment.comments[0].commentEmoji = '😃';
//             }
//             else if (comment.comments[0].commentSentiment > 0) {
//                 comment.comments[0].commentEmoji = "🙂";
//             }
//             else if (comment.comments[0].commentSentiment == 0) {
//                 comment.comments[0].commentEmoji = "😐";
//             }
//             else {
//                 comment.comments[0].commentEmoji = "😕";
//             }
//         }
//     });
//     return ourComments
// };

// module.exports = sentAnalysis;

const average = (someArray) => {
    let sum = 0;
    if (someArray.length === 0) {
        return sum;
    }
    for (let i = 0; i < someArray.length; i++) {
        sum += someArray[i];

    }
    return sum / someArray.length;
}

const sentimentAnalysis = (ourComments) => {
    //console.log(ourComments);
    ourComments.forEach((comment) => {
        let analysisArray = [];
        // Blog logic and assigning emojiz 
        if (comment === undefined) {
            return;
        }
        else {
            analysisArray.push(ml.classify(comment.content));
            // Comment logic and assigning emojiz 
            comment.comments.forEach((com) => {
                if (comment.comments === undefined) {
                    return;
                }
                else {
                    analysisArray.push(ml.classify(com.content));
                }
            })
        }
        // Get average classification score
        let avg = average(analysisArray);
        if (avg === 0) {
            comment.blogSentiment = "0"
        }
        else {
            comment.blogSentiment = avg;
        }
        // Assign emoji.
        if (avg >= 5) {
            comment.blogEmoji = '😃';
        }
        else if (avg > 0) {
            comment.blogEmoji = "🙂";
        }
        else if (avg == 0) {
            comment.blogEmoji = "😐";
        }
        else {
            comment.blogEmoji = "😕";
        }
    });
    return ourComments;
}
module.exports = sentimentAnalysis;