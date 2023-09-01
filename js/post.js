function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>disPost(data))
}
function disPost(data){
    const postContainer=document.getElementById('post-container');
    console.log(postContainer)
    for(const post of data){
        console.log(post)
        const div=document.createElement('div')
        div.innerHTML=`
        <h4>User-${post.userId}</h4>
        <h5>Post : title ${post.title}</h5>
        <p>Post description ${post.body}</p>
        `
        postContainer.appendChild(div)
    }
}
loadPost();