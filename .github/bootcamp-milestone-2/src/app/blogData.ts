 export type Blog = {
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
    }];

export default blogs