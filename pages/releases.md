---
title: Magazine
permalink: /magazine/
---

{% include latest-issue.html %}

{% for mag_year in site.data.magazines %}
## {{ mag_year[0] }}
<div class="magazine-thumbnails" markdown=1>
{% for issue in mag_year[1] %}
<div markdown=1>
<strong>{{ issue["month"] }}</strong>&nbsp;&nbsp;&nbsp;&nbsp;<a class="magazine-thumbnail-item" href="{{issue["permalink"]}}">HTML</a>&nbsp;&nbsp;&nbsp;&nbsp;<a class="magazine-thumbnail-item" target="_blank" href="{{issue["download"]}}">PDF</a>
<ul>
{% for line in latestIssue["preview"] %}
<li>{{ line }}</li>
{% endfor %}
</ul>

</div>
{% endfor %}
</div>
{% endfor %}
