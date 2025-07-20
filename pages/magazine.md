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
{% for perm in issue["highlights"] %}
{% assign post = current | find_exp: "post" , "post.permalink contains perm" %}
<li><span class="magazine-summary-title">{{ post.title }}</span><span class="magazine-summary-author">{{ post.authors | join: ", " }}</span></li>
{% endfor %}

</ul>
<div class="release-buttons"><a class="button" href="{{issue["permalink"]}}"> {{ site.color-emoji["browse"] }} Browse</a> <a class="button" target="_blank" href="/assets/magazines/issue{{issue['issue-number']}}.pdf">{{ site.color-emoji["download"] }} Download</a></div>
</div>
<hr>
{% endfor %}
