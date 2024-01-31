export default class post {
    constructor(baseUrl, endpoint, id, title, author) {
        this.baseUrl = baseUrl;
        this.endpoint = endpoint;
        this.id = id;
        this.title = title;
        this.author = author;
    }
    // lấy tất cả đối tượng
    getAll() {
        return axios.get(this.baseUrl + this.endpoint).then((data) => console.log(data.data))
    }

    // lấy 1 đối tượng theo id
    getOne(id) {
        return axios.get(this.baseUrl+this.endpoint+id).then(({data}) => console.log(data))
    }
// Thêm
    add(id, title, author) {
        let obj = {
            "id": id,
            "title": title,
            "author": author
        }
        return axios.post(this.baseUrl+this.endpoint, obj).then((data) => console.log(data))
    }
    // Sửa
    edit(id, title, author) {
        let obj = {
            "id": id,
            "title": title,
            "author": author
        }
        return axios.put(this.baseUrl+this.endpoint+id, obj).then((data) => console.log(data))
    }
// Xoá
    delete(id) {
        return axios.delete(this.baseUrl+this.endpoint+id).then((data) => console.log(data))
    }
}