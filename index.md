---
layout: home
hero-image: banner.svg
permalink: /
---

<div id="carousel">
<div id="carousel-issue" markdown=1>
{% include latest-issue.html %}
</div></div>
<div id="carousel-article" markdown=1>
{% include latest-article.html %}
</div>
<div id="carousel-news" markdown=1>
### News & Updates
{% include latest-news.html %}
</div>
</div>
<div id="carousel-nav">
<span id="carousel-nav-1" onclick="switchCarousel('carousel-issue', 'carousel-nav-1')" class="solid-circle"></span>
<span id="carousel-nav-2" onclick="switchCarousel('carousel-article', 'carousel-nav-2')" class="empty-circle"></span>
<span id="carousel-nav-3" onclick="switchCarousel('carousel-news', 'carousel-nav-3')" class="empty-circle"></span>
</div>

## Recent Articles ([View All](/articles))

{% for post in site.categories["articles"] limit:2 %}
{% include article-item.html %}
{% endfor %}

## News & Updates ([View All](/news))

{% for post in site.categories["news"] limit:2 %}
- <span class="article-item-title">{{ post.title }} </span><br>
&nbsp;&nbsp;{{ post.date | date:"%b %d, %Y" }} &nbsp;&nbsp;\|&nbsp;&nbsp; <a href="{{ post.url }}">Read more</a>
{% endfor %}
