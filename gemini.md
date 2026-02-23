# ♊ Gemini Project Constitution

## 1. Data Schemas

### Testimonial
```json
{
  "id": "number",
  "name": "string",
  "role": "string",
  "content": "string",
  "rating": "number (1-5)",
  "image": "string (url)"
}
```

### HolographicHotspot
```json
{
  "id": "string",
  "x": "number",
  "y": "number",
  "label": "string",
  "sub": "string",
  "details": "string",
  "direction": "'left' | 'right'",
  "lineLength": "number",
  "labelPosition": "'top' | 'bottom'"
}
```

## 2. Behavioral Rules
- **Tone**: Premium, Trustworthy, Professional, Authoritative but Accessible.
- **Design Philosophy**: "Wow" factor. vibrant, gradients, glassmorphism, smooth animations.
- **Mobile First**: All features must be fully accessible and visually optimzed for mobile devices.
- **No Placeholders**: Use `generate_image` or real data.

## 3. Architectural Invariants
- **Framework**: React + Vite (TypeScript)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Deployment**: Vercel (Target/Assumed)

## 4. Maintenance Log
- **2026-02-17**: Initialized B.L.A.S.T. framework. Mobile optimization of Hero (opacity boost) and Testimonials (dots fix).
