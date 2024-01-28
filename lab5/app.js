
class BaseAPI {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint) {
        const response = await fetch(`${this.baseUrl}/${endpoint}`);
        const data = await response.json();
        return data;
    }
}

class Posts extends BaseAPI {
    constructor(baseUrl) {
        super(baseUrl);
        this.endpoint = 'Post';
    }
    async getAll() {
        const Post = await this.get(this.endpoint);
        return Posts;
    }

    async getOne(PostId) {
        const Post = await this.get(`${this.endpoint}/${PostId}`);
        return Posts;
    }
}
// Gọi API
const baseAPI = new Posts('  http://localhost:3000');
// Lấy tất cả
baseAPI.getAll().then((Post) => console.log('All Post:', Post));
// Lấy 1
baseAPI.getOne(1).then(Post => console.log('Post 1:', Post));