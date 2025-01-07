---
layout: home
permalink: /
---

<p>
{% include latest-issue.html %}
</p>

<br>
##  What is InScight?

<p id="intro" markdown=1>
<img id="intro-logo" src="{{ site.logo-light }}"/>
<span>If you are new to this site, welcome! You have reached the home page of **InScight**. {{ site.description }} More on this can be found on the [about page](/about/).</span>
</p>

<br>
## Recent Articles
{% include recent-articles.html start="0" numArticles="2" category="article" %}

<br>
## Recent Interviews
{% include recent-articles.html start="0" numArticles="2" category="interview" %}
