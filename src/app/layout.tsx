import { type Metadata } from 'next'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import '@/styles/basic.css'
import { seo } from '@/lib/seo'
import { inter, lexend } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s - DabMarkdown',
    default: seo.home.title,
  },
  description: seo.home.description,
  keywords: ["Markdown", "Markdown language", "Markdown语言", "学习", "learning", "教程", "tutorial", "入门指南", "beginner's guide", "文档编写", "document writing", "格式化文本", "formatted text", "自学Markdown", "self-learning Markdown", "文档撰写技巧", "document writing skills", "文档示例", "document examples", "Markdown语法", "Markdown syntax", "Markdown教程", "Markdown tutorial", "Markdown实例", "Markdown examples", "文本编辑", "text editing", "在线课程", "online courses", "文档格式", "document format", "文档资源", "document resources", "Markdown实践", "Markdown practice", "Markdown项目", "Markdown projects", "文档设计", "document design", "文档写作", "document writing"],
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  referrer: "origin-when-cross-origin",
  authors: [{ name: "DabAZ", url: "https://dabaz.me" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": 15,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: "https://markdown.dabaz.me",
    siteName: seo.home.siteName,
    images: [
      {
        url: seo.home.imageSrc,
        width: 1920,
        height: 1080,
        alt: seo.home.imageAlt,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    creator: "@dabaz_official",
    title: seo.home.title,
    description: seo.home.description,
    images: seo.home.imageSrc,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
