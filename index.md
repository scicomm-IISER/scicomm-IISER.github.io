---
layout: home
permalink: /
---

{% assign year = 'now' | date: "%Y" %}
{% assign latestIssue = site.data.magazines[0] %}
<div id="latest-issue">

<a href="{{latestIssue["permalink"]}}"><img src="/assets/magazine-thumbnails/{{ latestIssue["thumbnail"] }}"/></a>
<div class="latest-issue-desc" markdown=1>
<h1>Issue #{{ latestIssue["issue-number"] }} | {{ latestIssue["month"] }} </h1>
{% for key in latestIssue["highlights"] %}
{% assign post = site.posts | find_exp:"item", "item.permalink contains key" %}
<span class="nf">{{ site.category-icons[post.category] }}</span> {{ post.title | markdownify | remove: '<p>' | remove: '</p>' }} {% if post.authors != nil %} <span class="archive-author">{{ post.authors }}</span> {% endif %} <br>
{% endfor %}
<div class="home-button">🔎 <a href="{{latestIssue["permalink"]}}"> Browse Issue (HTML)</a></div>
<div class="home-button">📥 <a target="_blank" href="/assets/magazines/issue{{latestIssue["issue-number"]}}.pdf"> Download Issue (PDF)</a> </div>
<div class="home-button">🗓️ <a href="/magazine/">Browse Older Issues</a></div>
</div>

</div>

<div id="intro" markdown=1>
<div> ⚠️ What is InScight?</div>
If you are new here, welcome! You have reached the home page of *InScight*. {{ site.description }} More on this can be found on the [about page](/about/).
</div>

# Recent Highlights
