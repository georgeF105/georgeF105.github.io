
console.log("initial test");

var blogLinks = {
  "technical": {
    "t2_html_css_dom_p1":{
      "title":"HTML CSS and the DOM Part 1",
      "url":"blog/t2-html-css-dom-p1.html",
      "created":"2016-04-15"
    },
    "t2_html_css_dom_p2":{
      "title":"HTML CSS and the DOM Part 2",
      "url":"blog/t2-html-css-dom-p2.html",
      "created":"2016-04-15"
    },
    "t3_design_to_web_blog":{
      "title":"Design to web blog",
      "url":"blog/t3-design-to-web-blog.html",
      "created":"2016-04-21"
    },
    "t4_javascript_basics":{
      "title":"JavaScript Basics",
      "url":"blog/t4-javascript-basics.html",
      "created":"2016-04-29"
    },
    "t5_problem_solving":{
      "title":"Problem Solving",
      "url":"blog/t5-problem-solving.html",
      "created":"2016-05-07"
    },
    "t6_js_language":{
      "title":"JavaScript Language",
      "url":"blog/t6-js-language.html",
      "created":"2016-05-14"
    }
  },
  "cultural":{
    "c1_reflection_blog":{
      "title":"Reflection",
      "url":"blog/c1-reflection-blog.html",
      "created":"2016-04-06"
    },
    "c1_time_and_habits_blog":{
      "title":"Time and Habits",
      "url":"blog/c1-time-and-habits-blog.html",
      "created":"2016-04-06"
    },
    "c2_emotional_intelligence":{
      "title":"Emotional Intelligence",
      "url":"blog/c2-emotional-intelligence.html",
      "created":"2016-04-16"
    },
    "c3_meditation_process":{
      "title":"Mediataion Process",
      "url":"blog/c3-meditation-process.html",
      "created":"2016-04-21"
    },
    "c4_daily_mindfulness":{
      "title":"Daily Mindfulness",
      "url":"blog/c4-daily-mindfulness.html",
      "created":"2016-04-14"
    },
    "c5_self_confidence":{
      "title":"Self Confidence",
      "url":"blog/c5-self-confidence.html",
      "created":"2016-05-04"
    },
    "c6_control":{
      "title":"Control",
      "url":"blog/c6-control.html",
      "created":"2016-05-14"
    }
  },
  "projects":{
    "javascript_racer":{
      "title":"Racer Game",
      "url":"http://georgef105.github.io/javascript-racer/",
      "created":"2016-05-03"
    }
  }
};

var blogLinkTemplate = '<li><a href="%url%" class="blog-link">%title%</a></li>';

function addLinks(){
  // console.log("technical 1: " + blogLinks.technical.t2_html_css_dom_p1.title);

  for(key in blogLinks.technical){
    // console.log("key = " + key)
    $("#technical-blog-links").append(blogLinkTemplate.replace("%url%",blogLinks.technical[key].url).replace("%title%",blogLinks.technical[key].title));
    // console.log(blogLinks.technical[key].url);
  }
  for(key in blogLinks.cultural){
    $("#cultural-blog-links").append(blogLinkTemplate.replace("%url%",blogLinks.cultural[key].url).replace("%title%",blogLinks.cultural[key].title));
  }
  // $("#blog-links").append("<h5>Blogs</h5>");
}
addLinks();