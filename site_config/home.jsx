import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: '樊登读书开放平台',
      briefIntroduction: '提供樊登读书自身的商品、订单、会员等诸多API开发能力。',
      buttons: [
        {
          text: '开始接入',
          link: '/zh-cn/docs/developer-specification.html',
          type: 'normal',
        }
      ],
    },
    introduction: {
      title: '樊登读书简介',
      desc: '樊登读书隶属于上海黄豆网络科技有限公司，由央视节目主持人、MBA资深讲师樊登博士于2013年发起，同年10月正式成立。',
      img: '/img/architecture.jpg',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '统一授权认证',
          content: '基于Oauth2的认证模式',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '请求加密签名',
          content: '请求加密，保证数据安全防篡改',
        },
        {
          img: '/img/feature_service.png',
          title: '接口频次限流',
          content: '特定接口拥有不同的调用频次限制',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'IP黑白名单',
          content: '拦截异常请求，保证平台安全性',
        }
      ],
    },
    start: {
      title: '快速开始',
      desc: '安全、简便、快速的API接入方式',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/developer-specification.html',
      },
    },
    users: {
      title: '合作商户',
      desc: <span>樊登读书优质合作商</span>,
      list: [
        '/img/liantong.jpg'
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'Spiritual Wealth Club Open Platform',
      briefIntroduction: 'Provides many API development capabilities for spiritual wealth club\'s own products, orders, and membership.',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/demo1.html',
          type: 'normal',
        }
      ],
    },
    introduction: {
      title: 'Spiritual Wealth Club Introduction',
      desc: 'Fan Deng is affiliated to Shanghai Huangdou Network Technology Co., Ltd., and was founded in 2013 by CCTV program host and MBA senior lecturer Dr. Fan Deng. It was formally established in October of the same year.',
      img: '/img/architecture.jpg',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'Oauth2 Authorization',
          content: 'Authentication mode based on oauth2.',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'Encrypt and Sign',
          content: 'Request encryption to ensure data security and tampering.',
        },
        {
          img: '/img/feature_service.png',
          title: 'Interface frequency limit',
          content: 'Specific interfaces have different call frequency limits.',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'IP black and white list',
          content: 'Filter exception requests to ensure platform security',
        }
      ],
    },
    start: {
      title: 'Quick Start',
      desc: 'Safe, easy, and fast to access API.',
      img: '/img/quick_start.png',
      button: {
        text: 'Read More',
        link: '/zh-cn/docs/developer-specification.html',
      },
    },
    users: {
      title: 'Partners',
      desc: <span>Spiritual Wealth Club's partners are here.</span>,
      list: [
        '/img/liantong.jpg',
      ],
    },
  },
};
