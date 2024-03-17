import { ProjectModel } from '../models/project.model';

// create a static variable to use on another file
export const PROJECTS_LIST: ProjectModel[] = [
  new ProjectModel(
    'Bitimen Crypto Currency Application',
    'Application Development',
    'Android & IOS Application Trade smarter, not harder. Bitimen puts the power of cryptocurrency in your pocket.',
    'bitimen.jpg',
    'https://bitimen.com/'
  ),
  // new ProjectModel(
  //   'Wood craft Shopping Application',
  //   'Application Development',
  //   'A world of wood at your fingertips: Explore endless possibilities with Wood-commerce',
  //   'woodcomerce.jpg',
  //   'https://bitimen.com/'
  // ),
  new ProjectModel(
    'Aqila Crypto Currency Wallet',
    'Application Development',
    'The Aqila Crypto Currency Wallet is a software program designed to securely store private and public keys used for interacting with blockchain networks and managing various cryptocurrencies.',
    'aqila.jpg',
    'https://www.aquila.ch/en/bank/'
  ),
  new ProjectModel(
    'Vibez App',
    'Application Development',
    'Companion for event participants with features for event discovery, communication, ticket purchase, community membership, and cashless payments',
    'vibez.webp',
    'https://www.vibez.io/'
  ),
  new ProjectModel(
    'Nobitex Site',
    'Website Development',
    ' Nobitex Explore Nobitex is the largest digital currency exchange in Iran, providing professional services for buying and selling digital    currencies without intermediaries',
    'nobitex.jpg',
    'https://nobitex.ir/en/'
  ),
  new ProjectModel(
    'Zaban Application',
    'Application Development',
    'Zaban is language learning app designed to tailor content to your interests, so you can stay engaged and motivated as you work towards fluency English. Crafted to match your level, Zaban makes it easy to learn at your own pace and on your own terms',
    'zaban-mobile.jpg',
    'https://zaban.com/'
  ),
  new ProjectModel(
    'ZalTV Television Application',
    'Application Development',
    'ZalTV is a dedicated IPTV player designed for simplicity and speed. It caters to users who want a straightforward way to watch Internet Protocol Television (IPTV) content on their large screens and TV remote controls.',
    'zaltv.jpg',
    'https://zaltv.com/'
  ),
  new ProjectModel(
    'Zaban PWA',
    'Flutter Development',
    'Zaban is language learning app designed to tailor content to your interests, so you can stay engaged and motivated as you work towards fluency English. Crafted to match your level, Zaban makes it easy to learn at your own pace and on your own terms',
    'zaban-laptop.jpg',
    'https://stg.zaban.io/'
  ),
];
