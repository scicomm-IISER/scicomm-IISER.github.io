---
title: "On The Fronters - Issue #2"
permalink: /research-summary-3/
---

{% for item in site.data.researchSummary["Issue-3"] %}
<div class="summary-head">
<b>{{ item["Title"] }}</b><br>
{{ item["Reference"] }}<br>
Contributed by: {{ item["Author"] }} ({{ item["Affiliation"] }})<br>
Keywords: {{ item["Keywords"] | join: ", " }}<br><br>
</div>
<div class="summary-content">{{ item["Summary"] | newline_to_br }}</div>
{% assign imagePath = "/assets/images/digest/" | append: item["Image"] %}
{% assign caption = item["Caption"] %}
{% include article-image.html image=imagePath caption=caption width=600 %}
<br>

<hr> 
{% endfor %}

