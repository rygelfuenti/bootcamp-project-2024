var blogs = [
    {
        title: "My Coding Journey",
        date: "10/16/24",
        description: "Click For A Look Into My Coding Journey",
        image: "giphy.gif",
        imageAlt: "Gif of Dog ",
        slug: "CodingJourney",
    },
    {
        title: "About Me",
        date: "10/16/24",
        description: "Click To Learn More About Me",
        image: "gif.gif",
        imageAlt: "Random Gif",
        slug: "AboutMe",
    }
];
function displayBlogs(blogs) {
    var blogContainer = document.getElementById("blog-container");
    blogs.forEach(function (blog) {
        //Create A Div For Each Blog Post
        var blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-post');
        //Create Anchor For Each Blog Page
        var anchorElement = document.createElement('a');
        anchorElement.href = "".concat(blog.slug, ".html");
        //Create H1
        var H1Element = document.createElement('h1');
        H1Element.textContent = blog.title;
        //Create Images
        var ImageElement = document.createElement('img');
        ImageElement.src = blog.image;
        ImageElement.alt = blog.title;
        //Create P Tags for Blog Description
        var PElement = document.createElement('p');
        PElement.textContent = blog.description;
        // Append Everything to BlogDiv
        anchorElement.appendChild(H1Element);
        anchorElement.appendChild(ImageElement);
        anchorElement.appendChild(PElement);
        blogDiv.appendChild(anchorElement);
        //Append Entire BlogDiv to blogContainer
        blogContainer.appendChild(blogDiv);
    });
}
displayBlogs(blogs);
