---
title: "Kinematic and Dynamic Analysis of ABB IRB 2400"
date: 2026-01-24
description: "A robotics final project analyzing the ABB IRB 2400 manipulator through MDH modeling, inverse kinematics, trajectory planning, and torque analysis."
summary: "Robotics final project covering MDH modeling, inverse kinematics, synchronized S-curve trajectory planning, Newton-Euler torque analysis, and animation-based verification."
tags: ["Robotics", "Kinematics", "Dynamics", "Trajectory Planning"]
weight: 10
demo_status: "Technical report"
report_pdf: "/files/reports/abb-irb2400-kinematics-dynamics-report.pdf"
report_pdf_label: "Download PDF"
---

This report studies the **ABB IRB 2400/10** industrial manipulator for a circular welding-motion task. The work connects robot geometry, feasible joint configurations, trajectory generation, and dynamic torque requirements into a complete task-level analysis.

## Highlights

- Built the robot model using the Modified Denavit-Hartenberg convention.
- Derived forward kinematics to map joint configurations to tool-frame motion.
- Solved inverse kinematics for the initial pose and the welding start point while checking reachability, continuity, and joint-limit feasibility.
- Applied synchronized S-curve trajectory planning to move between poses under velocity and acceleration constraints.
- Estimated joint torques using an approximate Newton-Euler dynamic model.
- Generated an animation to verify the kinematic model, trajectory execution, and overall motion behavior.

## Why It Matters

This report is useful as a writing sample because it shows core robotics fundamentals: frame assignment, transformation matrices, inverse kinematics, motion planning, and dynamic feasibility analysis. It complements my hardware projects by showing the analytical side of robotic-system design.
