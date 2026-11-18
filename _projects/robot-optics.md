---
layout: page
title: Vision-Guided Robotic Assembly and Optical Alignment
description: An xArm7 assembles five optical components and uses detector feedback to align a Michelson interferometer in simulation.
img: assets/img/robot-optics-pick-place.gif
img_alt: MuJoCo Cartesian pick-and-place baseline with the xArm7 robot
demo_url: /projects/robot-optics/#assembly-replay
code_url: https://github.com/AIDROL/robot-arm-control/
experience_role: Robot-Arm Simulation & Control, AIDROL
experience_period: 2026 - Present
importance: 2
category: research
---

In this AIDROL project, a seven-axis xArm7 builds a Michelson interferometer and adjusts one mirror until the two light beams produce high-contrast interference fringes. The project uses MuJoCo for manipulation experiments and Isaac Sim 5.1 for the assembly and alignment replay below.

<h2 id="assembly-replay">Assembly and alignment replay</h2>

<figure>
  <video class="w-100 rounded" controls playsinline preload="metadata" aria-label="Simulated xArm7 assembly and mirror alignment" poster="{{ '/assets/img/robot-optics-scene.png' | relative_url }}">
    <source src="{{ '/assets/video/xarm7-michelson.mp4' | relative_url }}" type="video/mp4">
  </video>
  <figcaption class="caption">November 18, 2026 · 53 seconds at 5× speed · <a href="{{ '/assets/video/xarm7-michelson.mp4' | relative_url }}">Open MP4</a></figcaption>
</figure>

Starting with an empty work area, the arm places five components and picks up a fine alignment tool (FAT) modeled from its STEP design. A camera on the tool locates an ArUco marker on the mirror mount. The tool turns two adjusters through contact, using simulated detector readings to guide each correction. After the arm returns the tool, a final measurement checks whether the alignment holds.

| November 18 simulation | Result |
| --- | --- |
| Components placed | 5 of 5, maximum planar error 1.345 mm |
| Mirror adjustments | 12, with zero unintended contacts recorded |
| Tool return position error | 1.347 mm |
| Fringe visibility after tool return | 99.9959% on a 512 × 512 grid and 99.9958% on a 1024 × 1024 grid |

These measurements come from one simulated trajectory. Hardware accuracy still requires calibration and physical testing. The [project repository](https://github.com/AIDROL/robot-arm-control) includes the replay and workflow. The full November 18 trajectory is archived locally.

## Perception and Manipulation

- **Cartesian control:** online Jacobian-based motion control for approach, grasp, lift, transport, placement, release, and retreat, rather than replaying a precomputed joint trajectory.
- **Image-derived localization:** ArUco detection in global camera images, wrist RGB-D refinement before grasping, and side-camera observations for tool alignment. Separate camera views expose detection overlays and depth observations for inspection.
- **Contact-aware handling:** STL-based optical housings with grasp recesses and compound collision geometry; frictional gripper contacts, support-settling checks, and placement-error diagnostics.
- **Cross-engine implementation:** shared geometry, perception, and optics interfaces with separate MuJoCo and Isaac backends. Isaac uses native PhysX motion, contacts, and camera rendering; independent forward-kinematics checks validate the recorded robot state.

## Contact-Based Optical Alignment

After assembling five components, the arm grasps a FAT with two motorized hex drivers. The drivers engage the adjustable mirror's knobs; finite-torque actuation changes the mirror orientation through simulated contact. Image-based optical measurements guide bounded adjustments, while insertion-depth and radial-offset checks monitor tool engagement.

LightPipes evaluates the optical planes at their achieved poses. The verification uses an eight-phase reference scan and 16-bit detector images, followed by a new measurement after tool withdrawal and return. This distinguishes alignment while the tool is engaged from alignment retained after release.

## Earlier simulation results

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

[November 3 validation report](https://github.com/AIDROL/robot-arm-control/blob/main/docs/isaac-michelson-validation-2026-11-03.md) · [Camera and optics viewer](https://github.com/AIDROL/robot-arm-control/blob/main/docs/isaac-camera-optics-view.md)
