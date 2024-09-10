import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kevin's portfolio!",
  description: "6.1040 Fall 2024",
  // TODO: add your base here; this should be your repo name!
  base: "/portfolio-kevin/",
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "Assignments", link:"/assignments"},
      { text: "About me", link: "/about"}
    ],
    

    sidebar: [
      {
        text: "Blogs",
        link: "/blogs",
      },
      {
        text: "Assignments",
        link: "/assignments"
      },
      {
        text: "About me",
        link: "/about"
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/61040-fa24" }],
  },
});
