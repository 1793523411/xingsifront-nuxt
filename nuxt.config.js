export default {
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/font-awesome-4.7.0/css/font-awesome.min.css',
    'quill/dist/quill.core.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css'
  ],
  plugins: [
    '@/plugins/element-ui'
  ],
  build: {
    transpile: [/^element-ui/]
  },
  router: {
    linkActiveClass: "active",
    extendRoutes(routes, resolve) {
      console.log(routes);
      routes.splice(0);

      routes.push(
        ...[
          {
            path: "/",
            component: resolve(__dirname, "pages/layout/"),
            children: [
              {
                path: "",
                name: "home",
                component: resolve(__dirname, "pages/home/"),
              },
              {
                path: "/login",
                name: "login",
                component: resolve(__dirname, "pages/login/"),
              },
              {
                path: "/register",
                name: "register",
                component: resolve(__dirname, "pages/login/"),
              },
              {
                path: "/profile",
                name: "profile",
                component: resolve(__dirname, "pages/profile/"),
              },
              {
                path: "/settings",
                name: "settings",
                component: resolve(__dirname, "pages/settings/"),
              },
              {
                path: "/editor",
                name: "editor",
                component: resolve(__dirname, "pages/editor/"),
              },
              {
                path: "/article/:id",
                name: "article",
                component: resolve(__dirname, "pages/article/"),
              },
              {
                path: "/history",
                name: "history",
                component: resolve(__dirname, "pages/history/"),
              },
              {
                path: "/album/:id",
                name: "album",
                component: resolve(__dirname, "pages/album/"),
              },
              {
                path: "/year/:id",
                name: "year",
                component: resolve(__dirname, "pages/year/"),
              },
            ],
          },
        ]
      );
    },
  },
};
