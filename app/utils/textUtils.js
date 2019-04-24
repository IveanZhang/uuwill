import articles from '../data/raw/articles'

export function formatNumber(num) {
    return num > 999 ? `${(num / 1000).toFixed(1)}k` : num;
}

export function findArticle(article_id) {
    return articles.find((item) => item.id === article_id ? item : null);
}

