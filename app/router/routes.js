export const routes = [
  {
    path: '/',
    name: 'home',
    component: 'home-page',
    label: 'pages.home.title',
    action: async () => {
      await import('../pages/home-page/home-page.js')
    }
  }
]
