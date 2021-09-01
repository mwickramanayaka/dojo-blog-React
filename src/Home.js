import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Mobile Test Automation With appium ",
      body: "lorem ipsum...",
      author: "Manul Wickramanayaka",
      id: 1,
    },
    {
      title: "What is XPath in Selenium?",
      body: "lorem ipsum...",
      author: "Manul Wickramanayaka",
      id: 2,
    },
    {
      title: "Let’s start Performance testing with JMeter",
      body: "lorem ipsum...",
      author: "Manul Wickramanayaka",
      id: 3,
    },
    {
      title:
        "How to do Multiple Browser Parallel Testing in a selenium TestNG project",
      body: "lorem ipsum...",
      author: "Manul Wickramanayaka",
      id: 4,
    },
    {
      title: "Waits in Selenium",
      body: "lorem ipsum...",
      author: "Manul Wickramanayaka",
      id: 5,
    },
    {
      title: "Dealing with Jar files from command line in a Selenium Project",
      body: "lorem ipsum...",
      author: "Manul Wickramanayaka",
      id: 6,
    },
    {
      title: "Working with TestNG Listeners in Selenium Webdriver",
      body: "lorem ipsum...",
      author: "Rick Grimes",
      id: 7,
    },
    {
      title: "How to Read/Write Data from Excel File-Apache POI",
      body: "lorem ipsum...",
      author: "Rick Grimes",
      id: 8,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect ran...");
    console.log(blogs);
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author == "Rick Grimes")}
        title="Rick's Blogs"
      />
    </div>
  );
};

export default Home;
