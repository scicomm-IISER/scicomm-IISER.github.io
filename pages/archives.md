---
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
# {{ set["name"] }}
### Articles
  {% for article in set["items"] %}
  {% if article.category == "article" %}
  <span class="article-item-title">{{ article.title }}</span> 
  <br>
  _{{ article.authors | join: ", " }}_ &nbsp;&nbsp;\|&nbsp;&nbsp; {{ article.date | date:"%b %d" }} &nbsp;&nbsp;\|&nbsp;&nbsp; <a href="{{ article.url }}" class="button">View</a>
  {% endif %}
  {% endfor %}
### Interviews
  {% for article in set["items"] %}
  {% if article.category == "interview"%}
  <span class="article-item-title">{{ article.title }}</span> 
  <br>
  _{{ article.authors | join: ", " }}_ &nbsp;&nbsp;\|&nbsp;&nbsp; {{ article.date | date:"%b %d" }} &nbsp;&nbsp;\|&nbsp;&nbsp; <a href="{{ article.url }}" class="button">View</a>
  {% endif %}
  {% endfor %}
{% endfor %}
