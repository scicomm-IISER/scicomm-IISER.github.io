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
</div>
<div id="carousel-nav">
<span id="carousel-nav-1" onclick="switchCarousel(1)" class="solid-circle"></span>
<span id="carousel-nav-2" onclick="switchCarousel(2)" class="empty-circle"></span>
</div>

## Recent Articles ([View All](/articles))

{% for article in site.posts limit:3 %}
{% include article-item.html %}
{% endfor %}
