---
title: "What is InScight?"
permalink: /about/
---

InScight is a student-run online magazine hosted by IISER Kolkata, dedicated to making pure science accessible and engaging. Our mission is to bring the wonders of science to a broader audience by exploring innovative research and scientific discoveries. We present well-researched and thought-provoking articles on this website and publish periodical magazines based on such articles. The content is contributed by a diverse community of enthusiasts, aiming to inspire curiosity and a deeper understanding of science among readers. 

InScight is the spiritual successor to [Cogito](/cogitoOld/pages/vision.html), continuing the legacy of promoting scientific knowledge and inquiry. Our editorial board comprises passionate students and researchers from various scientific disciplines, ensuring a rich and diverse range of topics. We also encourage contributions from the wider community, welcoming submissions that delve into any aspect of science that is interesting and non-trivial, and that can be appreciated by a general audience. If you want to submit content to us (written article, video, interview, etc), visit [this page](/submit).

In addition to articles, we offer interactive content such as games and interviews with prominent scientists, providing multiple avenues for readers to engage with science. Our latest release includes a quantum physics-themed crossword, showcasing our commitment to making science both educational and entertaining. 

## Contact Information
- You can always get in touch via [email]({{ site.data.socials["email"] }}).
- If you want to remain anonymous, you can submit [this form]({{ site.data.socials["feedbackForm"] }}).
- You can also reach out to us on our social media accounts: {% include socials.html %}

## Buy Us A Coffee
If you are feeling generous and wish to sponsor some printed copies of our magazine for greater distribution, you are requested to use this [form](https://docs.google.com/forms/d/e/1FAIpQLSc1XWwxSF3UDJZVXpvmdlTDRUjmi0Gv4l5vk24VnTs_aUhsVQ/viewform?usp=preview). Feel free to get in touch with us at [scicomm@iiserkol.ac.in]({{ site.data.socials["email"] }}) if you need any clarification.

## Members

{% for category in site.data.members %}
### {{ category[0] }}
<div class="members">
{% for member in category[1] %}
<div class="member-details">
<img src="/assets/images/members/{{member["image"]}}"/>
<strong>{{ member["name"] | upcase }}</strong>
<div>
{% for link in member["links"] %}
{%- assign name = link[0] -%}
{%- assign classes = site.data.icons[name]["classes"] -%}
<a class="{{ classes }}" href="link[1]">{{ site.data.icons[name]["icon"] }}</a>
{% endfor %}
</div>
{{ member["desc"] }}
</div>
{% endfor %}
</div>
{% endfor %}

<script src="/assets/js/copyEmail.js"></script>
