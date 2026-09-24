---
layout: page
title: "Learning to Exploit Passive Dynamics for Target Hopping"
permalink: /publications/passive-dynamics/
description: Sim-to-real PPO control and hardware evaluation of a spring-legged quadcopter.
---

This paper presents the **sim-to-real control stack** for a spring-legged quadcopter, with a focus on measured hardware performance rather than simulation-only reward analysis. It compares a direct reinforcement-learning controller against a tuned PID-based control stack on the same physical platform.

## Method

- Trains a direct estimated-state-to-motor PPO policy in Isaac Lab with a **37-dimensional observation** and four motor commands, without an explicit hopping state machine or low-level attitude PID.
- Combines energy-manifold and apex-state shaping with an efficiency objective based on a **history-aware electrical-power estimator**.
- Models action delay and motor dynamics during training, then deploys the ONNX policy at 100 Hz using Vicon, IMU, and Kalman-filtered state estimates.

## Hardware Results

In representative hardware runs, the PPO-based stack reduced cycle-averaged measured electrical power by **30.7%** and mean normalized total thrust by **49.8%** relative to the tuned PID stack. It retained repeatable commanded-height hopping from **0.8 m to 1.4 m**, produced more concentrated landings, and showed near-ballistic descent consistent with greater use of the leg's passive dynamics.

## Scope

This publication is the experimental companion to the dynamics-informed RL study: it validates the learned controller on the 183 g platform using real sensing, communication, and power measurements.
