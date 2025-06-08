---
title: Archives
permalink: /archives
---

Complete archive of all _Articles_, _Interviews_ and _Insight Digest_ publications from InScight, sorted by year and category.

{% assign start_year = site.archive-year["start"] %}
{% assign end_year = site.archive-year["end"] %}
<div class="year-list">
{% for year in (start_year..end_year) reversed %}
<a class="button" href="#{{ year }}">{{ year }}</a>
{% endfor %}
</div>

{% for year in (start_year..end_year) reversed %}
<h2 id="{{ year }}">{{ year }}</h2>
<div class="year-list">
{% for pair in site.archives %}
<a class="button" href="#{{ year }}-{{ pair[0] }}">{{ pair[1] }}</a>
{% endfor %}
</div>
{% for pair in site.archives %}
  {% assign category = pair[0] %}
  <h3 id="{{ year }}-{{ pair[0] }}">{{ pair[1] }}</h3>
  {% assign posts = site.posts | where: "category", category %}
  {% for item in posts %}
  {% assign post_year = item.date | date: "%Y" | to_integer %}
  {% if post_year != year %}
  {% continue %}
  {% endif %}
  {% if category != "digest" %}
  {{ item.title }}
  <br>
  {% if item.authors != nil %} <span class="archive-author">_{{ item.authors | join: ", " }}_ </span> &nbsp;&nbsp;\|&nbsp;&nbsp; {% endif %}{{ item.date | date:"%b %d" }} &nbsp;&nbsp;\|&nbsp;&nbsp; <a href="{{ item.url }}" class="button">View</a>
  {% else %}
  Issue {{ item.issue }}
  {% assign filename = "issue" | append: item.issue %}
  {% for item in site.data.digest[filename] %}
  {% assign slug = item["Title"] | slugify %}
  {% assign link = "/issue" | append: item.issue | append: "/digest/#" | append: slug %}
  - {{ item["Title"] }} <span class="archive-author">_{{ item["Author"] }}_</span> <a class="button" href="{{ link }}">Read</a>
  {% endfor %}
  {% endif %}
  {% endfor %}
{% endfor %}
{% endfor %}
