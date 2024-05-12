---
layout: default
title: Archives
permalink: /archives
---

Search by year of publication.

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
<div class="tags-list">
{%- for set in postsByYear %}
<a class="button" href="#{{tag[0]}}">{{ set["name"] }}</a>
{% endfor -%}
</div>


{% for set in postsByYear %}
## {{ set["name"] }}
{% for article in set["items"] %}
- <span class="article-item-title">{{ article.title }} </span><br>
󰙈&nbsp;&nbsp;{{ article.author }} &nbsp;&nbsp;\|&nbsp;&nbsp; &nbsp;&nbsp;{{ article.date | date:"%b %d" }} &nbsp;&nbsp;\|&nbsp;&nbsp; <a href="{{ article.url }}">View article</a>
{% endfor %}
{% endfor %}
