# Lifelect2 UI 设计规范

> Novu Dark Immersive 风格 — 极简轻奢、沉浸式覆盖滚动、玻璃质感导航

---

## 1. 设计理念

**Novu Dark Immersive** 以深色沉浸感为核心，白色浅底承载内容，橘色作为视觉焦点。首屏采用全屏大图固定不动的「覆盖式滚动」交互，营造层次丰富的浏览体验。

| 关键词 | 描述 |
|--------|------|
| 风格 | 极简轻奢、科技感、沉浸式 |
| 色调 | 白底 (`#FDFDFF`) + 近黑文字 (`#14171a`) + 橘色点缀 (`#fe4e02`) |
| 字体 | Inter（无衬线主字体）、Victor Serif（衬线装饰） |
| 交互 | 覆盖式滚动、玻璃质感导航、波浪弹跳 CTA |
| 目标用户 | 海外 B2B 采购商、OEM/ODM 合作伙伴、分销商 |

---

## 2. 色彩系统

### 主色调

| 色值 | 名称 | CSS 类名 | 用途 |
|------|------|----------|------|
| `#FDFDFF` | 背景白 | `bg-bg-light` | 页面主背景 |
| `#14171a` | 近黑 | `text-novu-near-black` | 正文标题 |
| `#fe4e02` | 橘色 | `text-novu-orange` / `bg-novu-orange` | 品牌点缀、CTA |
| `#000000` | 纯黑 | `bg-black` | Hero CTA 按钮 |
| `#010703` | 深暗 | `bg-novu-deep-dark` | 最深底色 |
| `#0b0f11` | 暗面 | `bg-novu-dark-surface` | 暗色表层 |
| `#f2fe80` | 荧光绿 | `text-novu-lime` | 极少数强调 |

### 透明度阶梯（白色叠层）

| CSS 类名 | 值 | 用途 |
|----------|------|------|
| `white-80` | `rgba(255,255,255,0.8)` | Hero 文字高亮 |
| `white-60` | `rgba(255,255,255,0.6)` | 次级白色文字 |
| `white-40` | `rgba(255,255,255,0.4)` | 辅助信息 |
| `white-15` | `rgba(255,255,255,0.15)` | 分隔线、边框 |
| `white-10` | `rgba(255,255,255,0.1)` | 极淡分隔 |
| `white-5` | `rgba(255,255,255,0.05)` | 微妙底色 |

---

## 3. 字体系统

### 字体族

| 用途 | 字体栈 | Tailwind 类 |
|------|--------|-------------|
| 正文/UI | Inter, Messina Sans, system-ui, -apple-system, sans-serif | `font-sans` |
| 装饰/斜体 | Victor Serif, Georgia, Times New Roman, serif | `font-serif italic` |

### 字号规范

| 类名 | 字号 | 行高 | 字重 | 用途 |
|------|------|------|------|------|
| `hero-display` | 89.6px | 89.6px | 300 | Hero 标题（首页未使用，预留） |
| `section-lg` | 48px | 48px | 300 | 大标题 |
| `section-md` | 40px | 40px | 300 | 中标题 |
| `section-sm` | 36px | 36px | 300 | 小标题 |
| `serif-lg` | 40px | 40px | 500 | 衬线大标题 |
| `serif-md` | 36px | 36px | 500 | 衬线中标题 |
| `body-lg` | 20px | 25px | 500 | 卡片标题 |
| `body` | 16px | 28.8px | 300 | 正文 |
| `body-sm` | 15px | 27px | 300 | 辅助文字 |
| `label` | 18px | 32.4px | 500 | 标签/Logo |
| `label-sm` | 15px | 18.75px | 500 | 小标签/按钮 |
| `nav` | 16px | 28.8px | 300 | 导航文字 |

### 品牌标识

- **Logo 文字**：`Lifelect.` — 无衬线，`.` 始终橘色 `#fe4e02`
- **Logo 字号**：`text-xl font-semibold`（约 20px）
- **Hero 区**：Logo 白色
- **内容区**：Logo 黑色（`#14171a`）

---

## 4. 圆角与形状

| 类名 | 值 | 用途 |
|------|------|------|
| `pill` | 640px（完全圆角） | CTA 按钮、导航容器 |
| `section-lg` | 64px | 大区块 |
| `section` | 48px | 中区块 |
| `xl` | 40px | 卡片外框 |
| `lg` | 30px | 大圆角 |
| `2xl` | 16px | 卡片、弹窗 |
| `sm` | 11.1px | 输入框 |
| `xs` | 5.1px | 细小元素 |
| — | 50px 50px 0 0 | 首页覆盖容器顶部 |

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

### 6.1 Header（全局导航）

```
Layout: [ Lifelect. ]    [ ▓ Products  About  Blog  [● Get in Touch] ▓ ]    [☰]
```

| 属性 | 值 |
|------|------|
| 定位 | `fixed top-[10px] left-0 right-0 z-50` |
| 背景 | 始终透明 `bg-transparent` |
| 内边距 | `h-[80px] px-6 lg:px-10` |
| 最大宽度 | `max-w-[1440px] mx-auto` |
| 导航容器 | `h-[50px] rounded-full bg-white/15 backdrop-blur-md` |
| 导航项 | `rounded-full px-5 py-1.5` |
| CTA 按钮 | `h-10 rounded-pill bg-black text-white` |

#### 导航容器边框切换
- **Hero 区**：`border border-white/20`
- **白色背景区**：`border border-gray-200/60`

#### 导航文字切换
- **Hero 区**：`text-white/80` → hover `text-white hover:bg-white/10`
- **白色背景区**：`text-novu-near-black/60` → hover `text-novu-near-black`

#### CTA 波浪动画
- 文字逐字拆分，每字符 0.07s 延迟递增
- 动画 `bounce-wave`：2.5s 周期，前 12% 上弹 5px 后回落
- 悬停时动画取消，字符归位

---

### 6.2 HeroBanner（首屏大图）

| 属性 | 值 |
|------|------|
| 定位 | `fixed inset-0 z-0`（不随滚动移动） |
| 图片 | 全屏 `object-cover`，叠加 `bg-black/50` |
| 标题 | `text-white font-bold text-5xl md:text-7xl lg:text-[80px]`，两行 |
| 副标题 | `text-white/70 font-light text-lg md:text-xl` |
| CTA | `bg-white text-gray-900 rounded-full px-8 py-4` |
| 滚动提示 | 底部居中箭头，`animate-bounce` |

---

### 6.3 Footer（全局页脚）

| 属性 | 值 |
|------|------|
| 定位 | `relative z-10` |
| 背景 | `bg-novu-near-black text-white` |
| 布局 | 4 列网格（品牌/产品/公司/联系） |
| 底栏 | 版权 + Privacy/Cookies/Terms 链接 |

---

### 6.4 ProductCard（产品卡片）

| 属性 | 值 |
|------|------|
| 外框 | `bg-white rounded-2xl border border-gray-100` |
| 悬停 | `hover:shadow-card-float hover:-translate-y-1` |
| 顶部线 | `h-0.5` 橘色渐变，悬停显示 |
| 图片区 | `aspect-[4/3]` 渐变色 + SVG 占位图 |
| 按钮 | Learn More（outline）+ Inquiry（primary） |

---

### 6.5 InquiryModal（询价弹窗）

| 属性 | 值 |
|------|------|
| 遮罩 | `fixed inset-0 z-[100] bg-bg-light/80 backdrop-blur-sm` |
| 弹窗 | `bg-white max-w-lg rounded-2xl` |
| 表单 | Full Name / Company / Email / Phone / Message |
| 状态 | Demo 模式 — 提交时 `alert()` |

---

### 6.6 按钮系统

所有 CTA / 操作按钮统一为黑色样式，与 Header「Get in Touch」按钮一致：

| 类名 | 背景 | 文字 | 圆角 | 悬停 | 按压 |
|------|------|------|------|------|------|
| `btn-primary` | `bg-black` | `text-white` | `pill` | `bg-black/85 shadow-lg` | `scale-[0.98]` |
| `btn-outline` | `bg-black` | `text-white` | `pill` | `bg-black/85 shadow-lg` | `scale-[0.98]` |
| `btn-ghost` | `transparent` | `text-white-60` | — | `hover:text-white` | — |

> **注**：HeroBanner 中的「Explore Products」按钮不属于此按钮系统，保留独立的白色按钮样式。

---

## 7. 间距

| 类名 | 值 | 用途 |
|------|------|------|
| `hero-pad` | 264px | Hero 区域大间距 |
| `container-main` | `max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12` | 内容容器 |
| 区块内边距 | `py-20 md:py-28 lg:py-36` | 标准内容区块 |
| 卡片内边距 | `p-7 lg:p-8` | 产品/特性卡片 |
| 导航间距 | `gap-6`（Header 三区块）, `gap-2`（导航项） | 弹窗 |

---

## 8. 动画规范

| 动画 | 触发 | 时长 | 缓动 |
|------|------|------|------|
| `fade-up` | 元素入场 | 0.8s | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `bounce-wave` | CTA 文字循环 | 2.5s 周期 | `ease-in-out` |
| 卡片悬停 | hover | 300ms | `transition-all` |
| Header 切换 | 滚动/路由 | 300-500ms | `transition-colors` |
| 按钮悬停 | hover | 200-300ms | `transition-all` |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. 无障碍

- **Skip Link**：`Skip to main content` 跳转链接（聚焦时显示）
- **Focus Visible**：橘色 3px 轮廓 + 2px 偏移
- **Aria Labels**：导航、按钮、弹窗均有语义化标签
- **Reduced Motion**：尊重系统设置

---

## 10. 响应式断点

沿用 Tailwind 默认断点：

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
纯黑     #000000  ████████  CTA
背景白   #FDFDFF  ████████  页面底色
深暗     #010703  ████████  最深色
暗面     #0b0f11  ████████  暗色表
```

---

## 12. 产品配色映射

| 产品 | Tailwind 渐变类 | 视觉效果 |
|------|----------------|----------|
| W10-L | `from-blue-500 to-blue-800` | 蓝色系 |
| W10 | `from-slate-600 to-slate-900` | 石板灰 |
| W9 | `from-teal-500 to-teal-800` | 蓝绿色 |
| W8 | `from-amber-600 to-orange-800` | 琥珀色 |
