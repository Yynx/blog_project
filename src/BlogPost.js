class BlogPost {
    constructor(title, content, author) {
        this.id = 1;
        this.title = title;
        this.content = content;
        if (author)
            this.author = author;
        else
            this.author = "anonymous";
        this.comments = [];
        this.reactions = [0, 0, 0];
        this.gif = "";
    }

    addComment(comment, author) {
        this.comments.push(new Comment(comment, author));
    }
}
module.exports = BlogPost;
