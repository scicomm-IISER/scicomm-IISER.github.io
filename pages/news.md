---
title: News and Updates
permalink: /news/
---

{% for post in site.categories["news"] %}
- <span class="article-item-title">{{ post.title }} </span><br>
&nbsp;&nbsp;{{ post.date | date:"%b %d, %Y" }} &nbsp;&nbsp;\|&nbsp;&nbsp; <a href="{{ post.url }}">Read more</a>
{% endfor %}
