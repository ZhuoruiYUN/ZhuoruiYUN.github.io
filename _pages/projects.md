---
layout: page
title: projects
permalink: /projects/
description: selected robotics and embedded systems projects.
nav: true
nav_order: 3
display_categories: [research, engineering]
horizontal: false
---

<div class="projects">
{% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}"><h2 class="category">{{ category }}</h2></a>
  {% assign projects = site.projects | where: "category", category | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">{% for project in projects %}{% include projects.liquid %}{% endfor %}</div>
{% endfor %}
</div>
