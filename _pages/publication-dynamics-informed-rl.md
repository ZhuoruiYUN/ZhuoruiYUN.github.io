---
layout: page
title: "Dynamics-Informed RL for Agile and Energy-Efficient Hopping"
permalink: /publications/dynamics-informed-rl/
description: Simulation study of energy-manifold reinforcement learning for a monopedal hopping quadcopter.
---

This paper develops a **dynamics-informed reinforcement learning framework** for agile, energy-efficient hopping of a monopedal quadcopter in simulation. Its central question is how to learn a stable hopping gait without falling into the common RL failure mode of using continuous aerial thrust to hover at the target height.

## Method

- Regulates a mass-normalized **specific-energy manifold** rather than only instantaneous height, encouraging a stable hybrid limit cycle.
- Rewards thrust that is phase-consistent with spring restitution, so energy is injected when it produces positive mechanical work.
- Uses a nonlinear electromechanical motor model to penalize wasted electrical power and guide the policy away from high-loss operating regions.

## Simulation Findings

In MuJoCo, the PPO policy maintained repeated hopping while tracking commanded forward speeds up to **2.0 m/s**. It learned a pulsed actuation gait: largely coasting during flight and injecting thrust briefly during stance restitution. Compared with continuous-hovering and inefficient-RL baselines, the simulated policy reduced energy consumption by **82%** and **73%**, respectively.

## Scope

This publication focuses on the reward-design and simulation analysis underpinning the project. The companion RA-L manuscript reports the later Isaac Lab training and hardware deployment results.
