---
permalink: /pdf/
---

{% for year in site.data.magazines limit:1 %}
{% for magazine in year[1] limit:1 %}
{% assign latest = magazine["issue-number"] %}
{% endfor %}
{% endfor %}

<script language="javascript">
  window.location = "https://scicomm.iiserkol.ac.in/assets/magazines/issue{{ latest }}.pdf";
</script>
