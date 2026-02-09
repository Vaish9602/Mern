document.addEventListener("DOMContentLoaded",function(){
    const formElement=document.querySelector("#user-info");
    formElement.addEventListener("submit",function(event){
        event.preventDefault();
        console.log({event});



        let formData=new FormData(formElement);
        const firstName=formData.get("firstName")
        const lastName=formData.get("lastName");

        //console.log(formData.values());

        for(let value of formData.values()){
            console.log(value)
        }
        for(let key of formData.keys()){
            console.log(key)
        }
        for(let [key,value]of formData.entries()){
            console.log({key,value})
        }
         // in case of input type radio and checkbox, the inputs which
        // have been selected they have the checked property set to true

        // different ways of reading checkbox and radio input values

        // find element with the checked state
        document.querySelector("input[name='gender']:checked").value
        document.querySelectorAll("input[name='fruit']:checked")
        .forEach(element=> console.log(element.value))
    })

})