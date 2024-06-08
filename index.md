---
layout: home
permalink: /
---

<div id="carousel" markdown=1>
  <div id="carousel-issue" markdown=1>
  {% include latest-issue.html %}
  </div>
  <div id="carousel-article" markdown=1>
  {% include latest-article.html %}
  </div>
  <div id="carousel-news" markdown=1>
  {% include latest-news.html %}
  </div>
</div>
<div id="carousel-nav">
    <span id="carousel-nav-1" onclick="switchCarousel(this, 'carousel-issue')" class="nf nf-md-numeric_1_box"></span>
    <span id="carousel-nav-2" onclick="switchCarousel(this, 'carousel-article')" class="nf nf-md-numeric_2_box"></span>
    <span id="carousel-nav-3" onclick="switchCarousel(this, 'carousel-news')" class="nf nf-md-numeric_3_box"></span>
</div>

<div markdown=1>
## Recent Articles ([View All](/articles))
{% include recent-articles.html numArticles="2" %}
</div>

<div markdown=1>
## News ([View All](/news))

{% for post in site.categories["news"] limit:2 %}
- <span class="article-item-title">{{ post.title }} </span><br>
<span class="nf nf-fa-calendar_plus"></span>&nbsp;&nbsp;{{ post.date | date:"%b %d, %Y" }} &nbsp;&nbsp;<span class="nf nf-md-chevron_double_right"></span>&nbsp;&nbsp;<a href="{{ post.url }}">Read more</a>
{% endfor %}
</div>
