import axios from 'axios';

if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://182.254.133.153:8088';
}

const AppService = {

    book_items: request => axios.post('api/book/items', request),
    book_item: request => axios.post('api/book/item', request),
    book_basic: request => axios.post('api/book/basic', request),
    book_count: request => axios.post('api/book/count', request),
    book_update: request => axios.post('api/book/update', request),
    book_create: request => axios.post('api/book/create', request),
    book_empty: request => axios.post('api/book/empty', request),
    book_enable: request => axios.post('api/book/enable', request),
    book_disable: request => axios.post('api/book/disable', request),

    tag_items: request => axios.post('api/tag/items', request),
    tag_item: request => axios.post('api/tag/item', request),
    tag_basic: request => axios.post('api/tag/basic', request),
    tag_count: request => axios.post('api/tag/count', request),
    tag_update: request => axios.post('api/tag/update', request),
    tag_create: request => axios.post('api/tag/create', request),
    tag_empty: request => axios.post('api/tag/empty', request),
    tag_enable: request => axios.post('api/tag/enable', request),
    tag_disable: request => axios.post('api/tag/disable', request),

    category_items: request => axios.post('api/category/items', request),
    category_item: request => axios.post('api/category/item', request),
    category_basic: request => axios.post('api/category/basic', request),
    category_count: request => axios.post('api/category/count', request),
    category_update: request => axios.post('api/category/update', request),
    category_create: request => axios.post('api/category/create', request),
    category_empty: request => axios.post('api/category/empty', request),
    category_enable: request => axios.post('api/category/enable', request),
    category_disable: request => axios.post('api/category/disable', request),

    pattern_items: request => axios.post('api/pattern/items', request),
    pattern_item: request => axios.post('api/pattern/item', request),
    pattern_basic: request => axios.post('api/pattern/basic', request),
    pattern_count: request => axios.post('api/pattern/count', request),
    pattern_update: request => axios.post('api/pattern/update', request),
    pattern_create: request => axios.post('api/pattern/create', request),
    pattern_empty: request => axios.post('api/pattern/empty', request),
    pattern_enable: request => axios.post('api/pattern/enable', request),
    pattern_disable: request => axios.post('api/pattern/disable', request),

    metaStatus_items: request => axios.post('api/meta-status/items', request),
    metaStatus_selected_item: request => axios.post('api/meta-status/selected-item', request),
    metaStatus_selected_items: request => axios.post('api/meta-status/selected-items', request),

    metaColor_items: request => axios.post('api/meta-color/items', request),
    metaColor_selected_item: request => axios.post('api/meta-color/selected-item', request),
    metaColor_selected_items: request => axios.post('api/meta-color/selected-items', request),

    metaCategory_items: request => axios.post('api/meta-category/items', request),
    metaCategory_selected_item: request => axios.post('api/meta-category/selected-item', request),
    metaCategory_selected_items: request => axios.post('api/meta-category/selected-items', request),

    metaPattern_items: request => axios.post('api/meta-pattern/items', request),
    metaPattern_selected_item: request => axios.post('api/meta-pattern/selected-item', request),
    metaPattern_selected_items: request => axios.post('api/meta-pattern/selected-items', request),

    casTag_items: request => axios.post('api/cas-tag/items', request),
    casTag_selected_item: request => axios.post('api/cas-tag/selected-item', request),
    casTag_selected_items: request => axios.post('api/cas-tag/selected-items', request),
    casTag_basic: request => axios.post('api/cas-tag/basic', request),

    user_profile: request => axios.post('api/user/profile', request)
}

export default AppService
