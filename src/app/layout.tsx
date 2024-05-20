import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import '@/styles/basic.css'
import { seo } from '@/config/seo'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: {
    template: '%s - DabPython',
    default: seo.home.title,
  },
  description: seo.home.description,
  keywords: ["Python", "programming language", "编程语言", "programming language", "学习", "learning", "教程", "tutorial", "入门指南", "beginner's guide", "编程初学者", "programming beginners", "代码", "code", "算法", "algorithm", "数据结构", "data structures", "程序设计", "program design", "自学编程", "self-learning programming", "编程资源", "programming resources", "网络课程", "online courses", "编程实践", "programming practice", "编程项目", "programming projects", "编程技能", "programming skills"],
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
    url: "https://python.dabaz.me",
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
