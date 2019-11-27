class Comment {
    constructor(content, author) {
        this.content = content;
        this.time = Date(Date.now).toString();
        if (author)
            this.author = author;
        else
            this.author = "anonymous";
    }
}

module.exports = Comment;