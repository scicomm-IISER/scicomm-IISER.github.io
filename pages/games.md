---
title: "Games"
permalink: /games/
---



We are working on some **science quizzes**, **crosswords** and other word games. Stay tuned!

<div>
{% assign questions = site.data.quizzes.quiz1["questions"] %}
{% assign options = site.data.quizzes.quiz1["options"] %}
{% assign answers = site.data.quizzes.quiz1["answers"] %}
{% for question in questions %}
{% assign outerloop = forloop %}
{% assign formID = "form" | append: outerloop.index %}
<form id={{ formID }}>
{{ outerloop.index }}. {{ question }}<br>
{% for option in options[outerloop.index0] %}
{% assign buttonId = outerloop.index | append: "-" | append: forloop.index %}
<input type="radio" name="{{ outerloop.index }}" id="{{ buttonId }}" value="{{ buttonId }}" />
<label for="{{ buttonId }}" id="l-{{ buttonId }}">{{ option }}</label>
<br>
{% endfor %}
{% assign correctAnswerId = outerloop.index | append: "-" | append: answers[outerloop.index0] %}

<button type="button" value="{{ correctAnswerId }}">Reveal</button>
</form>
<br>
{% endfor %}
</div>


<script src="{{ site.baseurl }}{% link assets/js/quizzes.js %}"> </script>
