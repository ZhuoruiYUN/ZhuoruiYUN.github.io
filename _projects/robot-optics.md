---
layout: page
title: Vision-Guided Robotic Assembly and Optical Alignment
description: xArm7 manipulation, RGB-D localization, and contact-based Michelson alignment in MuJoCo and Isaac Sim.
img: assets/img/robot-optics-pick-place.gif
img_alt: MuJoCo Cartesian pick-and-place baseline with the xArm7 robot
code_url: https://github.com/AIDROL/robot-arm-control/
experience_role: Robot-Arm Simulation & Control, AIDROL
experience_period: 2026 - Present
importance: 2
category: research
---

This project develops the robot-arm simulation and control pipeline for automated optical experiments. A seven-degree-of-freedom UFACTORY xArm7 assembles optical components, picks up a fine-alignment tool (FAT), adjusts a Michelson interferometer through physical tool contact, and returns the tool before a fresh optical measurement. The implementation spans MuJoCo and native Isaac Sim 5.1 / PhysX, with LightPipes providing simulated optical feedback.

{% include figure.liquid path="assets/img/robot-optics-scene.png" alt="Isaac Sim replay of the xArm7 and assembled optical components" zoomable=true caption="Isaac Sim replay of the verified trajectory. This is a simulation scene, not a hardware experiment." %}

## Perception and Manipulation

- **Cartesian control:** online Jacobian-based motion control for approach, grasp, lift, transport, placement, release, and retreat, rather than replaying a precomputed joint trajectory.
- **Image-derived localization:** ArUco detection in global camera images, wrist RGB-D refinement before grasping, and side-camera observations for tool alignment. Separate camera views expose detection overlays and depth observations for inspection.
- **Contact-aware handling:** STL-based optical housings with grasp recesses and compound collision geometry; frictional gripper contacts, support-settling checks, and placement-error diagnostics.
- **Cross-engine implementation:** shared geometry, perception, and optics interfaces with separate MuJoCo and Isaac backends. Isaac uses native PhysX motion, contacts, and camera rendering; independent forward-kinematics checks validate the recorded robot state.

## Contact-Based Optical Alignment

After assembling five components, the arm grasps a FAT with two motorized hex drivers. The drivers engage the adjustable mirror's knobs; finite-torque actuation changes the mirror orientation through simulated contact. Image-based optical measurements guide bounded adjustments, while insertion-depth and radial-offset checks monitor tool engagement.

LightPipes evaluates the optical planes at their achieved poses. The verification uses an eight-phase reference scan and 16-bit detector images, followed by a new measurement after tool withdrawal and return. This distinguishes alignment while the tool is engaged from alignment retained after release.

## Simulation Results

The archived **November 3, 2026** full run starts from an empty experiment area and completes assembly, contact adjustment, tool return, and independent audit.

| Measure | Recorded result |
| --- | --- |
| Five-component XY placement errors | 0.750-3.458 mm |
| Relative optical tilt at alignment acceptance | 2.526 &micro;rad |
| Tool-return position error | 3.761 mm |
| Fresh phase-scan visibility after tool return | Above the 95% acceptance threshold on both 512 and 1024 grids |
| Recorded unintended contacts | 0 |

{% include figure.liquid path="assets/img/robot-optics-verification.png" alt="Simulated detector images, phase-scan visibility, and optical power before adjustment and after tool return" zoomable=true caption="Archived Isaac / PhysX and LightPipes verification: detector images, feedback progression, and a fresh phase scan after tool return." %}

These results describe **one fixed-layout simulation**, not a cross-layout success rate or hardware accuracy. The cameras and coherent optical model are idealized; tool mechanics and transmission parameters are provisional. Placement uses a downward attraction proxy during release and ideal base holding at the achieved pose. Visibility values near 100% are physically clipped after fitting quantized images and do not imply perfect real-world alignment.

## Code and Branches

- [**main: integrated implementation and verified run**](https://github.com/AIDROL/robot-arm-control/tree/main) includes both simulation backends, the optical-feedback pipeline, and archived validation evidence.
- [**vision-grasp-camera-player: development branch**](https://github.com/AIDROL/robot-arm-control/tree/vision-grasp-camera-player) contains the vision-guided grasping, camera-monitoring, and subsequent Michelson / Isaac development. Its work has been merged into `main`; the two branches have identical file contents at this update, rather than representing separate MuJoCo and Isaac versions.

The [full validation report](https://github.com/AIDROL/robot-arm-control/blob/main/docs/isaac-michelson-validation-2026-11-03.md) documents acceptance criteria, measurements, modeling assumptions, and failed development runs. The [camera and optics viewer documentation](https://github.com/AIDROL/robot-arm-control/blob/main/docs/isaac-camera-optics-view.md) describes replay and sensor inspection.
