---
title: Magazine Releases
permalink: /magazine/
---

{% for issue in site.data.magazines %}
<div markdown=1>
{% assign permalink = issue["permalink"] %}
{% assign current = site.posts | where_exp: "item" , "item.permalink contains permalink" %}
<div class="magazine-summary" markdown=1>
<div class="release-buttons"><a class="button" href="{{issue["permalink"]}}"> 🥽 Browse</a> <strong>Issue #{{ issue["issue-number"] }} | {{ issue["month"] }} {{ issue["year"] }}</strong> <a class="button" target="_blank" href="/assets/magazines/issue{{issue['issue-number']}}.pdf"> ⬇️ Download</a></div>
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
</div>
{% endfor %}
