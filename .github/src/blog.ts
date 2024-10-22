type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogs: Blog[] = [
    {
    title: "My Coding Journey",
    date: "10/16/24",
    description:"Click For A Look Into My Coding Journey",
    image: "giphy.gif",
    imageAlt: "Gif of Dog ",
    slug: "CodingJourney",
    },
    {
    title: "About Me",
    date: "10/16/24",
    description:"Click To Learn More About Me",
    image: "gif.gif",
    imageAlt: "Random Gif",
        slug: "AboutMe",
    }
]
function displayBlogs(blogs: {title: string, image: string, description: string, slug: string}[]) {
    const blogContainer = document.getElementById("blog-container")!;

    blogs.forEach(blog => {
        //Create A Div For Each Blog Post
       const blogDiv = document.createElement('div');
       blogDiv.classList.add('blog-post')
       
       //Create Anchor For Each Blog Page
       const anchorElement = document.createElement('a');
       anchorElement.href = `${blog.slug}.html`;
       
       //Create H1
       const H1Element = document.createElement('h1');
       H1Element.textContent = blog.title;

       //Create Images
       const ImageElement = document.createElement('img');
       ImageElement.src = blog.image;
       ImageElement.alt = blog.title;

       //Create P Tags for Blog Description
       const PElement = document.createElement('p')
       PElement.textContent = blog.description;

       // Append Everything to BlogDiv
       anchorElement.appendChild(H1Element);
       anchorElement.appendChild(ImageElement);
       anchorElement.appendChild(PElement);

       blogDiv.appendChild(anchorElement);

       //Append Entire BlogDiv to blogContainer
       blogContainer.appendChild(blogDiv);
    })
}
displayBlogs(blogs)
