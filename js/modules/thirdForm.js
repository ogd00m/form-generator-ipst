async function thirdForm() {
    const response = await fetch('./data/form-test-3.json')
    const data = await response.json();

    // console.log(data)


    let contentId = document.getElementById('content')

    let buttonId = document.getElementById('buttons')


    data.fields.map((item, key) => {

        console.log(item.attrs.type === "select")


        if (item.attrs.type !== "select" && item.attrs.type !== "checkbox") {
            let firstInput = document.createElement("input");
            let label = document.createElement("label");


            firstInput.setAttribute('type', item.attrs.type);
            firstInput.setAttribute('id', key);
            firstInput.setAttribute('class', 'border py-2 px-3 text-grey-800 bg-gradient-to-r from-indigo-600 to-pink-500 text-white w-full py-2 px-3 my-5');
            firstInput.setAttribute('placeholder', item.label)
            contentId.append(firstInput, label)
        }

        else if (item.attrs.type === "select") {
            let selectTitle = document.createElement('p')
            selectTitle.setAttribute('class', 'text-white  my-2')
            selectTitle.innerHTML = item.label
            let selector = document.createElement('select')
            selector.setAttribute('name', item.attrs.name)
            item.attrs.variants.map((item1, label) =>{
                let selectOptions = document.createElement("option")
                selectOptions.setAttribute('value', item1.value)

                selectOptions.innerHTML = item1.label
                selector.appendChild(selectOptions)
            })
            contentId.append(selectTitle, selector)

        }
        else if(item.attrs.type === "checkbox"){
            let checkBoxFieldSet = document.createElement('fieldset')
            let legend = document.createElement('legend')
            legend.innerHTML = item.label
            checkBoxFieldSet.appendChild(legend)
            item.attrs.variants.map((item2, label) =>{
                let checkBoxDiv = document.createElement("div")
                checkBoxDiv.setAttribute('class', 'checkBoxDiv')
                let checkBoxInput = document.createElement('input')
                checkBoxInput.setAttribute('class', 'border py-2 px-3 text-grey-800 bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-5 px-5 my-4 mx-4')
                checkBoxInput.setAttribute('type', item.attrs.type)
                checkBoxInput.setAttribute('id', item2.value)
                let checkBoxLabel = document.createElement('label')
                checkBoxLabel.setAttribute('for', item2.value)
                checkBoxLabel.innerHTML = item2.label
                checkBoxDiv.appendChild(checkBoxInput)
                checkBoxDiv.appendChild(checkBoxLabel)
                checkBoxFieldSet.appendChild(checkBoxDiv)
            })

            contentId.append(checkBoxFieldSet)
        }


    })

    data.buttons.map((item) => {
        let buttons = document.createElement("button")
        buttons.setAttribute('type', item)
        buttons.setAttribute('class', 'bg-orange-500 hover:bg-orange-400 active:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded transition duration-200 ease-in-out')
        if (item == "submit") {
            buttons.innerHTML = "Подтвердить"
        } else if (item == "clear") {
            buttons.innerHTML = "Очистить"

        }


        buttonId.append(buttons)
    })


}

export {thirdForm}
