---
title: "National Undergraduate Electronics Design Contest (NUEDC) - H-Problem Vision-Based Ball-Balancing Cart"
date: 2026-08-04
description: "A NUEDC H-problem cart-mounted ball-balancing motion-control system using K230/CanMV vision to estimate ball position and feed position feedback into embedded motor control."
summary: "A NUEDC H-problem cart-mounted ball-balancing system combining K230/CanMV visual position feedback, embedded firmware, motor control, and on-site competition integration."
tags: ["Embedded Systems", "Computer Vision", "Mobile Robot", "Motion Control", "PID Control", "Demo Video"]
featured_image: "/images/projects/nuedc-car-cover.jpg"
weight: 30
demo_status: "Demo video"
demo_label: "Project Demo"
demo_url: "https://youtu.be/ng9_NiQi5Is"
demo_youtube: "https://www.youtube-nocookie.com/embed/ng9_NiQi5Is"
---

This project was developed for the **National Undergraduate Electronics Design Contest (NUEDC)** from July 31 to August 4, 2026. I served as **team captain** and led the on-site integration of the **H-problem cart-mounted ball-balancing motion-control system**, which received a **Provincial Third Prize**.

The core of the balancing system was a **K230 / CanMV vision module** that detected the ball and returned its position as feedback for closed-loop control. This made the project more than a generic competition vehicle: it combined visual perception, embedded firmware, motor actuation, hardware debugging, and deadline-driven competition execution.

## System Scope

- Led team development, firmware implementation, hardware debugging, and competition execution during the NUEDC on-site build period.
- Built a vision-feedback pipeline using **K230 / CanMV** to estimate the ball position and provide real-time position feedback for the balancing controller.
- Developed **MSPM0G3507** firmware integrating position feedback, encoders, motor drivers, OLED display, and UART/I2C communication.
- Implemented cascaded **ball-position / wheel-speed control** for the cart-mounted balancing task.
- Tuned adaptive motion logic, incremental PID, automatic lap-stop detection, and fault-handling behavior to improve robustness during repeated runs.
- Prepared video material showing the behavior of the physical cart and balancing system.

## What This Demonstrates

- Vision-based feedback control with a K230 / CanMV perception module.
- Embedded C development under real-time hardware constraints.
- Practical sensor integration, communication debugging, and actuator coordination.
- Competition-oriented control tuning where reliability matters as much as nominal performance.
- Team leadership across perception, firmware, electronics, mechanism debugging, and final demo execution.

## Next Updates

- Add system photos, wiring/block diagrams, and selected control-loop plots if available.
