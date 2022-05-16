class App { 
    addProperty(){
        event.preventDefault()
        let area = document.querySelector("input[name='area']").value
        let numero = document.querySelector("input[name='numero']").value
        let bairro = document.querySelector("input[name='bairro']").value
        let cidade = document.querySelector("input[name='cidade']").value
        let property = new Property( area,numero,bairro,cidade)
        this.addOnPropertiesList(property)
        this.cleanForm()
    }
    addOnPropertiesList(property){
        let listElement = document.createElement("li")     
        let propertyInfo = property.area + " m², " + " número " + property.numero + " ( " + property.bairro +" - "+ property.cidade +" ) "

        listElement.innerHTML += propertyInfo
        let buttonToRemove = this.createRemoveButton()
        listElement.appendChild(buttonToRemove)
        document.getElementById("properties").appendChild(listElement)
    }
    createdRentedMark(){
    }

    createRemoveButton(){
        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick", "app.remove()") 
        buttonToRemove.innerText = "Remover"
        return buttonToRemove
    }

    cleanForm(){
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='rented']").checked = false
    }

    remove(){
        let liToRemove = event.target.parentNode
        document.getElementById("properties").removeChild(liToRemove)
    }

}

const app = new App()