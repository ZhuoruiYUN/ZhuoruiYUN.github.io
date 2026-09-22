---
title: "4-DOF Robotic Arm Teaching Pendant"
date: 2025-12-01
description: "An Arduino-based 4-DOF robotic arm teaching system using MG996R servos, PCA9685 PWM control, potentiometer input, filtering, calibration, and software safety limits."
summary: "An Arduino-based 4-DOF robotic arm teaching pendant with servo actuation, physical teaching input, filtering, calibration, and hardware debugging."
tags: ["Robotics", "Manipulator", "Mechatronics", "Arduino", "Demo Video"]
featured_image: "/images/projects/4dof-arm-cover.jpg"
weight: 20
demo_status: "Demo video"
demo_label: "Project Demo"
demo_url: "https://youtube.com/shorts/djf2O4IeioE"
demo_youtube: "https://www.youtube-nocookie.com/embed/djf2O4IeioE"
---

This mechatronics course project focused on building and debugging a **4-DOF robotic arm teaching pendant**. The system connected physical teaching input to servo actuation so that the arm could follow potentiometer-defined joint commands in real time.

Compared with a purely conceptual design project, this project is useful for research outreach because it shows hands-on robotic system integration: actuator control, signal conditioning, hardware debugging, calibration, and software safety.

## System Scope

- Built and debugged a 4-DOF robotic arm teaching system using **Arduino Uno**, **MG996R high-torque servos**, a **PCA9685 16-channel PWM driver**, potentiometers, and function buttons.
- Implemented real-time analog-read mapping from potentiometer voltage to servo angle commands, allowing the arm to follow physical teaching input.
- Added an **exponential moving average (EMA)** filter to suppress analog input noise and reduce servo jitter.
- Used Arduino `constrain()` limits to keep servo commands within safe joint-angle ranges and protect the mechanical structure.
- Built a one-click calibration workflow to align potentiometer polarity, servo direction, and joint zero positions during setup and troubleshooting.
- Diagnosed unstable button readings caused by Arduino Uno pin 13 interference from the onboard LED circuit; reassigned the input to pin 8 and updated wiring/code for more stable command behavior.

## What This Demonstrates

- Robotic arm actuation and joint-level command mapping.
- Practical debugging across electronics, firmware, and mechanism behavior.
- Software safety design for hardware-facing control code.
- Clear video-demonstrable behavior suitable for portfolio and cold-email project links.
