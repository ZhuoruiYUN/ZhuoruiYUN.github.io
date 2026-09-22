---
title: "Quadhopper: Dynamics-Informed RL for a Monopedal Hopping Quadcopter"
date: 2026-01-01
description: "Dynamics-informed reinforcement learning and sim-to-real validation for agile, energy-efficient hopping with a monopedal quadcopter."
summary: "Dynamics-informed reinforcement learning and sim-to-real validation for agile, energy-efficient hopping with a monopedal quadcopter."
tags: ["Robotics", "Reinforcement Learning", "Sim-to-real", "Demo Video"]
featured_image: "/images/projects/crazyflie.svg"
weight: 10
demo_status: "Demo video"
demo_label: "Simulation and Hardware Deployment Demo"
demo_url: "https://youtu.be/qoDJDObiaZM"
demo_youtube: "https://www.youtube-nocookie.com/embed/qoDJDObiaZM"
---

Quadhopper is a sim-to-real reinforcement learning project on agile, energy-efficient hopping with a monopedal quadcopter. The work combines Isaac Lab training, dynamics-aware modeling, embedded deployment, and motion-capture validation on a custom hardware platform.

## Contributions

- Trained a direct estimated-state-to-motor PPO policy in Isaac Lab with 4,096 parallel environments, 37-dimensional observations, and 100 Hz four-motor control.
- Incorporated measured motor lag, action delay, quadratic thrust mapping, and contact-rich stance/flight transitions into hardware-aware training.
- Built a 183 g STM32F103C8T6 platform with MPU6050 sensing and nRF24L01 communication for real-time deployment.
- Deployed the ONNX policy at 100 Hz with 200 Hz eight-camera Vicon motion capture and a 15-state IMU-Vicon error-state Kalman filter.
- In representative hardware tests, reduced cycle-averaged measured electrical power by 30.7% and normalized thrust by 49.8% relative to a tuned PID baseline.

## Publications

- R. Chen, Q. Zhang, Z. Zhong, **Z. Yun**, Y. Or, and M. Liu, ["Dynamics-Informed Reinforcement Learning for Agile and Energy-Efficient Locomotion of a Monopedal Hopping Quadcopter"](https://arxiv.org/abs/2609.15399), *arXiv preprint*, 2026.
- R. Chen, Q. Zhang, Z. Zhong, **Z. Yun**, Y. Or, and M. Liu, ["Learning to Exploit Passive Dynamics for Energy-Efficient Target Hopping of a Spring-Legged Quadcopter"](https://arxiv.org/abs/2609.15447), *arXiv preprint*, 2026. Under review at IEEE RA-L.
