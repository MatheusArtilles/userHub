//base: https://api.github.com/users
const urlBase = "https://api.github.com/users";
const input = document.querySelector("input");
const form = document.querySelector("form");
const loading = document.querySelector(".loadingg");
const link = document.querySelectorAll("a");
function getRepos(url) {
    fetch(url)
        .then(response => {
            if(response.status == 200 || response.status == 201){
                return response.json();
            }else {
                throw response;
            }
        }).then(res => {
            let listResumRepos = [res[0], res[1], res[2]];
            for(let i = 0; i < listResumRepos.length; i++){
                let li = link[i].children[0];
                li.innerText = listResumRepos[i].name;
                link[i].href = `${listResumRepos[i].html_url}`;
            }
        }).catch(err => {
            console.log(err);
        })
}
function addToInfosHtml(userName, avatar, urlUser){
    getRepos(`${urlBase}/${userName}/repos`);
}
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(input.value == "" || input.value == null){
        swal({
            icon: "warning",
            text: "Insira um usuário válido!",
            dangerMode: true
        });
    } else {
        loading.style.display = "block";
        fetch(`${urlBase}/${input.value}`)
            .then(response => {
                if(response.status == 200 || response.status == 201){
                    return response.json()
                }else {
                    throw response;
                }
            }).then(res => {
                loading.style.display = "none";
                console.log(res);
                addToInfosHtml(res.login, res.avatar_url, res.html_url)
            }).catch(err => {
                if(err.status == 400 || err.status == 401){
                    alert("erro no servidor, tente mais tarde");
                }
            })
    }
})