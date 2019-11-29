class Comment {
    constructor(content, author) {
        this.content = content;
        this.time = new Date().toLocaleString();
        
        if (author)
            this.author = author;
        else
            this.author = "anonymous";
    }
}

module.exports = Comment;