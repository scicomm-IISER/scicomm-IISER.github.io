---
title: Magazine Releases
permalink: /magazine/
---

{% for issue in site.data.magazines %}
{% assign permalink = issue["permalink"] %}
{% assign current = site.posts | where_exp: "item" , "item.permalink contains permalink" %}
<div class="magazine-summary" markdown=1>
<h3> Issue #{{ issue["issue-number"] }} | {{ issue["month"] }} {{ issue["year"] }} </h3>
<ul>
{% assign featured = current | where_exp: "post" , "post.feature == true" %}
{% for post in featured limit:2 %}
<li><span class="magazine-summary-title">{{ post.title }}</span><span class="magazine-summary-author">{{ post.authors | join: ", " }}</span></li>
{% endfor %}
{% assign interviews = current | where_exp: "post" , "post.category == 'interview'" %}
{% for post in interviews limit:1 %}
<li><span class="magazine-summary-title">{{ post.title }}</span><span class="magazine-summary-author">{{ post.authors | join: ", " }}</span></li>
{% endfor %}
{% for post in current %}
{% if post.category == "crossword" %}
<li><span class="magazine-summary-title">{{ post.title }}</span></li>
{% endif %}
{% endfor %}
</ul>
<div class="release-buttons"><a class="button" href="{{issue["permalink"]}}"> {{ site.color-emoji["browse"] }} Browse</a> <a class="button" target="_blank" href="/assets/magazines/issue{{issue['issue-number']}}.pdf">{{ site.color-emoji["download"] }} Download</a></div>
</div>
<hr>
{% endfor %}
