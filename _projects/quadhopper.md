---
layout: page
title: "Quadhopper: Dynamics-Informed RL for a Monopedal Hopping Quadcopter"
description: Dynamics-informed reinforcement learning, embedded deployment, and Vicon validation for agile hopping.
img: assets/img/crazyflie.svg
importance: 1
category: research
---

Quadhopper is a sim-to-real reinforcement learning project on agile, energy-efficient hopping with a monopedal quadcopter. The work combines Isaac Lab training, dynamics-aware modeling, embedded deployment, and motion-capture validation.

## Contributions

- Trained a direct estimated-state-to-motor PPO policy with 4,096 parallel environments, 37-dimensional observations, and 100 Hz four-motor control.
- Incorporated measured motor lag, action delay, quadratic thrust mapping, and contact-rich stance/flight transitions into hardware-aware training.
- Built a 183 g STM32F103C8T6 platform with MPU6050 sensing and nRF24L01 communication; deployed the ONNX policy at 100 Hz with eight-camera Vicon at 200 Hz.
- In representative tests, reduced measured electrical power by 30.7% and normalized thrust by 49.8% relative to a tuned PID baseline.

[Watch the simulation and hardware deployment demo](https://youtu.be/qoDJDObiaZM){: target="_blank"}
