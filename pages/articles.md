---
layout: default
title: Published Articles
permalink: /articles
---

{% for article in site.posts %}
<div class="article-item" markdown=1>
<a href="{{ article.url }}"><img class="article-thumbnail" src="/assets/hero-images/{{article.hero-image}}"/></a>
<span class="article-item-details">
    <span> <span class="article-item-title">{{ article.title }} </span> | <a href="{{ article.url }}">View article</a></span>
    <span>󰙈 {{ article.author }} |  {{ article.date | date:"%b %d, %Y" }}</span>
    <span class="article-item-excerpt">{{ article.excerpt | truncate: 150 }}</span>
    <span class="article-item-tags">{% for tag in article.tags %}<span class="button">{{ tag }}</span>{% endfor %}</span>
</span>
</div>
{% endfor %}
