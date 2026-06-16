# Portfolio Requirement Specification v1

## Project Overview

Build a personal portfolio website for Le Hoang Thien.

The website should emphasize storytelling, engineering growth, and product impact rather than serving as a simple online resume.

---

# Technology Expectations

Preferred Stack

* Next.js App Router
* TypeScript
* TailwindCSS
* Framer Motion
* Responsive Design

Optional

* Shadcn UI
* MDX for project content

---

# Global Requirements

## Theme

Must support:

* Light Theme
* Dark Theme

Theme toggle required.

---

## Responsive

Must support:

* Mobile
* Tablet
* Desktop

Desktop-first experience.

---

## Accessibility

* Semantic HTML
* Keyboard navigation
* Proper contrast
* Screen reader friendly

---

# Navigation

Navigation Items

* About
* Projects
* Timeline
* Contact

Sticky navigation bar.

Smooth scrolling.

---

# Landing Page Structure

## Section 1 — Hero

Content

* Professional portrait
* Name
* Positioning statement
* Short introduction

Primary CTA

* View Projects

Secondary CTA

* Download Resume

---

## Section 2 — Metrics

Display a maximum of 4 metrics.

Approved Metrics

* 223K+ Users Managed
* 317K+ Transactions Processed
* 270K+ Survey Responses
* 3+ Years Building Products

Do not display revenue metrics.

---

## Section 3 — About

Narrative-driven content.

Focus on:

* Engineering journey
* Product mindset
* Growth toward software engineering

Avoid technology lists.

---

## Section 4 — Featured Projects

Projects

* myU
* MyU ID
* Hung Hau House
* Events Platform

Each card contains:

* Project Name
* Short Description
* Key Impact
* Link to Case Study

---

## Section 5 — Career Timeline

Timeline format.

Focus on evolution.

Not company history.

---

## Section 6 — Currently Learning

Topics

* System Design
* Distributed Systems
* Software Architecture
* Scalability Engineering

Visual style should feel active and ongoing.

---

## Section 7 — Contact

Channels

* Email
* LinkedIn
* GitHub

Simple and professional.

---

# Project Detail Pages

Route Pattern

/projects/[slug]

Required Pages

* /projects/myu
* /projects/myu-id
* /projects/hung-hau-house
* /projects/events
* /projects/face-verification

---

# Case Study Structure

Every featured project must follow:

## Overview

Project summary.

---

## Problem

What problem existed?

Who experienced it?

Why was it important?

---

## Architecture

High-level architecture explanation.

No deep technical diagrams required in v1.

---

## Challenges

Key engineering challenges.

Examples

* Performance
* Scalability
* Authentication
* Realtime updates
* Data consistency

---

## Trade-offs

Important decisions and compromises.

Explain reasoning.

---

## Result

Impact and outcomes.

Use real metrics whenever available.

---

# Motion Guidelines

Allowed

* Fade In
* Slide In
* Hover Elevation
* Smooth Page Transition

Avoid

* Parallax abuse
* Heavy 3D effects
* Distracting animations

---

# Visual Direction

Inspiration

* Apple
* Linear
* Vercel

Principles

* Minimal
* Premium
* Engineering-focused

---

# Future Expansion

Potential Future Sections

* Engineering Notes
* Speaking
* Open Source
* Technical Writing

These are not included in v1.
