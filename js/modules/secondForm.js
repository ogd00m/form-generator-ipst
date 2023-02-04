async function secondForm() {
    const response = await fetch('./data/form-test-2.json')
    const data = await response.json();

    // console.log(data)


    let contentId = document.getElementById('content')

    let buttonId = document.getElementById('buttons')


    data.fields.map((item, key) => {

        console.log(item.attrs.type === "radio")


        if (item.attrs.type !== "radio") {
            let firstInput = document.createElement("input");
            let label = document.createElement("label");


            firstInput.setAttribute('type', item.attrs.type);
            firstInput.setAttribute('id', key);
            firstInput.setAttribute('class', 'border py-2 px-3 text-grey-800 bg-gradient-to-r from-indigo-600 to-pink-500 text-white w-full py-2 px-3 my-5');
            firstInput.setAttribute('placeholder', item.label)
            contentId.append(firstInput, label)
        }

        else if (item.attrs.type == "radio") {
            let labelTitle = document.createElement('p')
            labelTitle.setAttribute('class', 'text-white w-full py-2 px-3 my-5')
            labelTitle.innerHTML = item.label;
            contentId.append(labelTitle)
            item.attrs.variants.map((item1, label) => {
                let radioType = document.createElement("input")
                radioType.setAttribute("type", item.attrs.type)
                radioType.setAttribute('id', label)
                radioType.setAttribute('value', item1.value)
                let radioLabel = document.createElement("label")
                radioLabel.setAttribute("for", label);
                radioLabel.setAttribute('class', 'text-white w-full py-2 px-3 my-5')
                radioLabel.innerHTML = item1.label;
                contentId.append(radioLabel, radioType)
            })
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

export {secondForm}
