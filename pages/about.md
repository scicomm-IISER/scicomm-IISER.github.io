---
layout: default
title: All About Cogito
permalink: /about/
---
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. _Vestibulum tortor quam_, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 

## What is Cogito?
Aenean ultricies mi vitae est. Mauris placerat eleifend leo. **Quisque** sit amet est et ullamcorper pharetra. Vestibulum [sapien](https://www.iiserkol.ac.in/web/en/#gsc.tab=0) erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt **condimentum, eros ipsum rutrum orci**, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. [Praesent dapibus, neque id cursus faucibus](https://www.iiserkol.ac.in/web/en/#gsc.tab=0), tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, _facilisis luctus, metus_.

## Our Group
{% for category in site.data.members %}
### {{ category[0] }}
{% for name in category[1] %}
![](/assets/images/about/{{ name[1]["imageName"] }})
<span>
**{{ name[0] }}**<br><br>
{{ name[1]["description"] }}
</span>
{: .member-desc }

{% endfor %}
{% endfor %}

