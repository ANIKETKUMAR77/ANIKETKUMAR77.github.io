const apikey ='7768a8c0922848e8a5404000348df92f';

const bloagcontainer=document.getElementById("blog_container");
const searchfield=document.getElementById('search_input');
const searchbutton=document.getElementById('search_button');
async function fetchRandomNews(){
    try{
        const apiUrl=`https://newsapi.org/v2/top-headlines?country=in&pageSize=24&apikey=${apikey}`;
        const response=await fetch(apiUrl);
        const data=await response.json();
        console.log(data);
        return data.articles;

    }catch(error){
        console.error("error fetching random news ",error);
        return [];

    }






}

searchbutton.addEventListener("click",async ()=>{
    const query=searchfield.value.trim();
    if(query !==""){
       try{
         const articles=await fetchNewsQuery(query);
         displayBlogs(articles);
       } catch(error){
        console.log("error fetching news by query",error)

       }
    }
})

async function fetchNewsQuery(query){
    try{
        const apiUrl=`https://newsapi.org/v2/everything?q=${query}in&pageSize=24&apikey=${apikey}`;
        const response=await fetch(apiUrl);
        const data=await response.json();
        console.log(data);
        return data.articles;

    }catch(error){
        console.error("error fetching random news ",error);
        return [];

    }
}



function displayBlogs(articles){

bloagcontainer.innerHTML="";
articles.forEach((articles)=>{
    const blogcard=document.createElement("div");
    blogcard.classList.add("blog_card");
    const img=document.createElement("img");
    img.src=articles.urlToImage;
    img.alt=articles.title;
    const title=document.createElement("h2");
    // title.textContent=articles.title;
    const truncatedtitle=articles.title.length>30?articles.title.slice(0,30)+ "....": articles.title;
    title.textContent=truncatedtitle;
    const description=document.createElement("p");
    const truncateddes=articles.description.length>120?articles.description.slice(0,120)+ "....": articles.description;
    description.textContent=truncateddes;
    blogcard.appendChild(img);
    blogcard.appendChild(title);
    blogcard.appendChild(description);
    bloagcontainer.appendChild(blogcard);
    blogcard.addEventListener("click",()=>{
        window.open(articles.url,"_blank");
    })



})


}


(async ()=>{
    try{

       const articles= await fetchRandomNews();
      displayBlogs(articles);
    }catch(error){
        console.error("error fetching random news ", error);

    }
})();