import { useState } from "react";
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
      id: 2,
    },
    {
      title: "Getting started with TestNG",
      body: "lorem ipsum...",
      author: "Manul Wickramanayaka",
      id: 2,
    },
    {
      title:
        "How to do Multiple Browser Parallel Testing in a selenium TestNG project",
      body: "lorem ipsum...",
      author: "Manul Wickramanayaka",
      id: 2,
    },
    {
      title: "Waits in Selenium",
      body: "lorem ipsum...",
      author: "Manul Wickramanayaka",
      id: 3,
    },
    {
      title: "Using WebDriver Manager with Maven POM dependency",
      body: "lorem ipsum...",
      author: "Manul Wickramanayaka",
      id: 3,
    },
    {
      title: "How to use Extent Reports with TestNG in Selenium Java",
      body: "lorem ipsum...",
      author: "Manul Wickramanayaka",
      id: 3,
    },
    {
      title: "Dealing with Jar files from command line in a Selenium Project",
      body: "lorem ipsum...",
      author: "Manul Wickramanayaka",
      id: 3,
    },
    {
      title: "Working with TestNG Listeners in Selenium Webdriver",
      body: "lorem ipsum...",
      author: "Rick Grimes",
      id: 3,
    },
    {
      title: "How to Read/Write Data from Excel File-Apache POI",
      body: "lorem ipsum...",
      author: "Rick Grimes",
      id: 3,
    },
    {
      title: "Logging with Apache Log4J",
      body: "lorem ipsum...",
      author: "Rick Grimes",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author == "Rick Grimes")}
        title="Rick's Blogs"
      />
    </div>
  );
};

export default Home;
