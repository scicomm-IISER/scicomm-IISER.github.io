---
layout: home
permalink: /
---

{% include latest-issue.html %}
<span><span class="nf nf-oct-stack"></span>&nbsp;<a href="/assets/magazines/{{latestIssue[1][0]["fileName"]}}">View Older Releases</a></span>

<p id="intro" markdown=1>
<img id="intro-logo" src="{{ site.logo }}"/>
<span>**InScight** is an online magazine dedicated to making pure science accessible and engaging. More on this can be found on the [about page](/about/).</span>
</p>

## Recent Articles
{% include recent-articles.html start="0" numArticles="4" %}
