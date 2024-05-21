export const seo = {
  home: {
    title: "DabMarkdown - Markdown语言学习平台",
    description: "DabMarkdown 是一个专注于Markdown语言教学的网站，通过详细的教程和示例，帮助您快速掌握Markdown语法，提升您的文档编写效率和质量。",
    url: new URL(
      process.env.NODE_ENV === "production"
        ? "https://markdown.dabaz.me"
        : "http://localhost:3000"
    ),
    imageSrc: "https://markdown.dabaz.me/images/home/opengraph-image.jpg",
    imageAlt: "DabMarkdown logo with a blue gradient background, featuring the initials 'DM' in white, followed by the full name 'DabMarkdown' below.",
    siteName: "DabMarkdown",
  }} as const;