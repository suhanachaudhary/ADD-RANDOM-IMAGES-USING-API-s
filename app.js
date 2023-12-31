let btn=document.querySelector("button");
let url="https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click",async()=>{
    console.log("button click");
    let link=await getImage();
    let img=document.querySelector("#image");
    img.setAttribute("src",link);
    console.log(link);
});
async function getImage(){
    try{
        let res=await axios.get(url);
        return res.data.message;
    }
    catch(e){
        console.log("error-",e);
        return "/";
        }
}