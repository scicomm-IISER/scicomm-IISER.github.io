---
layout: home
permalink: /
---

<div id="carousel" markdown=1>
  <div class="active-item" markdown=1>
  {% include latest-issue.html %}
  </div>
  <div markdown=1>
  {% include latest-article.html %}
  </div>
  <div markdown=1>
  {% include latest-news.html %}
  </div>
</div>
<div id="carousel-nav">
    <span id="carousel-nav-0" class="active-nav nf nf-md-numeric_1_box"></span>
    <span id="carousel-nav-1" class="nf nf-md-numeric_2_box"></span>
    <span id="carousel-nav-2" class="nf nf-md-numeric_3_box"></span>
</div>

<div id="intro" markdown=1>
<img id="intro-logo" src="{{ site.logo }}"/>
<span>
**InScight** is an online magazine dedicated to making pure science accessible and engaging. More on this can be found on the [about page](/about/).
</span>
</div>

<div markdown=1>
## Recent Articles ([View All](/articles))
{% include recent-articles.html numArticles="2" %}
</div>

<div markdown=1>
## News ([View All](/news))

{% include news-item.html newsNum=2 %}
</div>
