import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Inconsolata as FontMono } from "next/font/google";
import { Playfair_Display as FontSerif } from "next/font/google";

export const lexend = localFont({
  variable: "--font-sans",
  src: [
    {
      path: './soehne-buch.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './soehne-buch-kursiv.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './soehne-kraftig.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './soehne-kraftig-kursiv.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './soehne-halbfett.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './soehne-halbfett-kursiv.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './soehne-dreiviertelfett.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './soehne-dreiviertelfett-kursiv.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});