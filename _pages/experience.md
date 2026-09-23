---
layout: page
title: experience
permalink: /experience/
description: research, competition, and engineering experience.
nav: true
nav_order: 4
---

## RoboMaster KongFu Team, GTIIT
**Algorithm Group Member & Electrical Control Team Lead, Sentry Robot** · Jun 2025 - Present

- Lead embedded control development, actuator debugging, and system-level electrical integration for the Sentry Robot.
- Designed asynchronous UART/CAN communication between the onboard computer and STM32 low-level control.
- Developed a ROS 2 Humble navigation stack with Livox MID360 3D LiDAR, SLAM Toolbox, AMCL localization, Nav2 planning, and an RMUL 2026 3v3 Gazebo simulation.

## Selected Projects

<div class="experience-projects">
  {% assign experience_projects = site.projects | sort: "importance" %}
  {% for project in experience_projects %}
    {% include experience-project.liquid %}
  {% endfor %}
</div>
