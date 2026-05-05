export const CATEGORIES = {
    'Food & Dining': {
        color: '#F47650',
        background: 'rgba(244, 118, 80, 0.15)',
        icon: '🍔',
    },
    'Shopping': {
        color: '#70B5D4',
        background: 'rgba(112, 181, 212, 0.15)',
        icon: '🛍️'
    },
    'Transport': {
        color: '#5B40EF',
        background: 'rgba(91, 64, 239, 0.15)',
        icon: '🚗'
    },
    'Bills & Utilities': {
        color: '#F76262',
        background: 'rgba(247, 98, 98, 0.15)',
        icon: '⚡'
    },
    'Salary': {
        color: '#587A68',
        background: 'rgba(88, 122, 104, 0.15)',
        icon: '💸'
    },
    'Entertainment': {
        color: '#5B40EF',
        background: 'rgba(91, 64, 239, 0.15)',
        icon: '🎬'
    },
    'Health': {
        color: '#70B5D4',
        background: 'rgba(112, 181, 212, 0.15)',
        icon: '❤️'
    },
    'Others': {
        color: '#87888B',
        background: 'rgba(135, 136, 139, 0.15)',
        icon: '📦'
    },
};

export const CATEGORY_NAMES = Object.keys(CATEGORIES);

export function getCategoryMeta(categoryName) {
    return CATEGORIES[categoryName] ?? CATEGORIES['Others']
}