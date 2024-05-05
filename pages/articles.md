---
layout: default
title: Articles
permalink: /articles
---

{% for article in site.posts %}
<div class="article-item" markdown=1>
<img class="article-thumbnail" src="/assets/hero-images/{{article.hero-image}}"/>
<span class="article-item-details">
<span>{{ article.title }}</span>
<span>{{ article.date | date:"%b %d, %Y" }}</span>
<a href="{{ article.url }}">View article.</a>
</span>
</div>
{% endfor %}
