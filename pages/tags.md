---
title: Search by Tags
permalink: /tags
---

<div class="tags-list">
{%- for tag in site.tags %}
<a class="button" href="#{{tag[0]}}">{{ tag[0] }}</a>
{% endfor -%}
</div>

{% for tag in site.tags %}
### {{ tag[0] }}
{% for article in tag[1] %}
- <span class="article-item-title">{{ article.title }} </span><br>
󰙈&nbsp;&nbsp;{{ article.author }} &nbsp;&nbsp;\|&nbsp;&nbsp; &nbsp;&nbsp;{{ article.date | date:"%b %d, %Y" }} &nbsp;&nbsp;\|&nbsp;&nbsp; <a href="{{ article.url }}">View article</a>
{% endfor %}
{% endfor %}
