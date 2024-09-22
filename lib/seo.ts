export const seo = {
  title: 'Jason 碎碎念 | 开发者、细节控',
  description:
    '我叫 Jason，我热爱开发，创新，享受生活，以及在未知领域中探索。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://voe.cool'
      : 'http://localhost:3000'
  ),
} as const
