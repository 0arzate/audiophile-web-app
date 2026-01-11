export const routes = [
  {
    path: '/',
    name: 'home',
    component: 'home-page',
    label: 'pages.home.title',
    navigationMobileImage: '',
    action: async () => {
      await import('../pages/home-page/home-page.js')
    }
  },
  {
    path: '/',
    name: 'headphones',
    component: 'home-page',
    label: 'pages.headphones.title',
    navigationMobileImage: 'https://i.ibb.co/ksc6075p/headphones-header-menu-mobile.png',
    action: async () => {
      await import('../pages/home-page/home-page.js')
    }
  },
  {
    path: '/',
    name: 'speakers',
    component: 'home-page',
    label: 'pages.speakers.title',
    navigationMobileImage: 'https://i.ibb.co/MxHjk298/speakers-header-menu-mobile.png',
    action: async () => {
      await import('../pages/home-page/home-page.js')
    }
  },
  {
    path: '/',
    name: 'earphones',
    component: 'home-page',
    label: 'pages.earphones.title',
    navigationMobileImage: 'https://i.ibb.co/7xrKttBC/earphones-header-menu-mobile.png',
    action: async () => {
      await import('../pages/home-page/home-page.js')
    }
  }
]
