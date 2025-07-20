---
layout: home
permalink: /
---

{% assign year = 'now' | date: "%Y" %}
{% assign latestIssue = site.data.magazines[0] %}
<div class="highlight-main">

<a href="{{latestIssue["permalink"]}}"><img src="/assets/magazine-thumbnails/{{ latestIssue["thumbnail"] }}"/></a>
<div class="highlight-desc" markdown=1>
<h1>Issue #{{ latestIssue["issue-number"] }} | {{ latestIssue["month"] }} {{ latestIssue["year"] }} </h1>
{% for key in latestIssue["highlights"] %}
{% assign post = site.posts | find_exp:"item", "item.permalink contains key" %}
<span class="nf">{{ site.color-emoji[post.category] }}</span> {{ post.title | markdownify | remove: '<p>' | remove: '</p>' }} {% if post.authors != nil %} <span class="archive-author">{{ post.authors }}</span> {% endif %} <br>
{% endfor %}
<div class="home-button">{{ site.color-emoji["browse"] }} &nbsp;<a href="{{latestIssue["permalink"]}}"> Browse Issue (HTML)</a></div>
<div class="home-button">{{ site.color-emoji["download"] }} &nbsp;<a target="_blank" href="/assets/magazines/issue{{latestIssue["issue-number"]}}.pdf"> Download Issue (PDF)</a> </div>
<div class="home-button">{{ site.color-emoji["old"] }} &nbsp;<a href="/magazine/">Browse Older Issues</a></div>
</div>

</div>

<div id="intro" markdown=1>
<div> {{ site.color-emoji["alert"] }} What is InScight?</div>
If you are new here, welcome! You have reached the home page of *InScight*. {{ site.description }} More on this can be found on the [about page](/about/).
</div>

# Recent Articles and Interviews
{% assign categories = "article,interview" | split: "," %}
<div class="highlight-small">
{% for cat in categories %}
 {% assign post = site.categories[cat][0] %}
 {% assign image = "/assets/images" | append: post.permalink | append: post.hero-image | relative_link %}
 <div class="highlight-desc">
 <a href="{{ post.permalink }}" id="highlight-{{ cat }}-url">
 <img id="highlight-{{ cat }}-image" src="{{ image }}"/>
 </a>
 <strong id="highlight-{{ cat }}-title">{{ post.title | markdownify | remove: '<p>' | remove: '</p>' }}</strong>
 <span class="archive-author" id="highlight-{{ cat }}-author"> {{ post.authors | join: ", " }} </span>
 <p class="home-button"><span>{{ site.color-emoji["browse"] }} <a href="{{post["permalink"]}}" id="highlight-{{ cat }}-link"> Browse </a></span><span class="shuffle" id="{{ cat }}-shuffle"></span></p>
 </div>
 {% endfor %}
</div>

# Insight Digest Highlights
<div class="highlight-small">
{% assign id = "issue" | append: site.data.magazines[0]["issue-number"] %}
{% assign post = site.data.digest[id][0] %}
<div class="highlight-desc">
<p><strong id="highlight-digest-title">{{ post["Title"] }}</strong></p>
<p> {{ site.color-emoji["article"] }} <span id="highlight-digest-reference"> {{ post["Reference"] }} </span></p>
<p class="archive-author" id="highlight-digest-author">{{ post["Author"] }}</p>
<p><span class="shuffle" id="digest-shuffle"></span></p>
</div>
<div>
<p> {{ site.color-emoji["speaker"] }} <i class="summary" id="highlight-digest-summary">{{ post["Summary"] | truncate: site.digest-truncate-length }} </i> </p>
{{ site.color-emoji["browse"] }} <a id="highlight-digest-link" href="/{{ id }}/digest/#{{ post["Title"] | slugify }}"> Read More </a>
</div>
</div>

# Contribute!
{{ site.color-emoji["fire"] }} Whether you’re passionate about a scientific idea, have an opinion to share, or want to discuss your research, we’d love to feature your work. If you’ve got an idea but aren’t sure how to develop it, we’re happy to help shape it into something publishable.

You can contribute under these categories:

{{ site.color-emoji["star"] }} **Science Articles** – Engaging write-ups on scientific concepts, discoveries, or phenomena, written for a general audience.

{{ site.color-emoji["flask"] }} **Research Summaries** – Concise overviews of recent peer-reviewed papers (including your own), tailored for non-specialists.

{{ site.color-emoji["scientist"] }} **PhD Stories** – Thoughtful narratives by senior PhD students (4th year onwards) tracing the arc of their research journey.

{{ site.color-emoji["clip"] }} You can find loads of details on the [Content Submission page](/submit/) (along with linked examples), so be sure to check it out if you are curious.

{{ site.color-emoji["hourglass"] }} Submissions are accepted on a rolling basis, so feel free to send yours in anytime.
