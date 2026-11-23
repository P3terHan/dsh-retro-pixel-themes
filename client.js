window.__ModuleLoader__.load({
  id: 'dsh-retro-pixel-themes',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const NS = 'themes';
    const PANEL_ID = 'themes';
    const STORAGE_KEY = 'dsh.look-studio.style';

    const EN = {
  "label": "Retro Pixel",
  "title": "Retro Pixel Themes",
  "subtitle": "Choose a theme for the entire app. Every surface, the sidebar, text and accents change together — and your choice is remembered.",
  "reset": "System default",
  "hint": "Changes apply instantly. “System default” restores the built-in light / dark theme.",
  "pixelBadge": "Pixel",
  "aurora.name": "Aurora",
  "aurora.desc": "Cool indigo daylight with soft blue surfaces.",
  "midnight.name": "Midnight",
  "midnight.desc": "Deep navy dark with crisp blue accents.",
  "ember.name": "Ember",
  "ember.desc": "Warm charcoal and glowing amber.",
  "verdant.name": "Verdant",
  "verdant.desc": "Fresh mint daylight with green accents.",
  "pixel.name": "Terminal",
  "pixel.desc": "Hacker terminal: phosphor green on black, monospace, prompt cursor and green selection.",
  "paper.name": "Paper",
  "paper.desc": "Warm, low-glare paper tone for comfortable long reading.",
  "pixel-amber.name": "Phosphor Amber",
  "pixel-amber.desc": "True monochrome amber phosphor CRT: vignette, bloom and scanlines.",
  "pixel-sunset.name": "Sunset Dune",
  "pixel-sunset.desc": "Dusk gradient of amber, rose and violet with a soft warm glow.",
  "pixel-ice.name": "Ice CRT",
  "pixel-ice.desc": "Cool cyan CRT glow.",
  "pixel-magenta.name": "Synthwave",
  "pixel-magenta.desc": "Hot magenta vaporwave neon.",
  "pixel-mono.name": "Retro TV",
  "pixel-mono.desc": "Old black-and-white television: high-contrast grayscale, scanlines, film grain and a rounded CRT screen.",
  "pixel-boy.name": "Pixel Boy",
  "pixel-boy.desc": "Muted pale-green handheld LCD with soft blur and scanlines."
};
    const ZH = {
  "label": "复古像素主题",
  "title": "复古像素主题",
  "subtitle": "为整个应用选择一种主题。每个界面、侧边栏、文字与强调色都会一起改变，选择会被记住。",
  "reset": "系统默认",
  "hint": "选择会立即生效。“系统默认”会恢复内置的浅色 / 深色主题。",
  "pixelBadge": "像素",
  "aurora.name": "极光",
  "aurora.desc": "冷色调靛蓝日光，柔和蓝色表面。",
  "midnight.name": "午夜",
  "midnight.desc": "深邃藏青暗色，搭配清晰的蓝色强调。",
  "ember.name": "余烬",
  "ember.desc": "温暖炭灰与流动琥珀色。",
  "verdant.name": "翠绿",
  "verdant.desc": "清新薄荷日光，绿色强调。",
  "pixel.name": "终端",
  "pixel.desc": "黑客终端：黑底荧光绿、等宽字体、提示符光标与绿色选中。",
  "paper.name": "暖纸",
  "paper.desc": "温和低刺眼的暖纸色，长时间阅读更舒适。",
  "pixel-amber.name": "真实琥珀 CRT",
  "pixel-amber.desc": "纯单色琥珀磷光终端：暗角、辉光与粗扫描线，怀旧专注。",
  "pixel-sunset.name": "暮色沙丘",
  "pixel-sunset.desc": "琥珀、玫瑰与暮紫的黄昏渐变，柔和暖光。",
  "pixel-ice.name": "冰蓝屏",
  "pixel-ice.desc": "清冷的冰蓝 CRT 荧光。",
  "pixel-magenta.name": "霓虹品红",
  "pixel-magenta.desc": "品红霓虹的蒸汽波风。",
  "pixel-mono.name": "复古黑白电视",
  "pixel-mono.desc": "复古旧式黑白电视：高对比灰阶、扫描线、胶片颗粒与圆角 CRT 屏。",
  "pixel-boy.name": "像素掌机",
  "pixel-boy.desc": "低饱和浅绿掌机液晶屏：柔和模糊与扫描线。"
};

    const STYLES = [
  {
    "id": "aurora",
    "colorScheme": "light",
    "preview": {
      "bg": "#f5f7ff",
      "panel": "#ffffff",
      "sidebar": "#e9eefc",
      "text": "#17203a",
      "sub": "#6b7794",
      "accent": "#5b6ef5",
      "border": "#dbe2f7"
    },
    "tokens": {
      "--dsw-alias-bg-base": "#f5f7ff",
      "--dsw-alias-bg-layer-1": "#ffffff",
      "--dsw-alias-bg-layer-2": "#ffffff",
      "--dsw-alias-bg-layer-3": "#f1f5ff",
      "--dsw-alias-bg-overlay": "#ffffff",
      "--dsw-alias-label-primary": "#17203a",
      "--dsw-alias-label-secondary": "#5a6684",
      "--dsw-alias-label-tertiary": "#7a86a3",
      "--dsw-alias-label-caption": "#97a1ba",
      "--dsw-alias-border-l1": "#e6ebf9",
      "--dsw-alias-border-l2": "#d5ddf2",
      "--dsw-alias-border-l3": "#c7d1ec",
      "--dsw-alias-brand-primary": "#4f63e6",
      "--dsw-alias-brand-text": "#ffffff",
      "--dsw-alias-state-business-primary": "#4f63e6",
      "--dsw-alias-label-on-color": "#ffffff",
      "--dsw-alias-interactive-bg-hover": "rgba(79,99,230,0.08)",
      "--dsw-alias-interactive-bg-active": "rgba(79,99,230,0.14)",
      "--dsw-alias-button-primary-fill": "#4f63e6",
      "--dsw-alias-button-primary-hover": "#3f52d4",
      "--dsw-alias-markdown-code-block": "#eef1fc",
      "--dsw-alias-markdown-inline-code": "#eaeefb",
      "--dsw-alias-card-fill": "#ffffff",
      "--dsw-alias-card-fill-hover": "#f2f5ff",
      "--dsw-alias-toast-bg": "#1c2440",
      "--dsw-alias-toast-label": "#ffffff",
      "--dsw-alias-tooltip-bg": "#1c2440",
      "--dsw-alias-tooltip-label": "#ffffff",
      "--dsw-alias-hovercard-bg": "#1c2440",
      "--dsw-specific-sidebar-fill": "#e9eefc",
      "--dsw-specific-sidebar-nav-item-active": "#dde5fb",
      "--dsw-specific-sidebar-nav-item-active-accent": "#cdd8f9"
    }
  },
  {
    "id": "midnight",
    "colorScheme": "dark",
    "preview": {
      "bg": "#0a0f1e",
      "panel": "#121a30",
      "sidebar": "#0c1426",
      "text": "#e6ecff",
      "sub": "#93a3c9",
      "accent": "#6ea8fe",
      "border": "#22305a"
    },
    "tokens": {
      "--dsw-alias-bg-base": "#0a0f1e",
      "--dsw-alias-bg-layer-1": "#121a30",
      "--dsw-alias-bg-layer-2": "#16213b",
      "--dsw-alias-bg-layer-3": "#1b2847",
      "--dsw-alias-bg-overlay": "#18233f",
      "--dsw-alias-label-primary": "#e6ecff",
      "--dsw-alias-label-secondary": "#a9b8dd",
      "--dsw-alias-label-tertiary": "#7f90ba",
      "--dsw-alias-label-caption": "#6b7ba6",
      "--dsw-alias-border-l1": "rgba(130,160,255,0.10)",
      "--dsw-alias-border-l2": "rgba(130,160,255,0.16)",
      "--dsw-alias-border-l3": "rgba(130,160,255,0.22)",
      "--dsw-alias-brand-primary": "#7fb0ff",
      "--dsw-alias-brand-text": "#071022",
      "--dsw-alias-state-business-primary": "#6ea8fe",
      "--dsw-alias-label-on-color": "#061024",
      "--dsw-alias-interactive-bg-hover": "rgba(120,160,255,0.10)",
      "--dsw-alias-interactive-bg-active": "rgba(120,160,255,0.18)",
      "--dsw-alias-button-primary-fill": "#6ea8fe",
      "--dsw-alias-button-primary-hover": "#8bbcff",
      "--dsw-alias-markdown-code-block": "#101a30",
      "--dsw-alias-markdown-inline-code": "#16213b",
      "--dsw-alias-card-fill": "#121a30",
      "--dsw-alias-card-fill-hover": "#17223c",
      "--dsw-alias-toast-bg": "#1b2847",
      "--dsw-alias-toast-label": "#eaf1ff",
      "--dsw-alias-tooltip-bg": "#1b2847",
      "--dsw-alias-tooltip-label": "#eaf1ff",
      "--dsw-alias-hovercard-bg": "#1b2847",
      "--dsw-specific-sidebar-fill": "#0c1426",
      "--dsw-specific-sidebar-nav-item-active": "#17233f",
      "--dsw-specific-sidebar-nav-item-active-accent": "#20324f"
    }
  },
  {
    "id": "ember",
    "colorScheme": "dark",
    "preview": {
      "bg": "#17110d",
      "panel": "#221812",
      "sidebar": "#1a120e",
      "text": "#f6e9dd",
      "sub": "#c8a98c",
      "accent": "#ff8a3d",
      "border": "#3a271b"
    },
    "tokens": {
      "--dsw-alias-bg-base": "#17110d",
      "--dsw-alias-bg-layer-1": "#221812",
      "--dsw-alias-bg-layer-2": "#2b1e16",
      "--dsw-alias-bg-layer-3": "#34251b",
      "--dsw-alias-bg-overlay": "#2a1d15",
      "--dsw-alias-label-primary": "#f7ebdf",
      "--dsw-alias-label-secondary": "#d3b79b",
      "--dsw-alias-label-tertiary": "#ad8f72",
      "--dsw-alias-label-caption": "#93785e",
      "--dsw-alias-border-l1": "rgba(255,160,100,0.10)",
      "--dsw-alias-border-l2": "rgba(255,160,100,0.16)",
      "--dsw-alias-border-l3": "rgba(255,160,100,0.24)",
      "--dsw-alias-brand-primary": "#ff9a4d",
      "--dsw-alias-brand-text": "#1a0f07",
      "--dsw-alias-state-business-primary": "#ff8a3d",
      "--dsw-alias-label-on-color": "#1a0f07",
      "--dsw-alias-interactive-bg-hover": "rgba(255,140,70,0.10)",
      "--dsw-alias-interactive-bg-active": "rgba(255,140,70,0.18)",
      "--dsw-alias-button-primary-fill": "#ff8a3d",
      "--dsw-alias-button-primary-hover": "#ffa45f",
      "--dsw-alias-markdown-code-block": "#1e140e",
      "--dsw-alias-markdown-inline-code": "#2a1d15",
      "--dsw-alias-card-fill": "#221812",
      "--dsw-alias-card-fill-hover": "#2a1d15",
      "--dsw-alias-toast-bg": "#35241a",
      "--dsw-alias-toast-label": "#ffeeda",
      "--dsw-alias-tooltip-bg": "#35241a",
      "--dsw-alias-tooltip-label": "#ffeeda",
      "--dsw-alias-hovercard-bg": "#35241a",
      "--dsw-specific-sidebar-fill": "#1a120e",
      "--dsw-specific-sidebar-nav-item-active": "#2e2117",
      "--dsw-specific-sidebar-nav-item-active-accent": "#3a2919"
    }
  },
  {
    "id": "verdant",
    "colorScheme": "light",
    "preview": {
      "bg": "#f3fbf5",
      "panel": "#ffffff",
      "sidebar": "#e6f4ea",
      "text": "#10241a",
      "sub": "#4c6b58",
      "accent": "#18a866",
      "border": "#cfe8d8"
    },
    "tokens": {
      "--dsw-alias-bg-base": "#f3fbf5",
      "--dsw-alias-bg-layer-1": "#ffffff",
      "--dsw-alias-bg-layer-2": "#ffffff",
      "--dsw-alias-bg-layer-3": "#eef9f1",
      "--dsw-alias-bg-overlay": "#ffffff",
      "--dsw-alias-label-primary": "#10241a",
      "--dsw-alias-label-secondary": "#40584a",
      "--dsw-alias-label-tertiary": "#5f7768",
      "--dsw-alias-label-caption": "#7d9486",
      "--dsw-alias-border-l1": "#e2f1e8",
      "--dsw-alias-border-l2": "#cfe8d8",
      "--dsw-alias-border-l3": "#bcdccb",
      "--dsw-alias-brand-primary": "#17a862",
      "--dsw-alias-brand-text": "#ffffff",
      "--dsw-alias-state-business-primary": "#17a862",
      "--dsw-alias-label-on-color": "#ffffff",
      "--dsw-alias-interactive-bg-hover": "rgba(23,168,98,0.08)",
      "--dsw-alias-interactive-bg-active": "rgba(23,168,98,0.14)",
      "--dsw-alias-button-primary-fill": "#17a862",
      "--dsw-alias-button-primary-hover": "#129255",
      "--dsw-alias-markdown-code-block": "#ecf8f0",
      "--dsw-alias-markdown-inline-code": "#e6f5ec",
      "--dsw-alias-card-fill": "#ffffff",
      "--dsw-alias-card-fill-hover": "#eef9f1",
      "--dsw-alias-toast-bg": "#123324",
      "--dsw-alias-toast-label": "#ffffff",
      "--dsw-alias-tooltip-bg": "#123324",
      "--dsw-alias-tooltip-label": "#ffffff",
      "--dsw-alias-hovercard-bg": "#123324",
      "--dsw-specific-sidebar-fill": "#e6f4ea",
      "--dsw-specific-sidebar-nav-item-active": "#d8efe1",
      "--dsw-specific-sidebar-nav-item-active-accent": "#c9e9d6"
    }
  },
  {
    "id": "paper",
    "colorScheme": "light",
    "preview": {
      "bg": "#f4ecd8",
      "panel": "#fbf6ea",
      "sidebar": "#ece0c8",
      "text": "#3d3226",
      "sub": "#6b5a43",
      "accent": "#a86a35",
      "border": "#dccfb3"
    },
    "tokens": {
      "--dsw-alias-bg-base": "#f4ecd8",
      "--dsw-alias-bg-layer-1": "#fbf6ea",
      "--dsw-alias-bg-layer-2": "#fbf6ea",
      "--dsw-alias-bg-layer-3": "#f6eede",
      "--dsw-alias-bg-overlay": "#fbf6ea",
      "--dsw-alias-label-primary": "#3d3226",
      "--dsw-alias-label-secondary": "#6b5a43",
      "--dsw-alias-label-tertiary": "#8a775c",
      "--dsw-alias-label-caption": "#a3917a",
      "--dsw-alias-border-l1": "#e9dec7",
      "--dsw-alias-border-l2": "#dccfb3",
      "--dsw-alias-border-l3": "#cfbf9e",
      "--dsw-alias-brand-primary": "#a86a35",
      "--dsw-alias-brand-text": "#fff8ec",
      "--dsw-alias-state-business-primary": "#a86a35",
      "--dsw-alias-label-on-color": "#fff8ec",
      "--dsw-alias-interactive-bg-hover": "rgba(168,106,53,0.08)",
      "--dsw-alias-interactive-bg-active": "rgba(168,106,53,0.14)",
      "--dsw-alias-button-primary-fill": "#a86a35",
      "--dsw-alias-button-primary-hover": "#915827",
      "--dsw-alias-markdown-code-block": "#efe5cf",
      "--dsw-alias-markdown-inline-code": "#ede2cb",
      "--dsw-alias-card-fill": "#fbf6ea",
      "--dsw-alias-card-fill-hover": "#f4ecd8",
      "--dsw-alias-toast-bg": "#3d3226",
      "--dsw-alias-toast-label": "#fbf6ea",
      "--dsw-alias-tooltip-bg": "#3d3226",
      "--dsw-alias-tooltip-label": "#fbf6ea",
      "--dsw-alias-hovercard-bg": "#3d3226",
      "--dsw-specific-sidebar-fill": "#ece0c8",
      "--dsw-specific-sidebar-nav-item-active": "#e3d4b8",
      "--dsw-specific-sidebar-nav-item-active-accent": "#d8c6a3"
    }
  },
  {
    "id": "pixel",
    "colorScheme": "dark",
    "preview": {
      "bg": "#0d0d14",
      "panel": "#16161f",
      "sidebar": "#101018",
      "text": "#d8ffcf",
      "sub": "#7fae8a",
      "accent": "#39ff14",
      "border": "#2a3a2a"
    },
    "tokens": {
      "--dsw-alias-bg-base": "#0d0d14",
      "--dsw-alias-bg-layer-1": "#16161f",
      "--dsw-alias-bg-layer-2": "#1d1d29",
      "--dsw-alias-bg-layer-3": "#242432",
      "--dsw-alias-bg-overlay": "#1a1a26",
      "--dsw-alias-label-primary": "#d8ffcf",
      "--dsw-alias-label-secondary": "#9fe8a8",
      "--dsw-alias-label-tertiary": "#74c47e",
      "--dsw-alias-label-caption": "#5aa864",
      "--dsw-alias-border-l1": "#23331f",
      "--dsw-alias-border-l2": "#2f4a2a",
      "--dsw-alias-border-l3": "#3d6136",
      "--dsw-alias-brand-primary": "#39ff14",
      "--dsw-alias-brand-text": "#04140a",
      "--dsw-alias-state-business-primary": "#39ff14",
      "--dsw-alias-label-on-color": "#04140a",
      "--dsw-alias-interactive-bg-hover": "rgba(57,255,20,0.10)",
      "--dsw-alias-interactive-bg-active": "rgba(57,255,20,0.18)",
      "--dsw-alias-button-primary-fill": "#39ff14",
      "--dsw-alias-button-primary-hover": "#6bff4f",
      "--dsw-alias-markdown-code-block": "#11181a",
      "--dsw-alias-markdown-inline-code": "#1a2420",
      "--dsw-alias-card-fill": "#16161f",
      "--dsw-alias-card-fill-hover": "#1d1d29",
      "--dsw-alias-toast-bg": "#062d12",
      "--dsw-alias-toast-label": "#baffc9",
      "--dsw-alias-tooltip-bg": "#062d12",
      "--dsw-alias-tooltip-label": "#baffc9",
      "--dsw-alias-hovercard-bg": "#062d12",
      "--dsw-specific-sidebar-fill": "#101018",
      "--dsw-specific-sidebar-nav-item-active": "#182a18",
      "--dsw-specific-sidebar-nav-item-active-accent": "#1f3a1f"
    }
  },
  {
    "id": "pixel-amber",
    "colorScheme": "dark",
    "preview": {
      "bg": "#120c06",
      "panel": "#1a1109",
      "sidebar": "#0e0905",
      "text": "#ffb642",
      "sub": "#cc8a2e",
      "accent": "#ffb000",
      "border": "#3a2708"
    },
    "tokens": {
      "--dsw-alias-bg-base": "#120c06",
      "--dsw-alias-bg-layer-1": "#1a1109",
      "--dsw-alias-bg-layer-2": "#211608",
      "--dsw-alias-bg-layer-3": "#2a1c0a",
      "--dsw-alias-bg-overlay": "#1d1307",
      "--dsw-alias-label-primary": "#ffc24d",
      "--dsw-alias-label-secondary": "#e0a23a",
      "--dsw-alias-label-tertiary": "#c0842c",
      "--dsw-alias-label-caption": "#9c6a24",
      "--dsw-alias-border-l1": "#2a1c0a",
      "--dsw-alias-border-l2": "#3a2708",
      "--dsw-alias-border-l3": "#4d340b",
      "--dsw-alias-brand-primary": "#ffb000",
      "--dsw-alias-brand-text": "#1a1005",
      "--dsw-alias-state-business-primary": "#ffb000",
      "--dsw-alias-label-on-color": "#1a1005",
      "--dsw-alias-link": "#ff8c00",
      "--dsw-alias-interactive-bg-hover": "rgba(255,176,0,0.10)",
      "--dsw-alias-interactive-bg-active": "rgba(255,176,0,0.18)",
      "--dsw-alias-button-primary-fill": "#ffb000",
      "--dsw-alias-button-primary-hover": "#ffc233",
      "--dsw-alias-markdown-code-block": "#160f06",
      "--dsw-alias-markdown-inline-code": "#241708",
      "--dsw-alias-card-fill": "#1a1109",
      "--dsw-alias-card-fill-hover": "#211608",
      "--dsw-alias-toast-bg": "#3a2708",
      "--dsw-alias-toast-label": "#ffe9bf",
      "--dsw-alias-tooltip-bg": "#3a2708",
      "--dsw-alias-tooltip-label": "#ffe9bf",
      "--dsw-alias-hovercard-bg": "#3a2708",
      "--dsw-specific-sidebar-fill": "#0e0905",
      "--dsw-specific-sidebar-nav-item-active": "#241708",
      "--dsw-specific-sidebar-nav-item-active-accent": "#2a1c0a"
    }
  },
  {
    "id": "pixel-ice",
    "colorScheme": "dark",
    "preview": {
      "bg": "#040b12",
      "panel": "#081722",
      "sidebar": "#061019",
      "text": "#d6fbff",
      "sub": "#8fe3f5",
      "accent": "#25e5ff",
      "border": "#123646"
    },
    "tokens": {
      "--dsw-alias-bg-base": "#040b12",
      "--dsw-alias-bg-layer-1": "#081722",
      "--dsw-alias-bg-layer-2": "#0b2030",
      "--dsw-alias-bg-layer-3": "#0f293c",
      "--dsw-alias-bg-overlay": "#091a26",
      "--dsw-alias-label-primary": "#d6fbff",
      "--dsw-alias-label-secondary": "#8fe3f5",
      "--dsw-alias-label-tertiary": "#63b6c9",
      "--dsw-alias-label-caption": "#4890a3",
      "--dsw-alias-border-l1": "#0c2431",
      "--dsw-alias-border-l2": "#123646",
      "--dsw-alias-border-l3": "#1a4c60",
      "--dsw-alias-brand-primary": "#25e5ff",
      "--dsw-alias-brand-text": "#02141a",
      "--dsw-alias-state-business-primary": "#25e5ff",
      "--dsw-alias-label-on-color": "#02141a",
      "--dsw-alias-link": "#8b5cf6",
      "--dsw-alias-interactive-bg-hover": "rgba(37,229,255,0.12)",
      "--dsw-alias-interactive-bg-active": "rgba(37,229,255,0.20)",
      "--dsw-alias-button-primary-fill": "#25e5ff",
      "--dsw-alias-button-primary-hover": "#6bf1ff",
      "--dsw-alias-markdown-code-block": "#071620",
      "--dsw-alias-markdown-inline-code": "#0f293c",
      "--dsw-alias-card-fill": "#081722",
      "--dsw-alias-card-fill-hover": "#0b2030",
      "--dsw-alias-toast-bg": "#123646",
      "--dsw-alias-toast-label": "#d8fbff",
      "--dsw-alias-tooltip-bg": "#123646",
      "--dsw-alias-tooltip-label": "#d8fbff",
      "--dsw-alias-hovercard-bg": "#123646",
      "--dsw-specific-sidebar-fill": "#061019",
      "--dsw-specific-sidebar-nav-item-active": "#0f2b3a",
      "--dsw-specific-sidebar-nav-item-active-accent": "#143a4e"
    }
  },
  {
    "id": "pixel-magenta",
    "colorScheme": "dark",
    "preview": {
      "bg": "#0a0412",
      "panel": "#140825",
      "sidebar": "#0d0618",
      "text": "#ffe6ff",
      "sub": "#d9a0ea",
      "accent": "#ff2bd6",
      "border": "#3d1a5e"
    },
    "tokens": {
      "--dsw-alias-bg-base": "#0a0412",
      "--dsw-alias-bg-layer-1": "#140825",
      "--dsw-alias-bg-layer-2": "#1b0c33",
      "--dsw-alias-bg-layer-3": "#241040",
      "--dsw-alias-bg-overlay": "#170a2a",
      "--dsw-alias-label-primary": "#ffe6ff",
      "--dsw-alias-label-secondary": "#d9a0ea",
      "--dsw-alias-label-tertiary": "#b076c8",
      "--dsw-alias-label-caption": "#8f5aa6",
      "--dsw-alias-border-l1": "#2a1046",
      "--dsw-alias-border-l2": "#3d1a5e",
      "--dsw-alias-border-l3": "#55247e",
      "--dsw-alias-brand-primary": "#ff2bd6",
      "--dsw-alias-brand-text": "#12001a",
      "--dsw-alias-state-business-primary": "#ff2bd6",
      "--dsw-alias-label-on-color": "#12001a",
      "--dsw-alias-link": "#23e6ff",
      "--dsw-alias-interactive-bg-hover": "rgba(255,43,214,0.12)",
      "--dsw-alias-interactive-bg-active": "rgba(255,43,214,0.20)",
      "--dsw-alias-button-primary-fill": "#ff2bd6",
      "--dsw-alias-button-primary-hover": "#ff5fe0",
      "--dsw-alias-markdown-code-block": "#150a24",
      "--dsw-alias-markdown-inline-code": "#241040",
      "--dsw-alias-card-fill": "#140825",
      "--dsw-alias-card-fill-hover": "#1b0c33",
      "--dsw-alias-toast-bg": "#3a1560",
      "--dsw-alias-toast-label": "#ffd9ff",
      "--dsw-alias-tooltip-bg": "#3a1560",
      "--dsw-alias-tooltip-label": "#ffd9ff",
      "--dsw-alias-hovercard-bg": "#3a1560",
      "--dsw-specific-sidebar-fill": "#0d0618",
      "--dsw-specific-sidebar-nav-item-active": "#26103f",
      "--dsw-specific-sidebar-nav-item-active-accent": "#351557"
    }
  },
  {
    "id": "pixel-mono",
    "colorScheme": "dark",
    "preview": {
      "bg": "#080808",
      "panel": "#121212",
      "sidebar": "#0b0b0b",
      "text": "#f4f4f4",
      "sub": "#bdbdbd",
      "accent": "#ffffff",
      "border": "#303030"
    },
    "tokens": {
      "--dsw-alias-bg-base": "#080808",
      "--dsw-alias-bg-layer-1": "#121212",
      "--dsw-alias-bg-layer-2": "#191919",
      "--dsw-alias-bg-layer-3": "#212121",
      "--dsw-alias-bg-overlay": "#141414",
      "--dsw-alias-label-primary": "#f4f4f4",
      "--dsw-alias-label-secondary": "#bdbdbd",
      "--dsw-alias-label-tertiary": "#8c8c8c",
      "--dsw-alias-label-caption": "#6d6d6d",
      "--dsw-alias-border-l1": "#202020",
      "--dsw-alias-border-l2": "#303030",
      "--dsw-alias-border-l3": "#444444",
      "--dsw-alias-brand-primary": "#ffffff",
      "--dsw-alias-brand-text": "#080808",
      "--dsw-alias-state-business-primary": "#ffffff",
      "--dsw-alias-label-on-color": "#080808",
      "--dsw-alias-link": "#e6e6e6",
      "--dsw-alias-interactive-bg-hover": "rgba(255,255,255,0.10)",
      "--dsw-alias-interactive-bg-active": "rgba(255,255,255,0.16)",
      "--dsw-alias-button-primary-fill": "#f4f4f4",
      "--dsw-alias-button-primary-hover": "#ffffff",
      "--dsw-alias-markdown-code-block": "#101010",
      "--dsw-alias-markdown-inline-code": "#191919",
      "--dsw-alias-card-fill": "#121212",
      "--dsw-alias-card-fill-hover": "#191919",
      "--dsw-alias-toast-bg": "#2b2b2b",
      "--dsw-alias-toast-label": "#f4f4f4",
      "--dsw-alias-tooltip-bg": "#2b2b2b",
      "--dsw-alias-tooltip-label": "#f4f4f4",
      "--dsw-alias-hovercard-bg": "#2b2b2b",
      "--dsw-specific-sidebar-fill": "#0b0b0b",
      "--dsw-specific-sidebar-nav-item-active": "#242424",
      "--dsw-specific-sidebar-nav-item-active-accent": "#2d2d2d"
    }
  },
  {
    "id": "pixel-boy",
    "colorScheme": "light",
    "preview": {
      "bg": "#dbe3c9",
      "panel": "#e8eedb",
      "sidebar": "#d0dbbd",
      "text": "#26331f",
      "sub": "#3c4a32",
      "accent": "#5d7a3e",
      "border": "#c4cfae"
    },
    "tokens": {
      "--dsw-alias-bg-base": "#dbe3c9",
      "--dsw-alias-bg-layer-1": "#e8eedb",
      "--dsw-alias-bg-layer-2": "#e8eedb",
      "--dsw-alias-bg-layer-3": "#d4ddbf",
      "--dsw-alias-bg-overlay": "#eff3e6",
      "--dsw-alias-label-primary": "#26331f",
      "--dsw-alias-label-secondary": "#3c4a32",
      "--dsw-alias-label-tertiary": "#556349",
      "--dsw-alias-label-caption": "#6c7a5f",
      "--dsw-alias-border-l1": "#ccd5bb",
      "--dsw-alias-border-l2": "#c4cfae",
      "--dsw-alias-border-l3": "#aeb995",
      "--dsw-alias-brand-primary": "#5d7a3e",
      "--dsw-alias-brand-text": "#eff3e6",
      "--dsw-alias-state-business-primary": "#5d7a3e",
      "--dsw-alias-label-on-color": "#eff3e6",
      "--dsw-alias-link": "#5d7a3e",
      "--dsw-alias-interactive-bg-hover": "rgba(93,122,62,0.10)",
      "--dsw-alias-interactive-bg-active": "rgba(93,122,62,0.16)",
      "--dsw-alias-button-primary-fill": "#5d7a3e",
      "--dsw-alias-button-primary-hover": "#4e6933",
      "--dsw-alias-markdown-code-block": "#d4ddbf",
      "--dsw-alias-markdown-inline-code": "#d0dbbd",
      "--dsw-alias-card-fill": "#e8eedb",
      "--dsw-alias-card-fill-hover": "#dbe3c9",
      "--dsw-alias-toast-bg": "#26331f",
      "--dsw-alias-toast-label": "#eff3e6",
      "--dsw-alias-tooltip-bg": "#26331f",
      "--dsw-alias-tooltip-label": "#eff3e6",
      "--dsw-alias-hovercard-bg": "#26331f",
      "--dsw-specific-sidebar-fill": "#d0dbbd",
      "--dsw-specific-sidebar-nav-item-active": "#c6d1b1",
      "--dsw-specific-sidebar-nav-item-active-accent": "#b8c4a2"
    }
  },
  {
    "id": "pixel-sunset",
    "colorScheme": "dark",
    "preview": {
      "bg": "#2a1626",
      "panel": "#2e1a29",
      "sidebar": "#20111f",
      "text": "#ffe8d6",
      "sub": "#e0a98f",
      "accent": "#ff7a45",
      "border": "#4a2740"
    },
    "tokens": {
      "--dsw-alias-bg-base": "#241322",
      "--dsw-alias-bg-layer-1": "#2e1a29",
      "--dsw-alias-bg-layer-2": "#38202f",
      "--dsw-alias-bg-layer-3": "#43263a",
      "--dsw-alias-bg-overlay": "#2b1826",
      "--dsw-alias-label-primary": "#ffe8d6",
      "--dsw-alias-label-secondary": "#e6b79c",
      "--dsw-alias-label-tertiary": "#c98fa0",
      "--dsw-alias-label-caption": "#a87488",
      "--dsw-alias-border-l1": "#3d2233",
      "--dsw-alias-border-l2": "#4a2740",
      "--dsw-alias-border-l3": "#5e3352",
      "--dsw-alias-brand-primary": "#ff7a45",
      "--dsw-alias-brand-text": "#2a1010",
      "--dsw-alias-state-business-primary": "#ff7a45",
      "--dsw-alias-label-on-color": "#2a1010",
      "--dsw-alias-link": "#f79cb2",
      "--dsw-alias-interactive-bg-hover": "rgba(255,122,69,0.12)",
      "--dsw-alias-interactive-bg-active": "rgba(255,122,69,0.20)",
      "--dsw-alias-button-primary-fill": "#ff7a45",
      "--dsw-alias-button-primary-hover": "#ff9463",
      "--dsw-alias-markdown-code-block": "#20101d",
      "--dsw-alias-markdown-inline-code": "#2e1a29",
      "--dsw-alias-card-fill": "#2e1a29",
      "--dsw-alias-card-fill-hover": "#38202f",
      "--dsw-alias-toast-bg": "#4a2740",
      "--dsw-alias-toast-label": "#ffe8d6",
      "--dsw-alias-tooltip-bg": "#4a2740",
      "--dsw-alias-tooltip-label": "#ffe8d6",
      "--dsw-alias-hovercard-bg": "#4a2740",
      "--dsw-specific-sidebar-fill": "#20111f",
      "--dsw-specific-sidebar-nav-item-active": "#3a1f33",
      "--dsw-specific-sidebar-nav-item-active-accent": "#4a2740"
    }
  }
];

    const CSS = "@font-face{font-family:'VT323';src:url(data:font/woff2;base64,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) format('woff2');font-weight:400;font-style:normal;font-display:swap;size-adjust:120%}\n.dshLookRoot{height:100%;overflow:auto;box-sizing:border-box;padding:36px clamp(20px,4vw,56px) 60px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-base);font-family:var(--dsw-font-family,inherit)}\n.dshLookHeader{max-width:1000px;margin:0 auto 24px}\n.dshLookTitle{margin:0 0 6px;font-size:24px;line-height:1.2;font-weight:680;letter-spacing:-.01em}\n.dshLookSub{margin:0;font-size:14px;line-height:1.55;color:var(--dsw-alias-label-secondary)}\n.dshLookGrid{max-width:1000px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(272px,1fr));gap:16px}\n.dshLookCard{position:relative;padding:0;margin:0;display:block;width:100%;text-align:left;cursor:pointer;overflow:hidden;color:inherit;font:inherit;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-md,12px);transition:transform .12s ease,box-shadow .12s ease,border-color .12s ease}\n.dshLookCard:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(0,0,0,.16);border-color:var(--dsw-alias-border-l3)}\n.dshLookCard:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}\n.dshLookCard[data-active='true']{border-color:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 2px var(--dsw-alias-state-business-primary)}\n.dshLookPreview{height:122px;display:flex;border-bottom:1px solid var(--dsw-alias-border-l1);overflow:hidden}\n.dshLookMeta{display:flex;align-items:flex-start;gap:10px;padding:12px 14px 15px}\n.dshLookMetaText{flex:1;min-width:0}\n.dshLookNameRow{display:flex;align-items:center;gap:8px}\n.dshLookName{font-size:15px;font-weight:650;color:var(--dsw-alias-label-primary)}\n.dshLookBadge{flex:none;font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:2px 6px;border-radius:999px;color:var(--dsw-alias-label-on-color,#04140a);background:var(--dsw-alias-state-business-primary)}\n.dshLookDesc{margin:4px 0 0;font-size:12.5px;line-height:1.45;color:var(--dsw-alias-label-secondary)}\n.dshLookCheck{flex:none;display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-label-on-color,#fff)}\n.dshLookFooter{max-width:1000px;margin:22px auto 0;display:flex;align-items:center;gap:14px;flex-wrap:wrap}\n.dshLookReset{display:inline-flex;align-items:center;gap:7px;padding:8px 14px;border-radius:var(--dsw-radius-sm,8px);border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;cursor:pointer}\n.dshLookReset:hover{background:var(--dsw-alias-interactive-bg-hover)}\n.dshLookHint{font-size:12.5px;color:var(--dsw-alias-label-tertiary)}\nhtml[data-dsh-look^='pixel']{--dsw-radius-xs:0;--dsw-radius-sm:0;--dsw-radius-md:0;--dsw-radius-lg:0;--dsw-radius-xl:0;--dsw-radius-panel:0}\nhtml[data-dsh-look^='pixel'] *,html[data-dsh-look^='pixel'] *::before,html[data-dsh-look^='pixel'] *::after{border-radius:0 !important}\nhtml[data-dsh-look^='pixel'] body{--dsw-font-family:'VT323','Microsoft YaHei',monospace;--ds-font-family-code:'VT323','Courier New',monospace;font-family:var(--dsw-font-family);-webkit-font-smoothing:none;font-smooth:never;letter-spacing:.015em}\nhtml[data-dsh-look^='pixel'] img,html[data-dsh-look^='pixel'] video,html[data-dsh-look^='pixel'] canvas,html[data-dsh-look^='pixel'] svg{image-rendering:pixelated}\nhtml[data-dsh-look^='pixel'] body::after{content:'';position:fixed;inset:0;z-index:2147483000;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(0,0,0,0) 0,rgba(0,0,0,0) 2px,var(--dsh-px-scan,rgba(0,0,0,.07)) 3px);mix-blend-mode:multiply}\nhtml[data-dsh-look^='pixel'] .dshLookCard{border-width:2px;box-shadow:3px 3px 0 rgba(57,255,20,.18)}\nhtml[data-dsh-look^='pixel'] .dshLookTitle{text-transform:uppercase;letter-spacing:.06em;font-weight:400}\nhtml[data-dsh-look^='pixel'] .dshLookName{text-transform:uppercase;letter-spacing:.05em}\nhtml[data-dsh-look^='pixel'] .dshLookBadge,html[data-dsh-look^='pixel'] .dshLookCheck{border-radius:0}";

    const PIXEL_EXTRA_CSS = "html[data-dsh-look='pixel']{--dsh-px-glow:rgba(57,255,20,.18);--dsh-px-scan:rgba(0,0,0,.07)}html[data-dsh-look='pixel-amber']{--dsh-px-glow:rgba(255,176,0,.30);--dsh-px-scan:rgba(255,176,0,.055)}html[data-dsh-look='pixel-ice']{--dsh-px-glow:rgba(34,211,238,.30);--dsh-px-scan:rgba(34,211,238,.055)}html[data-dsh-look='pixel-magenta']{--dsh-px-glow:rgba(255,61,242,.32);--dsh-px-scan:rgba(255,61,242,.06)}html[data-dsh-look='pixel-mono']{--dsh-px-glow:rgba(255,255,255,.24);--dsh-px-scan:rgba(0,0,0,.08)}html[data-dsh-look='pixel-boy']{--dsh-px-glow:rgba(93,122,62,.24);--dsh-px-scan:rgba(38,51,31,.06)}html[data-dsh-look='pixel-boy'] .dshLookCard{border-color:#c4cfae;box-shadow:3px 3px 0 rgba(38,51,31,.18)}html[data-dsh-look='pixel-boy'] [data-message-bubble]{box-shadow:inset 0 0 0 1px rgba(93,122,62,.35);background:rgba(93,122,62,.06) !important}html[data-dsh-look='pixel-boy'] [data-chat-flow-kind='assistant']{box-shadow:inset 0 0 0 1px rgba(93,122,62,.18)}html[data-dsh-look='pixel-boy'] [data-turn-trigger]{box-shadow:inset 0 0 0 1px rgba(93,122,62,.16)}html[data-dsh-look='pixel-boy'] body{text-shadow:0 0 .8px rgba(38,51,31,.32)}html[data-dsh-look='pixel-boy'] body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:2147482998;backdrop-filter:blur(.6px);-webkit-backdrop-filter:blur(.6px);background:radial-gradient(ellipse at 50% 42%,rgba(255,255,255,.08),transparent 62%)}html[data-dsh-look^='pixel'] .dshLookCard{box-shadow:3px 3px 0 var(--dsh-px-glow,rgba(57,255,20,.18))}html[data-dsh-look='pixel-mono'] body::after{background:repeating-linear-gradient(0deg,rgba(255,255,255,0) 0,rgba(255,255,255,0) 2px,rgba(255,255,255,.07) 3px);mix-blend-mode:normal}html[data-dsh-look='pixel-magenta']{--dsh-px-glow:rgba(255,43,214,.40);--dsh-px-scan:rgba(255,43,214,.045)}html[data-dsh-look='pixel-magenta'] .dshLookCard{border-color:#ff2bd6;box-shadow:0 0 16px rgba(255,43,214,.35),3px 3px 0 rgba(35,230,255,.35)}html[data-dsh-look='pixel-magenta'] .dshLookBadge{box-shadow:0 0 8px rgba(35,230,255,.55)}html[data-dsh-look='pixel-magenta'] .dshLookTitle{text-shadow:0 0 10px rgba(255,43,214,.65),0 0 22px rgba(35,230,255,.35)}html[data-dsh-look='pixel-magenta'] body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:2147482999;background-image:radial-gradient(1200px 420px at 50% -8%,rgba(255,43,214,.16),transparent 60%),linear-gradient(rgba(255,43,214,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(35,230,255,.05) 1px,transparent 1px);background-size:auto,24px 24px,24px 24px}html[data-dsh-look='pixel-ice']{--dsh-px-glow:rgba(37,229,255,.38);--dsh-px-scan:rgba(37,229,255,.05)}html[data-dsh-look='pixel-ice'] .dshLookCard{border-color:#25e5ff;box-shadow:0 0 16px rgba(37,229,255,.35),3px 3px 0 rgba(124,92,255,.38)}html[data-dsh-look='pixel-ice'] .dshLookBadge{box-shadow:0 0 8px rgba(124,92,255,.6)}html[data-dsh-look='pixel-ice'] .dshLookTitle{text-shadow:0 0 10px rgba(37,229,255,.65),0 0 22px rgba(124,92,255,.4)}html[data-dsh-look='pixel-ice'] body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:2147482999;background-image:radial-gradient(1200px 420px at 50% -8%,rgba(37,229,255,.16),transparent 60%),linear-gradient(rgba(37,229,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(124,92,255,.05) 1px,transparent 1px);background-size:auto,24px 24px,24px 24px}html[data-dsh-look='pixel-amber']{--dsh-px-glow:rgba(255,176,0,.26);--dsh-px-scan:rgba(0,0,0,.20)}html[data-dsh-look='pixel-amber'] body{text-shadow:0 0 5px rgba(255,170,20,.22)}html[data-dsh-look='pixel-amber'] body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:2147482999;box-shadow:inset 0 0 120px 22px rgba(0,0,0,.55);background:radial-gradient(ellipse at 50% 48%,rgba(255,150,0,.05),transparent 55%)}html[data-dsh-look='pixel-sunset']{--dsh-px-glow:rgba(255,122,69,.30);--dsh-px-scan:rgba(0,0,0,.055)}html[data-dsh-look='pixel-sunset'] .dshLookCard{border-color:#ff7a45;box-shadow:0 0 14px rgba(255,122,69,.28),3px 3px 0 rgba(226,106,138,.30)}html[data-dsh-look='pixel-sunset'] .dshLookTitle{text-shadow:0 0 12px rgba(255,132,74,.55),0 0 26px rgba(226,106,138,.32)}html[data-dsh-look='pixel-sunset'] body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:2147482999;background:radial-gradient(ellipse 135% 120% at 50% 45%,transparent 58%,rgba(26,10,24,.55) 100%),radial-gradient(1350px 680px at 50% 119%,rgba(255,132,74,.25) 0%,rgba(255,132,74,.12) 33%,rgba(255,132,74,.05) 60%,rgba(255,132,74,0) 82%),radial-gradient(700px 320px at 12% 0%,rgba(226,106,138,.14),transparent 60%),linear-gradient(180deg,rgba(132,82,166,.22),rgba(96,58,128,.09) 24%,transparent 52%)}html[data-dsh-look='pixel-mono']{--dsh-px-glow:rgba(244,241,232,.22);--dsh-px-scan:rgba(0,0,0,.08)}html[data-dsh-look='pixel-mono'] body{text-shadow:0 0 6px rgba(244,244,244,.26)}html[data-dsh-look='pixel-mono'] body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:2147482998;border-radius:30px;box-shadow:inset 0 0 0 11px rgba(0,0,0,.88),inset 0 0 110px 26px rgba(0,0,0,.55);background-image:radial-gradient(ellipse 125% 105% at 50% 45%,transparent 52%,rgba(0,0,0,.66) 100%),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNzAnIGhlaWdodD0nMTcwJz48ZmlsdGVyIGlkPSduJz48ZmVUdXJidWxlbmNlIHR5cGU9J2ZyYWN0YWxOb2lzZScgYmFzZUZyZXF1ZW5jeT0nMC41JyBudW1PY3RhdmVzPScyJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+PGZlQ29sb3JNYXRyaXggdHlwZT0nc2F0dXJhdGUnIHZhbHVlcz0nMCcvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPScxNzAnIGhlaWdodD0nMTcwJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHk9JzAuMTAnLz48L3N2Zz4=);background-size:auto,240px 240px;opacity:.95}html[data-dsh-look='pixel-mono'] body::after{background:repeating-linear-gradient(0deg,rgba(255,255,255,.065) 0,rgba(255,255,255,.065) 2px,rgba(255,255,255,0) 2px,rgba(255,255,255,0) 4px),repeating-linear-gradient(90deg,rgba(255,255,255,.028) 0,rgba(255,255,255,.028) 1px,rgba(255,255,255,0) 1px,rgba(255,255,255,0) 3px);mix-blend-mode:normal}html[data-dsh-look='pixel-sunset'] body::after{background:repeating-linear-gradient(0deg,rgba(255,255,255,0) 0,rgba(255,255,255,0) 2px,rgba(255,214,190,.07) 3px);mix-blend-mode:normal}html[data-dsh-look='pixel-amber'] body::after{background:repeating-linear-gradient(0deg,rgba(255,255,255,0) 0,rgba(255,255,255,0) 2px,rgba(255,186,80,.06) 3px);mix-blend-mode:normal}html[data-dsh-look='pixel']{--dsh-px-glow:rgba(57,255,20,.20);--dsh-px-scan:rgba(0,0,0,.07)}html[data-dsh-look='pixel'] h1,html[data-dsh-look='pixel'] h2,html[data-dsh-look='pixel'] h3,html[data-dsh-look='pixel'] h4,html[data-dsh-look='pixel'] h5,html[data-dsh-look='pixel'] h6{text-transform:uppercase;letter-spacing:.04em;text-shadow:0 0 6px rgba(57,255,20,.22)}html[data-dsh-look='pixel'] .dshLookTitle{text-transform:uppercase;letter-spacing:.08em;border-bottom:1px solid rgba(57,255,20,.30);padding-bottom:8px;text-shadow:0 0 6px rgba(57,255,20,.25)}html[data-dsh-look='pixel'] .dshLookTitle::before{content:'> ';color:#39ff14}html[data-dsh-look='pixel'] .dshLookTitle::after{content:' █';animation:dshPixelCaret 1.05s steps(1) infinite;color:#39ff14}@keyframes dshPixelCaret{0%,49%{opacity:1}50%,100%{opacity:0}}html[data-dsh-look='pixel'] .dshLookCard{border-color:rgba(57,255,20,.35);box-shadow:none}html[data-dsh-look='pixel'] .dshLookCard[data-active='true']{box-shadow:0 0 0 2px rgba(57,255,20,.55)}html[data-dsh-look='pixel'] .dshLookBadge{border:1px solid rgba(57,255,20,.5)}html[data-dsh-look='pixel'] ::selection{background:rgba(57,255,20,.28);color:#eaffea}html[data-dsh-look='pixel'] [data-message-bubble]{box-shadow:inset 0 0 0 1px rgba(57,255,20,.45);background:rgba(57,255,20,.05) !important}html[data-dsh-look='pixel'] [data-chat-flow-kind='assistant']{box-shadow:inset 0 0 0 1px rgba(57,255,20,.16)}html[data-dsh-look='pixel'] [data-turn-trigger]{box-shadow:inset 0 0 0 1px rgba(57,255,20,.14)}";

    function readStored() {
      try {
        const v = window.localStorage.getItem(STORAGE_KEY);
        if (!v) return null;
        for (let i = 0; i < STYLES.length; i++) { if (STYLES[i].id === v) return v; }
        return null;
      } catch (e) { return null; }
    }
    function writeStored(id) {
      try {
        if (id) window.localStorage.setItem(STORAGE_KEY, id);
        else window.localStorage.removeItem(STORAGE_KEY);
      } catch (e) { /* storage blocked: keep in-memory only */ }
    }

    const store = {
      id: 'default',
      listeners: new Set(),
      get: function () { return this.id; },
      set: function (id) {
        if (this.id === id) return;
        this.id = id;
        const snapshot = Array.from(this.listeners);
        for (let i = 0; i < snapshot.length; i++) { try { snapshot[i](); } catch (e) { /* ignore */ } }
      },
      subscribe: function (listener) {
        this.listeners.add(listener);
        return function () { store.listeners.delete(listener); };
      },
      select: function () { /* installed by apply() */ }
    };

    function applyThemeLook(ctx, basePreference, id) {
      const el = document.documentElement;
      if (id === 'default') {
        if (el.getAttribute('data-dsh-look') !== null) el.removeAttribute('data-dsh-look');
        try { ctx.theme.setTheme(basePreference); } catch (e) { /* ignore */ }
        return;
      }
      el.setAttribute('data-dsh-look', id);
      try { ctx.theme.setTheme(id); } catch (e) { /* ignore */ }
    }

    function LookIcon(props) {
      const size = (props && props.size) ? props.size : 16;
      return h('svg', {
        width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
        'aria-hidden': true, stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round'
      },
        h('path', { d: 'M12 3a9 9 0 1 0 0 18c1.2 0 1.9-.8 1.9-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.1 0-1 .8-1.9 1.9-1.9H16a5 5 0 0 0 5-5c0-3.9-4-6.9-9-6.9Z' }),
        h('circle', { cx: 7.5, cy: 10.5, r: 1.15, fill: 'currentColor', stroke: 'none' }),
        h('circle', { cx: 11.5, cy: 7.6, r: 1.15, fill: 'currentColor', stroke: 'none' }),
        h('circle', { cx: 15.9, cy: 9.3, r: 1.15, fill: 'currentColor', stroke: 'none' })
      );
    }

    function LookPreview(props) {
      const s = props.style;
      const p = s.preview;
      const pixel = s.id === 'pixel';
      const rad = pixel ? 0 : 99;
      const btnRad = pixel ? 0 : 7;
      return h('div', { className: 'dshLookPreview', style: { background: p.bg } },
        h('div', { style: { width: '30%', background: p.sidebar, borderRight: '1px solid ' + p.border, padding: '11px 9px', display: 'flex', flexDirection: 'column', gap: '7px', boxSizing: 'border-box' } },
          h('div', { style: { height: '8px', width: '72%', background: p.text, borderRadius: rad + 'px', opacity: 0.8 } }),
          h('div', { style: { height: '6px', width: '55%', background: p.sub, borderRadius: rad + 'px', opacity: 0.4 } }),
          h('div', { style: { height: '6px', width: '64%', background: p.sub, borderRadius: rad + 'px', opacity: 0.35 } })
        ),
        h('div', { style: { flex: '1', background: p.panel, padding: '11px', display: 'flex', flexDirection: 'column', gap: '7px', boxSizing: 'border-box' } },
          h('div', { style: { height: '8px', width: '48%', background: p.text, borderRadius: rad + 'px', opacity: 0.85 } }),
          h('div', { style: { height: '6px', width: '88%', background: p.sub, borderRadius: rad + 'px', opacity: 0.45 } }),
          h('div', { style: { height: '6px', width: '72%', background: p.sub, borderRadius: rad + 'px', opacity: 0.35 } }),
          h('div', { style: { marginTop: 'auto', height: '16px', width: '66px', background: p.accent, borderRadius: btnRad + 'px' } })
        )
      );
    }

    function CheckMark() {
      return h('svg', { width: 13, height: 13, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true, stroke: 'currentColor', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' },
        h('path', { d: 'M20 6 9 17l-5-5' })
      );
    }

    function LookStudioPage(props) {
      const rawT = (props && props.t) ? props.t : function (key) { return key; };
      const t = function (key) { const v = rawT(key); return (v === key && Object.prototype.hasOwnProperty.call(EN, key)) ? EN[key] : v; };
      const forceUpdate = React.useReducer(function (x) { return x + 1; }, 0)[1];
      React.useEffect(function () { return store.subscribe(function () { forceUpdate(); }); }, []);
      const active = store.get();
      return h('div', { className: 'dshLookRoot' },
        h('div', { className: 'dshLookHeader' },
          h('h1', { className: 'dshLookTitle' }, t('title')),
          h('p', { className: 'dshLookSub' }, t('subtitle'))
        ),
        h('div', { className: 'dshLookGrid' },
          STYLES.map(function (s) {
            const isActive = active === s.id;
            return h('button', {
              key: s.id, type: 'button', className: 'dshLookCard',
              'data-active': isActive ? 'true' : 'false', 'aria-pressed': isActive,
              onClick: function () { store.select(s.id); }
            },
              h(LookPreview, { style: s }),
              h('div', { className: 'dshLookMeta' },
                h('div', { className: 'dshLookMetaText' },
                  h('div', { className: 'dshLookNameRow' },
                    h('span', { className: 'dshLookName' }, t(s.id + '.name')),
                    s.id.indexOf('pixel') === 0 ? h('span', { className: 'dshLookBadge' }, t('pixelBadge')) : null
                  ),
                  h('div', { className: 'dshLookDesc' }, t(s.id + '.desc'))
                ),
                isActive ? h('span', { className: 'dshLookCheck' }, h(CheckMark)) : null
              )
            );
          })
        ),
        h('div', { className: 'dshLookFooter' },
          h('button', { type: 'button', className: 'dshLookReset', onClick: function () { store.select('default'); } }, t('reset')),
          h('span', { className: 'dshLookHint' }, t('hint'))
        )
      );
    }

    return {
      inject: ['slots', 'locale', 'theme'],
      apply: function (ctx) {
        ctx.effect(function () { return ctx.locale.register(NS, { en: EN, zh: ZH }); }, 'themes: dictionaries');
        const t = ctx.locale.bind(NS);

        // Register the six app-wide themes on the built-in theme service.
        for (let i = 0; i < STYLES.length; i++) {
          const s = STYLES[i];
          const exists = ctx.theme.getTheme().themes.some(function (x) { return x.id === s.id; });
          if (exists) continue;
          try { ctx.theme.register({ id: s.id, colorScheme: s.colorScheme, tokens: s.tokens }); }
          catch (e) { if (ctx.logger && ctx.logger.warn) ctx.logger.warn(e); }
        }

        ctx.effect(function () {
          const tag = document.createElement('style');
          tag.setAttribute('data-dsh-retro-pixel-themes', '');
          tag.textContent = CSS + PIXEL_EXTRA_CSS;
          document.head.appendChild(tag);
          return function () { tag.remove(); };
        }, 'themes: styles');

        const currentPref = ctx.theme.getTheme().preference;
        let basePreference = (currentPref === 'light' || currentPref === 'dark' || currentPref === 'system') ? currentPref : 'system';

        // The style the user actually wants (persisted in localStorage). The
        // built-in theme service persists only light/dark/system, so on boot its
        // settings adoption can publish the durable built-in preference AFTER we
        // restore our saved style. While `desired` still names a style we
        // re-assert it, so the chosen look survives a restart instead of snapping
        // back to the default. Choosing "System default" clears it and stops this.
        let desired = readStored() || 'default';
        let reapplying = false;
        function enforceDesired() {
          if (reapplying || desired === 'default') return;
          reapplying = true;
          setTimeout(function () {
            reapplying = false;
            if (desired === 'default') return;
            if (ctx.theme.getTheme().preference !== desired) applyThemeLook(ctx, basePreference, desired);
          }, 0);
        }

        store.id = desired;
        store.select = function (id) {
          if (id === 'default') {
            desired = 'default';
            writeStored(null);
            store.set('default');
            applyThemeLook(ctx, basePreference, 'default');
            return;
          }
          if (!STYLES.some(function (s) { return s.id === id; })) return;
          desired = id;
          writeStored(id);
          store.set(id);
          applyThemeLook(ctx, basePreference, id);
        };

        // Mirror the active style into the data attribute / selection store.
        // A built-in preference arriving while a style is still desired is the
        // boot-time settings adoption (or the product's Appearance row): keep
        // enforcing the saved style rather than clearing it.
        ctx.on('theme/change', function (snap) {
          const pref = snap.preference;
          if (STYLES.some(function (s) { return s.id === pref; })) {
            document.documentElement.setAttribute('data-dsh-look', pref);
            if (store.get() !== pref) store.set(pref);
            return;
          }
          if (pref === 'light' || pref === 'dark' || pref === 'system') basePreference = pref;
          if (desired !== 'default') { enforceDesired(); return; }
          if (document.documentElement.getAttribute('data-dsh-look') !== null) {
            document.documentElement.removeAttribute('data-dsh-look');
          }
          if (store.get() !== 'default') store.set('default');
        });

        if (desired !== 'default') applyThemeLook(ctx, basePreference, desired);

        ctx.slots.inject('sidebar.panellist', function () {
          return ctx.slots.register({
            name: 'sidebar.panellist', id: PANEL_ID, order: 40,
            label: function () { return t('label'); }, locale: NS
          }, function (owner) {
            return h(LookIcon, { size: (owner && owner.size) || 16, active: !!(owner && owner.active) });
          });
        });

        ctx.slots.inject('main', function () {
          return ctx.slots.register({ name: 'main', key: PANEL_ID, locale: NS }, LookStudioPage);
        });
      }
    };
  }
});
