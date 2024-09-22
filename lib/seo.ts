export const seo = {
  title: 'Jason 碎碎念 | 开发者、细节控',
  description:
    'feedId:60563448988313600+userId:42885649245851648',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://voe.cool'
      : 'http://localhost:3000'
  ),
} as const
