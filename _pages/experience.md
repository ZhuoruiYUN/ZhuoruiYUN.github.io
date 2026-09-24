---
layout: page
title: experience
permalink: /experience/
description: research, competition, and engineering experience.
nav: true
nav_order: 4
---

## Selected Projects

<div class="experience-projects">
  {% assign experience_projects = site.projects | sort: "importance" %}
  {% for project in experience_projects %}
    {% include experience-project.liquid %}
  {% endfor %}
</div>
