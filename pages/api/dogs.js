
export default async function GetDogs(req, res){
    const data = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/enisportfolio.wordpress.com/posts");
    const posts = await data.json();
    res.send(JSON.stringify(posts, 0, 4));
}