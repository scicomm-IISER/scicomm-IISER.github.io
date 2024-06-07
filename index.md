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
  <h3>News & Updates <a href="/news">(View All)</a></h3>
  {% include latest-news.html %}
  </div>
</div>
<div id="carousel-nav">
    <span onclick="switchCarousel(this, 'carousel-issue')" class="solid-circle"></span>
    <span onclick="switchCarousel(this, 'carousel-article')" class="empty-circle"></span>
    <span onclick="switchCarousel(this, 'carousel-news')" class="empty-circle"></span>
</div>

### Recent Articles ([View All](/articles))

{% include recent-articles.html numArticles="2" %}

### News & Updates ([View All](/news))

{% for post in site.categories["news"] limit:2 %}
- <span class="article-item-title">{{ post.title }} </span><br>
&nbsp;&nbsp;{{ post.date | date:"%b %d, %Y" }} &nbsp;&nbsp;\|&nbsp;&nbsp; <a href="{{ post.url }}">Read more</a>
{% endfor %}
