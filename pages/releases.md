---
title: Magazine
permalink: /magazine/
---

{% for mag_year in site.data.magazines %}
## {{ mag_year[0] }}
<div class="magazine-thumbnails" markdown=1>
{% for issue in mag_year[1] %}
{% assign permalink = issue["permalink"] %}
{% assign current = site.posts | where_exp: "item" , "item.permalink contains permalink" %}
<div markdown=1>
<strong>Issue #{{ issue["issue-number"] }} | {{ issue["month"] }}</strong>&nbsp;&nbsp;&nbsp;&nbsp;<span class="magazine-buttons"><a class="button" href="{{issue["permalink"]}}">Browse</a><a class="button" target="_blank" href="{{issue["download"]}}">Download</a></span>
<ul>
{% assign featured = current | where_exp: "post" , "post.feature == true" %}
{% for post in featured limit:2 %}
<li><strong>{{ post.title }}</strong>&nbsp;&nbsp;&nbsp;<i>{{ post.authors | join: ", " }}</i></li>
{% endfor %}
{% assign interviews = current | where_exp: "post" , "post.category == 'interview'" %}
{% for post in interviews limit:1 %}
<li><strong>{{ post.title }}</strong>&nbsp;&nbsp;&nbsp;<i>{{ post.authors | join: ", " }}</i></li>
{% endfor %}
{% for post in current %}
{% if post.category == "crossword" %}
<li><strong>{{ post.title }}</strong></li>
{% endif %}
{% endfor %}
</ul>

</div>
{% endfor %}
</div>
{% endfor %}

