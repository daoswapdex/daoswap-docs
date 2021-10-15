export default {
  // ssr: {},
  hash: true,
  title: 'Daoswap Docs',
  mode: 'site',
  base: '/',
  favicon: '/favicon.ico',
  logo: '/logo.png',
  outputPath: 'docs-dist',
  // locales: [['en-US', 'English'], ['zh-CN', '中文']],
  locales: [['zh-CN', '中文']],
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '极光社区',
      path: '/jiguangxueyuan',
    },
  ],
  // navs: {
  //   'en-US': [
  //     null,
  //     { title: 'GitHub', path: 'https://github.com/umijs/dumi' },
  //     { title: 'Changelog', path: 'https://github.com/umijs/dumi/releases' },
  //   ],
  //   'zh-CN': [
  //     null,
  //     { title: 'GitHub', path: 'https://github.com/umijs/dumi' },
  //     { title: '更新日志', path: 'https://github.com/umijs/dumi/releases' },
  //   ],
  // },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  exportStatic: {},
};
