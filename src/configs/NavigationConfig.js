import {
  DashboardOutlined,
  BookOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  ScheduleOutlined,
  GiftOutlined,
  ShopOutlined,
  TeamOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileDoneOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const mainNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'Основные',
    icon: BookOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'main-dashboard',
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: 'Дэшборд',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-catalog',
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: 'Каталог',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-catalog-goods',
            path: `${APP_PREFIX_PATH}/main/catalog/goods`,
            title: 'Товары',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'main-catalog-categories',
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: 'Категории',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'main-catalog-collections',
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: 'Коллекции',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'main-catalog-combo',
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: 'Комбо',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'main-orders',
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: 'Заказы',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-clients',
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: 'Клиенты',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-clients-list',
            path: `${APP_PREFIX_PATH}/main/clients/list`,
            title: 'Список клиентов',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-clients-groups',
            path: `${APP_PREFIX_PATH}/main/clients/groups`,
            title: 'Группы клиентов',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'main-banners',
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: 'Баннеры',
        icon: ScheduleOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-promocodes',
        path: `${APP_PREFIX_PATH}/main/promocodes`,
        title: 'Промокоды',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-offline',
        path: `${APP_PREFIX_PATH}/main/offline`,
        title: 'Оффлайн точка',
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-offline-addresses',
            path: `${APP_PREFIX_PATH}/main/offline/addresses`,
            title: 'Адреса',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-offline-zones',
            path: `${APP_PREFIX_PATH}/main/offline/zones`,
            title: 'Геозоны',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'main-staff',
        path: `${APP_PREFIX_PATH}/main/staff`,
        title: 'Сотрудники',
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-mailings',
        path: `${APP_PREFIX_PATH}/main/mailings`,
        title: 'Рассылки',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: []
      }
    ],
  },
  {
    key: 'systemic',
    path: `${APP_PREFIX_PATH}/systemic`,
    title: 'Системные',
    icon: BookOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/systemic/settings`,
        title: 'Настройки',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'mobile',
        path: `${APP_PREFIX_PATH}/systemic/mobile`,
        title: 'Мобильное приложение',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/systemic/logs`,
        title: 'Логи',
        icon: FileDoneOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  }
];

const navigationConfig = [...mainNavTree];

export default navigationConfig;
