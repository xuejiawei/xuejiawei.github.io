// 全局的一些配置
export default {
  rootPath: '/xuejiawei.github.io', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'xuejiawei.github.io', // 站点部署域名，无需协议和path等
  defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/developer-specification.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/en-us/blog/index.html',
      }//,
      // {
      //   key: 'community',
      //   text: 'COMMUNITY',
      //   link: '/en-us/community/index.html',
      // },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: '/en-us/docs/developer-specification.html',
        },
        {
          text: 'Quick start',
          link: '/en-us/docs/developer-specification.html',
        },
        {
          text: 'Developer guide',
          link: '/en-us/docs/developer-specification.html',
        },
        {
          text: 'Docsite',
          link: 'https://github.com/txd-team/docsite',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
      ],
    },
    copyright: '@2018-2019 樊登读书 | 上海黄豆网络科技有限公司 | 沪ICP备15021838',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/developer-specification.html',
      },
      {
        key: 'blog',
        text: '博客',
        link: '/zh-cn/blog/index.html',
      }//,
      // {
      //   key: 'community',
      //   text: '社区',
      //   link: '/zh-cn/community/index.html',
      // },
    ],
    disclaimer: {
      title: '免责声明',
      content: '免责声明的具体内容',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: '/zh-cn/docs/developer-specification.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/developer-specification.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/docs/developer-specification.html',
        },
        {
          text: 'Docsite',
          link: 'https://github.com/txd-team/docsite',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '/zh-cn/blog/index.html',
        },
        {
          text: '社区',
          link: '/zh-cn/community/index.html',
        },
      ],
    },
    copyright: '@2018-2019 樊登读书 | 上海黄豆网络科技有限公司 | 沪ICP备15021838',
  },
};
