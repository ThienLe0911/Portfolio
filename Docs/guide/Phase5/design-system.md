# Phase 5 — Design System Foundation

## 1) Color System (Semantic)
### Neutral (core)
- background
- surface
- text-primary
- text-secondary
- border

### Brand Accent
- accent-primary
- accent-secondary (chỉ dùng cho highlight phụ)

### Feedback
- success
- warning
- error
- info

## 2) Theme Tokens
### Light
- background: #F7F7F4
- surface: #FFFFFF
- text-primary: #141413
- text-secondary: #4B4B45
- border: #DCDCD4
- accent-primary: #0E4A86

### Dark
- background: #0E1116
- surface: #141922
- text-primary: #F3F5F7
- text-secondary: #A9B2BF
- border: #2A3342
- accent-primary: #66A9FF

## 3) Typography
- Heading font: Sora
- Body font: Manrope
- Mono/supporting data: JetBrains Mono

Scale recommendation:
- Display: 56/64
- H1: 44/52
- H2: 34/42
- H3: 28/36
- H4: 22/30
- Body L: 18/30
- Body M: 16/28
- Body S: 14/24
- Caption: 12/18

## 4) Spacing & Sizing
- Base unit: 4px
- Common spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96
- Section vertical spacing desktop: 96-128
- Section vertical spacing mobile: 56-80

## 5) Radius & Elevation
- Radius scale: 8, 12, 16, 24
- Shadow policy:
  - Card resting: very soft shadow
  - Card hover: +1 elevation level
  - Không dùng shadow nặng cho text blocks

## 6) Component Baseline
- Buttons: Primary, Secondary, Ghost
- Inputs: default, focus, error, disabled
- Cards: ProjectCard, MetricCard, TimelineItem
- Navigation: sticky top bar + mobile drawer

## 7) Accessibility Baseline
- Contrast: WCAG AA tối thiểu cho text/body.
- Focus ring phải luôn nhìn thấy.
- Touch targets >= 44px cho mobile.
