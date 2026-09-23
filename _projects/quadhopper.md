---
layout: page
title: "Quadhopper: Dynamics-Informed RL for a Monopedal Hopping Quadcopter"
description: Dynamics-informed reinforcement learning, embedded deployment, and Vicon validation for agile hopping.
img: assets/img/quadhopper-simulation.gif
preview_youtube_id: 7nM_AH9GI1o
demo_url: https://youtu.be/7nM_AH9GI1o
demo_label: Simulation vs. Hardware Demo
experience_role: Undergraduate Researcher, Bio-inspired Mechatronics Laboratory
experience_period: Jul 2025 - Present
importance: 1
category: research
---

Quadhopper is a sim-to-real reinforcement learning project on agile, energy-efficient hopping with a monopedal quadcopter. The work combines Isaac Lab training, dynamics-aware modeling, embedded deployment, and motion-capture validation.

## Contributions

- Trained a direct estimated-state-to-motor PPO policy with 4,096 parallel environments, 37-dimensional observations, and 100 Hz four-motor control.
- Incorporated measured motor lag, action delay, quadratic thrust mapping, and contact-rich stance/flight transitions into hardware-aware training.
- Built a 183 g STM32F103C8T6 platform with MPU6050 sensing and nRF24L01 communication; deployed the ONNX policy at 100 Hz with eight-camera Vicon at 200 Hz.
- In representative tests, reduced measured electrical power by 30.7% and normalized thrust by 49.8% relative to a tuned PID baseline.

## Simulation Results

The Isaac Lab rollout below shows repeated stance--flight cycles over a 20 s simulation window. The traces include position and velocity, attitude and angular velocity, spring displacement and velocity, together with per-rotor thrust and normalized motor inputs.

![Quadhopper simulation rollout showing state, spring response, rotor thrust, and motor commands](/assets/img/quadhopper-simulation-results.png)
