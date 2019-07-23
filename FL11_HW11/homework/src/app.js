let rootNode = document.getElementById('root');

    function newAction() {
    let li = document.createElement('li');
    li.classList.add('li');
    let checkBtn = document.createElement('input');
    checkBtn.type = 'checkbox';
    li.appendChild(checkBtn);
    if (checkBtn.checked) {
        checkBtn.disabled = true;
    }

    let inputValue = document.getElementById('input').value;
    let liText = document.createTextNode(inputValue);
    li.appendChild(liText);
    if (inputValue === '') {
        document.getElementById('new1').disabled=true;
    } else {
    document.getElementById('thisUL').appendChild(li);
    }
    document.getElementById('input').value='';

    let createBtn = document.createElement('span');
    createBtn.classList.add('create');
    let iCreate = document.createElement('i');
    iCreate.classList.add('material-icons');
    let createSymbol = document.createTextNode('create');
    iCreate.appendChild(createSymbol);
    createBtn.appendChild(iCreate);
    li.appendChild(createBtn);

    changeAction(createBtn);

    function changeAction(element) {
        element.addEventListener('click', () => {
        let changeInput = document.createElement('input');
        changeInput.type = 'text';
        li.appendChild(changeInput);
                
        let saveBtn = document.createElement('span')
        saveBtn.classList.add('save');
        let iSave = document.createElement('i');
        iSave.classList.add('material-icons');
        let saveSymbol = document.createTextNode('save');
        iSave.appendChild(saveSymbol);
        saveBtn.appendChild(iSave);
        li.appendChild(saveBtn);

        saveBtn.addEventListener('click', () => {        
            li.innerHTML = changeInput.value;
            li.appendChild(checkBtn);
            li.appendChild(createBtn);
            li.appendChild(delBtn);
        });
        
        });
    }
    
    let delBtn = document.createElement('span');
    delBtn.classList.add('del');
    let iDel = document.createElement('i');
    iDel.classList.add('material-icons');
    let delSymbol = document.createTextNode('delete');
    iDel.appendChild(delSymbol);
    delBtn.appendChild(iDel);
    li.appendChild(delBtn);

    deleteAction(delBtn);

    function deleteAction(element) {
        element.addEventListener('click', () => {
            element.parentElement.remove();
        });
    }
    li.draggable = true;
      
    let maxItem = 9;
    let liCount = document.getElementsByTagName('li');
    if (liCount.length > maxItem) {
        document.getElementById('new1').disabled=true;
        document.getElementById('input').disabled=true;
        alert('Maximum item per list are created');
    } 
}



