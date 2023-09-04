//base: https://api.github.com/users
const urlBase = "https://api.github.com/users";
const input = document.querySelector("input");
const btnSubmit = document.querySelector(".btn-submit");
btnSubmit.addEventListener("click", ()=>{
    if(input.value == "" || input.value == null){
        swal({
            icon: "warning",
            text: "Insira um usuário válido!",
            dangerMode: true
        });
    } else {
        fetch(`${urlBase}/${input.value}`)
            .then(response => {
                if(response.status == 200 || response.status == 201){
                    return response.json()
                }else {
                    throw response;
                }
            }).then(res => {
                console.log(res);
            }).catch(err => {
                if(err.status == 400 || err.status == 401){
                    alert("erro no servidor, tente mais tarde");
                }
            })
    }
})