---
title: "Permanent-Magnet Brushed DC Motor Prototype and Simulation Study"
date: 2026-06-05
description: "An electromechanical actuator report combining a physical PM brushed DC motor prototype, SolidWorks housing design, magnetic-circuit reasoning, and simulation-based optimization."
summary: "Actuator report covering PM brushed DC motor prototyping, magnetic reluctance analysis, coupled electrical-mechanical ODE simulation, and parameter-sweep optimization."
tags: ["Actuators", "Electromechanical Systems", "Simulation", "Mechanical Design"]
weight: 30
demo_status: "Technical report"
report_pdf: "/files/reports/pm-brushed-dc-motor-prototype-simulation-report.pdf"
report_pdf_label: "Download PDF"
---

This report studies a **permanent-magnet brushed DC motor** through both physical prototyping and simulation. The physical system used a custom SolidWorks-designed outer housing and FDM-printed mechanical parts, while the simulation explored motor behavior through magnetic-circuit and dynamic modeling.

## Highlights

- Designed a custom motor housing and integration structure in SolidWorks.
- Built a physical prototype using commercial rotor, magnet, and brush subassemblies from a KIT-160MT30 motor.
- Compared the hybrid prototype against fully 3D-printed motor concepts using magnetic-circuit reasoning.
- Modeled the motor with coupled electrical and mechanical ODEs.
- Included reluctance, air-gap flux, torque constant, back-EMF, copper loss, iron loss, mechanical loss, and fan-load behavior.
- Performed a 1400-point parameter sweep to study efficiency and design tradeoffs.

## Results

The simulation identified an optimized design reaching **92.26%** steady-state efficiency at **46,308 rpm** under the assumed model and load conditions. The analysis also showed that return-path reluctance and voltage selection strongly influence the performance ceiling.

## Why It Matters

This report supports my robotics-hardware direction by showing actuator-level reasoning: mechanical integration, magnetic design tradeoffs, dynamic simulation, and quantitative optimization.
