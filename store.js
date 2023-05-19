import {createStore, applyMiddleware} from 'redux';
import Constant from 'Config/constant';

const title = 'Mẹo Vặt Hay - Các mẹo vặt hay trong cuộc sống - meovathay.vn';
const description = 'Mẹo vặt, đọc báo, chia sẻ mẹo vặt hay. Mẹo vặt cuộc sống, mẹo vặt làm đẹp, mẹo vặt hàng ngày, video mẹo vặt.';

const initialState = {
    token: null,
    profileUser: null,
    headerMenu: [],
    document: {
        defaultTitle: title,
        defaultDescription: description,
        title: title,
        og: {
            title: title
        },
        keywords: []
    },
    articleStructure: {
        '@context': 'http://schema.org',
        '@type': 'NewsArticle',
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': 'https://vnexpress.net/trump-du-kien-roi-washington-truoc-khi-biden-nham-chuc-4221866.html'
        },
        'headline': '',
        'description': '',
        'image': {
            '@type': 'ImageObject',
            'url': 'https://vcdn1-vnexpress.vnecdn.net/2021/01/16/86026-1-1610756895-1610756916-7269-1610757159.jpg?w=900&h=540&q=100&dpr=1&fit=crop&s=JxEhWJdBpbSd5_LJYth30w',
            'width': 500,
            'height': 500
        },
        'datePublished': '2021-01-16T07:33:10+07:00',
        'dateModified': '2021-01-16T07:34:11+07:00',
        'author': {
            '@type': 'Organization',
            'name': 'VnExpress'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'VnExpress',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://s1cdn.vnecdn.net/vnexpress/restruct/i/v371/logos/vnexpress_500x110.png',
                'width': 500,
                'height': 112
            }
        },
        'about': [
            'Bầu cử Tổng thống Mỹ',
            'Donald Trump',
            'Bầu cử Tổng thống Mỹ',
            'Tin',
            'Tin nóng'
        ]
    },
    breadcrumbStructure: {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'item': {
                    '@id': Constant.SITE_URL,
                    'name': 'Tin tức'
                }
            }
        ]
    }
};

// Action type
export const actionTypes = {
    SET_HEADER_MENU: 'SET_HEADER_MENU',
    UPDATE_DOCUMENT: 'UPDATE_DOCUMENT',
    UPDATE_ARTICLE_STRUCTURE: 'UPDATE_ARTICLE_STRUCTURE',
    UPDATE_BREADCRUMB_STRUCTURE: 'UPDATE_BREADCRUMB_STRUCTURE',
    SET_TOKEN: 'SET_TOKEN',
    SET_PROFILE_USER: 'SET_PROFILE_USER'
};

// Actions
export const setToken = (payload) => {
    return {
        type: actionTypes.SET_TOKEN,
        payload
    };
};

export const setProfileUser = (payload) => {
    return {
        type: actionTypes.SET_PROFILE_USER,
        payload
    };
};

export const setHeaderMenu = (payload) => {
    return {
        type: actionTypes.SET_HEADER_MENU,
        payload
    };
};

export const updateDocument = (payload) => {
    return {
        type: actionTypes.UPDATE_DOCUMENT,
        payload
    };
};

export const updateArticleStructure = (payload) => {
    return {
        type: actionTypes.UPDATE_ARTICLE_STRUCTURE,
        payload
    };
};

export const updateBreadcrumbStructure = (payload) => {
    return {
        type: actionTypes.UPDATE_BREADCRUMB_STRUCTURE,
        payload
    };
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TOKEN:
            if (action.payload) {
                return Object.assign({}, state, {
                    token: action.payload
                });
            }
            return state;
        case actionTypes.SET_PROFILE_USER:
            if (action.payload) {
                return Object.assign({}, state, {
                    profileUser: action.payload
                });
            }
            return state;
        case actionTypes.SET_HEADER_MENU:
            if (action.payload) {
                return Object.assign({}, state, {
                    headerMenu: action.payload
                });
            }
            return state;
        case actionTypes.UPDATE_DOCUMENT:
            if (action.payload) {
                return Object.assign({}, state, {
                    document: {
                        ...state.document,
                        ...action.payload
                    }
                });
            }
            return state;
        case actionTypes.UPDATE_ARTICLE_STRUCTURE:
            if (action.payload) {
                return Object.assign({}, state, {
                    articleStructure: {
                        ...state.articleStructure,
                        ...action.payload
                    }
                });
            }
            return state;
        case actionTypes.UPDATE_BREADCRUMB_STRUCTURE:
            if (action.payload && action.payload.itemListElement) {
                return Object.assign({}, state, {
                    breadcrumbStructure: {
                        ...state.breadcrumbStructure,
                        itemListElement: [
                            ...action.payload.itemListElement
                        ]
                    }
                });
            }
            return state;
        default:
            return state;
    }
};

export function initializeStore (initialState) {
    return createStore(
        reducer,
        initialState,
        applyMiddleware()
    );
}
