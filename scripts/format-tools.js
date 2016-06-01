


console.log("initial test");

var blogLinks = {
  "t2_html_css_dom_p1":{
    "type":"technical",
    "title":"HTML CSS and the DOM Part 1",
    "url":"blog/t2-html-css-dom-p1.html",
    "created":"2016-04-15"
  },
  "t2_html_css_dom_p2":{
    "type":"technical",
    "title":"HTML CSS and the DOM Part 2",
    "url":"blog/t2-html-css-dom-p2.html",
    "created":"2016-04-15"
  },
  "t3_design_to_web_blog":{
    "type":"technical",
    "title":"Design to web blog",
    "url":"blog/t3-design-to-web-blog.html",
    "created":"2016-04-21"
  },
  "t4_javascript_basics":{
    "type":"technical",
    "title":"JavaScript Basics",
    "url":"blog/t4-javascript-basics.html",
    "created":"2016-04-29"
  },
  "t5_problem_solving":{
    "type":"technical",
    "title":"Problem Solving",
    "url":"blog/t5-problem-solving.html",
    "created":"2016-05-07"
  },
  "t6_js_language":{
    "type":"technical",
    "title":"JavaScript Language",
    "url":"blog/t6-js-language.html",
    "created":"2016-05-14"
  },
  "t8-testing":{
    "type":"technical",
    "title":"Scope",
    "url":"blog/t8-testing.html",
    "created":"2016-05-26"
  },
  "c1_reflection_blog":{
    "type":"cultural",
    "title":"Reflection",
    "url":"blog/c1-reflection-blog.html",
    "created":"2016-04-06"
  },
  "c1_time_and_habits_blog":{
    "type":"cultural",
    "title":"Time and Habits",
    "url":"blog/c1-time-and-habits-blog.html",
    "created":"2016-04-06"
  },
  "c2_emotional_intelligence":{
    "type":"cultural",
    "title":"Emotional Intelligence",
    "url":"blog/c2-emotional-intelligence.html",
    "created":"2016-04-16"
  },
  "c3_meditation_process":{
    "type":"cultural",
    "title":"Mediataion Process",
    "url":"blog/c3-meditation-process.html",
    "created":"2016-04-21"
  },
  "c4_daily_mindfulness":{
    "type":"cultural",
    "title":"Daily Mindfulness",
    "url":"blog/c4-daily-mindfulness.html",
    "created":"2016-04-14"
  },
  "c5_self_confidence":{
    "type":"cultural",
    "title":"Self Confidence",
    "url":"blog/c5-self-confidence.html",
    "created":"2016-05-04"
  },
  "c6_control":{
    "type":"cultural",
    "title":"Control",
    "url":"blog/c6-control.html",
    "created":"2016-05-14"
  },
  "c7_motivation":{
    "type":"cultural",
    "title":"Motivation",
    "url":"blog/c7-motivation.html",
    "created":"2016-05-22"
  },
  "c8_connecting":{
    "type":"cultural",
    "title":"Connecting",
    "url":"blog/c8-connecting.html",
    "created":"2016-05-29"
  },
  "javascript_racer":{
    "type":"project",
    "title":"Racer Game",
    "url":"http://georgef105.github.io/javascript-racer/",
    "created":"2016-05-03"
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
//addLinks();

var menuItemTemplate = '<div class="menu-item" id="menu-item-%id%"><div class="menu-item-type">%type%</div><div class="menu-item-date">%date%</div><div class="menu-item-title">%title%</div></div>';

function buildMenu(sortBy){
  sortBy = sortBy || "none";
  //console.log("buildMenu sortBy: " + sortBy);
  for(var key in blogLinks){
    //console.log(key)
    $("#menuItems").append(menuItemTemplate.replace("%type%",blogLinks[key].type.charAt(0).toUpperCase() + blogLinks[key].type.slice(1)).replace("%date%",blogLinks[key].created).replace("%title%",blogLinks[key].title).replace("%id%",key));
    // $("#menu-item-"+key).click(function(key){buildContent(key);});
    $("#menu-item-"+key).click({key:key}, buildContent);
  }
}

buildMenu();

function buildContent(event){
  console.log("buildContent: "+event.data.key);
  //console.log("url: " + )
  // $("#linkContent").load(blogLinks[event.data.key].url + " div#actualContent");

  $.ajax({
    url:blogLinks[event.data.key].url,
    type:'GET',
    success: function(data){
      $("#linkContent").html($(data).filter("#actualContent").html() || $(data).find("#actualContent").html() );
      //console.log($(data).filter("#actualContent").html());
      //console.log(data);
    }
  });

}
