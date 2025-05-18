---
permalink: /html/
---

{% for year in site.data.magazines limit:1 %}
{% for magazine in year[1] limit:1 %}
{% assign latest = magazine["permalink"] %}
{% endfor %}
{% endfor %}

<script language="javascript">
  window.location = "{{ latest }}";
</script>
