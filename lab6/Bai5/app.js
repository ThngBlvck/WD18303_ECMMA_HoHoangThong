import APICaller from "./BaseAPI.js";
import Comment from "./comment.js";
import Post from "./post.js";

let api = new BaseAPI("http://localhost:3000/", "posts")
console.log(api.get())
// CRUD Comment
let com = new comment("http://localhost:3000/", "comments/")
console.log(com.getAll());
console.log(com.getOne(2));
console.log(com.add(2, "Thng", 1));
console.log(com.edit(2, "Blvck", 2));
console.log(com.delete(2));
// CRUD Posts
let post = new post("http://localhost:3000/", "posts/");
console.log(post.getAll());
console.log(post.getOne(2));
console.log(post.add(2,"Deptry","ThayTeo"));
console.log(post.edit(2,"DepTrai","ThayTinh"));
console.log(post.delete(2));