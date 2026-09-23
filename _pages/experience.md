---
layout: page
title: experience
permalink: /experience/
description: research, competition, and engineering experience.
nav: true
nav_order: 4
---

## RoboMaster KongFu Team, GTIIT
**Electrical Control Group Member (RMUL 2026); Electrical Control & Algorithm Lead (RMUL 2027 Preparation), Sentry Robot** · 2026 - Present

- Competed in the RMUL 2026 3v3 event and received the Third Prize.
- Lead electrical-control and algorithm development for the team's RMUL 2027 preparation.
- Designed asynchronous UART/CAN communication between the onboard computer and STM32 low-level control.
- Developed a ROS 2 Humble navigation stack with Livox MID360 3D LiDAR, SLAM Toolbox, AMCL localization, Nav2 planning, and an RMUL 2026 3v3 Gazebo simulation.

## Selected Projects

<div class="experience-projects">
  {% assign experience_projects = site.projects | sort: "importance" %}
  {% for project in experience_projects %}
    {% include experience-project.liquid %}
  {% endfor %}
</div>
