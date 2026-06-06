# Lifelect UI 设计规范

> Novu Dark Immersive 风格 — 极简轻奢、沉浸式覆盖滚动、玻璃质感导航

---

## 1. 设计理念

**Novu Dark Immersive** 以深色沉浸感为核心，白色浅底承载内容，橘色作为视觉焦点。首屏采用全屏大图固定不动的「覆盖式滚动」交互，配合多种滚动入场动画，营造层次丰富的浏览体验。

| 关键词 | 描述 |
|--------|------|
| 风格 | 极简轻奢、科技感、沉浸式 |
| 色调 | 白底 (`#FDFDFF`) + 近黑文字 (`#14171a`) + 橘色点缀 (`#fe4e02`) |
| 字体 | Inter（无衬线主字体）、Victor Serif（衬线装饰） |
| 交互 | 覆盖式滚动、玻璃质感导航、6 种滚动动画、动画分割线 |
| 目标用户 | 海外 B2B 采购商、OEM/ODM 合作伙伴、分销商 |

---

## 2. 色彩系统

### 主色调

| 色值 | 名称 | CSS 类名 | 用途 |
|------|------|----------|------|
| `#FDFDFF` | 背景白 | `bg-bg-light` | 页面主背景 |
| `#14171a` | 近黑 | `text-novu-near-black` | 正文标题 |
| `#fe4e02` | 橘色 | `text-novu-orange` / `bg-novu-orange` | 品牌点缀、CTA、动画分割线 |
| `#000000` | 纯黑 | `bg-black` | 按钮、深色区域 |
| `#010703` | 深暗 | `bg-novu-deep-dark` | 最深底色 |
| `#0b0f11` | 暗面 | `bg-novu-dark-surface` | 暗色表层 |
| `#25D366` | WhatsApp 绿 | — | WhatsApp 浮动按钮 |

### 暖色表面层次

| 色值 | 名称 | 用途 |
|------|------|------|
| `#F7F5F3` | `bg-novu-warm-50` | 浅灰暖底 |
| `#EDE9E5` | `bg-novu-warm-100` | 卡片边框、分隔 |
| `#DDD7CF` | `bg-novu-warm-200` | 输入框边框 |
| `#C4BDB4` | `bg-novu-warm-300` | 次级元素 |
| `#8B7E74` | `bg-novu-warm-500` | 辅助文字 |

### 透明度阶梯

| CSS 类名 | 值 | 用途 |
|----------|------|------|
| `white-80` | `rgba(255,255,255,0.8)` | Hero 文字高亮 |
| `white-60` | `rgba(255,255,255,0.6)` | 次级白色文字 |
| `white-40` | `rgba(255,255,255,0.4)` | 辅助信息 |
| `white-15` | `rgba(255,255,255,0.15)` | 分隔线、边框 |
| `white-5` | `rgba(255,255,255,0.05)` | 微妙底色 |

---

## 3. 字体系统

### 字体族

| 用途 | 字体栈 | Tailwind 类 |
|------|--------|-------------|
| 正文/UI | Inter, system-ui, -apple-system, sans-serif | `font-sans` |
| 装饰/斜体 | Victor Serif, Georgia, serif | `font-serif italic` |

### 字号规范

| 类名 | 字号 | 行高 | 字重 | 用途 |
|------|------|------|------|------|
| `hero-display` | 89.6px | 89.6px | 300 | Hero 标题（预留） |
| `section-lg` | 48px | 48px | 300 | 大标题 |
| `section-md` | 40px | 40px | 300 | 中标题 |
| `section-sm` | 36px | 36px | 300 | 小标题 |
| `serif-lg` | 40px | 40px | 500 | 衬线大标题 |
| `serif-md` | 36px | 36px | 500 | 衬线中标题 |
| `body-lg` | 20px | 25px | 500 | 卡片标题 |
| `body` | 16px | 28.8px | 400 | 正文 |
| `body-sm` | 15px | 27px | 400 | 辅助文字 |
| `label` | 18px | 32.4px | 500 | 标签/Logo |
| `label-sm` | 15px | 18.75px | 500 | 小标签/按钮 |
| `nav` | 16px | 20px | 400 | 导航文字 |

### 品牌标识

- **Logo 文字**：`Lifelect.` — 无衬线，`.` 始终橘色 `#fe4e02`
- **Logo 字号**：`text-xl font-semibold`（约 20px）
- **Hero 区**：Logo 白色
- **内容区**：Logo 黑色（`#14171a`）

---

## 4. 圆角与形状

| 类名 | 值 | 用途 |
|------|------|------|
| `pill` | 640px | CTA 按钮、导航容器 |
| `section-lg` | 64px | 大区块 |
| `section` | 48px | 中区块 |
| `xl` | 40px | 卡片外框 |
| `lg` | 30px | 大圆角 |
| `2xl` | 16px | 卡片、弹窗 |
| `sm` | 11.1px | 输入框 |
| `xs` | 5.1px | 细小元素 |
| — | 50px 50px 0 0 | 首页覆盖容器顶部（`cover-scroll-top`） |

---

## 5. 阴影

| 类名 | 值 | 用途 |
|------|------|------|
| `card-float` | `0px -4px 32px -12px rgba(0,0,0,0.035)` | 卡片悬浮 |
| `button-lift` | `0px 4px 20px 0px rgba(0,0,0,0.35)` | 按钮按下 |
| `glass-inset-light` | `inset 1px 1px 1px 0px rgba(255,255,255,0.4)` | 玻璃内发光 |
| `glass-inset-contrast` | `inset 1px 1px 1px 0px rgba(255,255,255,0.6)` | 高对比玻璃 |
| 覆盖容器 | `0 -20px 60px -20px rgba(0,0,0,0.15)` | 覆盖层次感 |

---

## 6. 组件规范

### 6.1 Splash 落地页

| 属性 | 值 |
|------|------|
| 定位 | `fixed inset-0 z-[200]` |
| 背景 | `bg-novu-near-black` |
| 内容 | Lifelect.（大字）+ Welcome to Lifelect + Tagline |
| 动画 | 三行文字依次 fade-in（0ms / 350ms / 700ms） |
| 进度条 | 底部橙色渐变条，4.5s 填满 |
| 跳转 | 4.5s 后自动 `router.push("/home")`，可 Skip |

### 6.2 Header（全局导航）

| 属性 | 值 |
|------|------|
| 定位 | `fixed top-[10px] left-0 right-0 z-50` |
| 导航容器 | `h-[50px] rounded-full bg-white/15 backdrop-blur-md` |
| CTA 按钮 | `h-10 rounded-pill bg-black text-white`，波浪动画 |

#### 自适应对比度

| 状态 | 触发条件 | Logo | 文字 |
|------|----------|------|------|
| Hero 模式 | 首页 + 在 Hero 视区 | 白色 | `white/80` |
| 白色背景 | 非首页 or 滚离 Hero | 黑色 | `near-black/60` |

### 6.3 HeroBanner（首屏大图）

| 属性 | 值 |
|------|------|
| 定位 | `fixed inset-0 z-0` |
| 图片 | 全屏 `object-cover`，叠加 `bg-black/50` |
| 标题 | `text-white font-bold text-5xl md:text-7xl lg:text-[80px]` |
| CTA | `bg-white text-gray-900 rounded-full` |

### 6.4 Footer（全局页脚）

| 属性 | 值 |
|------|------|
| 类型 | 客户端组件（API 拉取产品列表） |
| 背景 | `bg-novu-near-black text-white` |
| 布局 | 4 列网格（品牌/产品/公司/联系） |

### 6.5 ProductCard（产品卡片）

| 属性 | 值 |
|------|------|
| 外框 | `bg-white rounded-2xl border border-novu-warm-100` |
| 悬停 | `hover:shadow-card-float hover:-translate-y-1` |
| 顶部线 | 橙色渐变，悬停显示 |
| 图片 | Next.js `<Image>`，悬停 `scale-105` |
| 按钮 | Learn More + Inquiry |

### 6.6 产品详情页多图

| 属性 | 值 |
|------|------|
| 主图 | `aspect-square`，`object-contain` |
| 缩略图栏 | 底部横排，点击切换主图 |
| 选中态 | `border-novu-orange/50` |
| 无图时 | 回退到 `product.image` |

### 6.7 InquiryModal（询价弹窗）

| 属性 | 值 |
|------|------|
| 遮罩 | `fixed inset-0 z-[100] bg-bg-light/80 backdrop-blur-sm` |
| 表单 | Full Name / Company / Email / Phone / Message |
| 提交 | POST `/api/inquiries`，toast 通知 |

### 6.8 QuickQuoteForm（快速询盘）

| 属性 | 值 |
|------|------|
| 字段 | Name / Company / Email / WhatsApp / Product Requirement |
| 反垃圾 | Honeypot + 时间戳检测 |
| 提交 | POST `/api/inquiries`，toast 通知 |

### 6.9 WhatsApp 浮动按钮

| 属性 | 值 |
|------|------|
| 定位 | `fixed bottom-6 right-6 z-[90]` |
| 样式 | `rounded-full bg-[#25D366]`，绿色 WhatsApp 品牌色 |
| 动画 | 脉冲光环 `animate-ping`，hover 放大 |
| 链接 | `https://wa.me/8613368039556` |

### 6.10 按钮系统

| 类名 | 背景 | 文字 | 圆角 | 悬停 |
|------|------|------|------|------|
| `btn-primary` | `bg-black` | `text-white` | `pill` | `bg-black/85 shadow-lg` |
| `btn-outline` | `bg-black` | `text-white` | `pill` | `bg-black/85 shadow-lg` |
| `btn-ghost` | `transparent` | `text-white-60` | — | `hover:text-white` |

---

## 7. 动画规范

### ScrollReveal — 6 种滚动入场变体

| 变体 | 动画 | 时长 | 缓动 |
|------|------|------|------|
| `fade-up` | 向上 40px + 淡入 | 0.7s | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `fade-in` | 纯透明度渐入 | 0.8s | `ease-out` |
| `scale-up` | scale(0.92) → 1 + 淡入 | 0.7s | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `slide-left` | 从右 48px 滑入 | 0.7s | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `slide-right` | 从左 48px 滑入 | 0.7s | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `clip-reveal` | clip-path 展开 | 0.9s | `cubic-bezier(0.65, 0, 0.35, 1)` |

### 延迟阶梯

| Class | 延迟 | 用途 |
|-------|------|------|
| `animate-delay-0` | 0s | 第一个元素 |
| `animate-delay-1` ~ `animate-delay-7` | 60ms 递增 | 交错入场 |

### 其他动画

| 动画 | 触发 | 时长 | 说明 |
|------|------|------|------|
| `animate-float` | 自动循环 | 6s | 轻微上下浮动 |
| `animate-breathe` | 自动循环 | 5s | 透明度 + 缩放呼吸 |
| `animate-counter-pop` | 滚动入场 | 0.6s | 数字弹入 |
| `section-divider-line` | 滚动入场 | 1.2s | 橙色渐变线从中间展开 |
| `animate-bounce-wave` | 自动循环 | 2.5s | CTA 文字波浪弹跳 |
| `animate-page-in` | 页面加载 | 0.35s | 内容区淡入 |
| `animate-splash-bar` | 页面加载 | 4.5s | Splash 进度条 |

### Reduced Motion

所有动画均兼容 `prefers-reduced-motion: reduce`，自动降级为无动画。

---

## 8. 间距

| 类名 | 值 | 用途 |
|------|------|------|
| `container-main` | `max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12` | 内容容器 |
| 区块内边距 | `py-20 md:py-28 lg:py-36` | 标准内容区块 |
| 卡片内边距 | `p-7 lg:p-8` | 产品/特性卡片 |

---

## 9. 无障碍

- **Skip Link**：`Skip to main content` 跳转链接
- **Focus Visible**：橘色 3px 轮廓 + 2px 偏移
- **Aria Labels**：导航、按钮、弹窗均有语义化标签
- **Reduced Motion**：尊重系统设置
- **触控区域**：所有交互元素 min-h-[44px]

---

## 10. 响应式断点

| 断点 | 宽度 | 应用 |
|------|------|------|
| 默认 | <768px | 移动端 — 汉堡菜单 |
| `md` | 768px+ | 平板 — 2 列网格 |
| `lg` | 1024px+ | 桌面 — 导航展开、3-4 列网格 |
| （Header 容器） | 1440px | 最大内容宽度 |

---

## 11. 配色速查

```
橙色     #fe4e02  ████████  品牌点缀
近黑     #14171a  ████████  正文
纯黑     #000000  ████████  按钮/深色区
背景白   #FDFDFF  ████████  页面底色
暖灰 50  #F7F5F3  ████████  浅灰底
暖灰 100 #EDE9E5  ████████  边框/分隔
WhatsApp #25D366  ████████  WhatsApp 按钮
```

---

## 12. 产品配色映射

| 系列 | Tailwind 渐变类 | 视觉效果 |
|------|----------------|----------|
| M Series | `from-slate-600 to-slate-800` | 石板灰 |
| D Series | `from-blue-700 to-indigo-900` | 深蓝 |
| BO Series | `from-amber-600 to-orange-800` | 琥珀色 |
