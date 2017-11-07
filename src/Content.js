const content = {
  pages: [
    {
      path: "/",
      photos: [
        { url: require("./images/sf/civic.jpg"),          aspect: "2-by-3" },
        { url: require("./images/la/echo.jpg"),           aspect: "2-by-3" },
        { url: require("./images/sf/ocean.jpg"),          aspect: "2-by-3" },
        { url: require("./images/nyc/soho-crossing.jpg"), aspect: "2-by-3" },
      ]
    },{
      path: "/sf",
      photos: [
        { url: require("./images/sf/sunset.jpg"),     aspect: "3-by-2" },
        { url: require("./images/sf/civic.jpg"),      aspect: "2-by-3" },
        { url: require("./images/sf/muni.jpg"),       aspect: "2-by-3" },
        { url: require("./images/sf/fireescape.jpg"), aspect: "2-by-3" },
        { url: require("./images/sf/bernal.jpg"),     aspect: "3-by-2" },
        { url: require("./images/sf/bart.jpg"),       aspect: "2-by-3" },
        { url: require("./images/sf/richmond.jpg"),   aspect: "2-by-3" },
        { url: require("./images/sf/ocean.jpg"),      aspect: "2-by-3" }
      ]
    },{
      path: "/la",
      photos: [
        { url: require("./images/la/echo.jpg"),      aspect: "2-by-3" },
        { url: require("./images/la/newspaper.jpg"), aspect: "2-by-3" },
        { url: require("./images/la/silver.jpg"),    aspect: "3-by-2" },
        { url: require("./images/la/pasadena.jpg"),  aspect: "3-by-2" },
        { url: require("./images/la/hands.jpg"),     aspect: "3-by-2" },
        { url: require("./images/la/lake.jpg"),      aspect: "3-by-2" }
      ]
    },{
      path: "/nyc",
      photos: [
        { url: require("./images/nyc/fifty-seven.jpg"),   aspect: "3-by-2" },
        { url: require("./images/nyc/soho-crossing.jpg"), aspect: "2-by-3" },
        { url: require("./images/nyc/soho-foot.jpg"),     aspect: "3-by-2" },
        { url: require("./images/nyc/soho-woman.jpg"),    aspect: "2-by-3" },
        { url: require("./images/nyc/subway-woman.jpg"),  aspect: "3-by-2" },
        { url: require("./images/nyc/greenwich.jpg"),     aspect: "2-by-3" },
        { url: require("./images/nyc/couple.jpg"),        aspect: "2-by-3" }
      ]
    },{
      path: "/chicago",
      photos: []
    },{
      path: "/berkeley",
      photos: []
    },{
      path: "/personal",
      photos: []
    }
  ],
  accounts: [
    { className: "fa-instagram", url: "https://www.instagram.com/masonchan_/" },
    { className: "fa-facebook", url: "https://www.facebook.com/profile.php?id=100000034912802" },
    { className: "fa-github", url: "https://github.com/mscott2757/" },
    { className: "fa-linkedin", url: "https://www.linkedin.com/in/mason-chan-scott/" },
    { className: "fa-spotify", url: "https://open.spotify.com/user/122383669" },
  ]
}

export default content;
