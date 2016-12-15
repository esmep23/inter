var data = [],
rootView = undefined,
rootData = undefined;
 
   var url = "http://interlab.com.ec/wp-json/posts";
$.ajax({
    url: url,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
        rootData = { news: data };
        renderDefaultView();
    },
    error: function (jqXHR, textStatus, errorThrown) {
        alert("error" + errorThrown)
    }
});
 
function renderDefaultView() {
rootView.view.children().remove();
var html = "<ul>";
for (var i = 0; i < rootData.news.length; i++) {
    var news_new = rootData.news[i];
    html += "<li id='" + news_new.id + "'onclick='renderDetails("" + i + "")'>" + news_new.title + "</li>";
}
html += "</ul>";
rootView.view.html(html);
window.viewNavigator.resetScroller();
}
 
function renderDetails(index) {
var news_new = rootData.news[index];
 
rootView.view.find("li").each(function (index) {
    $(this).removeClass("listSelected");
});
 
$("#" + news_new.id).addClass("listSelected");
 
var html = "<div id='detail'>";
html += "<h1>" + news_new.title + "</h1>";
html += "<img src="" + news_new.thumbnail + "" class='ter'>";
html += "<p>" + news_new.content + "</p>";
html += "</ul></p></div>";
 
var viewDescriptor = {
    title: news_new.title,
    view: $(html)
};
 
window.viewNavigator.pushView(viewDescriptor);
}
       
var myApp = new Framework7({
    template7Pages: true, //enable Template7 rendering for pages
 
        //Specify templates/pages data
        template7Data: {
            // This context will applied for page/template with "about.html" URL
            'url:sample.html': {
                name: 'John Doe',
                age: 38,
                company: 'Apple',
                position: 'Developer'
            }
        }
    });
       
name: 'John Doe',
 age: 38,
 company: 'Apple',
 position: 'Developer'
       
<p>Hello, my name is {{name}} and i am {{age}} years old {{position}} at {{company}}</p>