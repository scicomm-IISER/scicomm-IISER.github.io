---
title: Magazine
permalink: /magazine/
---

{% for mag_year in site.data.magazines %}
## {{ mag_year[0] }}
<div class="magazine-thumbnails" markdown=1>
{% for issue in mag_year[1] %}
<div markdown=1>
<strong>Issue #{{ issue["issue-number"] }} | {{ issue["month"] }}</strong>&nbsp;&nbsp;&nbsp;&nbsp;<span class="magazine-buttons"><a class="button" href="{{issue["permalink"]}}">Browse</a><a class="button" target="_blank" href="{{issue["download"]}}">Download</a></span>
<ul>
{% for line in issue["preview"] %}
<li>{{ line | markdownify | remove: '<p>' | remove: '</p>' }}</li>
{% endfor %}
</ul>

</div>
{% endfor %}
</div>
{% endfor %}
