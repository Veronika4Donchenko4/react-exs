function hover() {
    let ul = document.getElementById('hover-result');
    const li = document.createElement('li');
    const countLi = document.getElementsByTagName('li');
    console.log(countLi)
    for (i = 0; i < countLi.length; i++);
    console.log(i)
    let color = Math.floor(Math.random() * (6 - 1) + 1);
    li.appendChild(document.createTextNode(`${i}: Hovered`));
    ul.appendChild(li);
    if (countLi.length > 6) {
        ul.innerHTML = '';
    }
    switch (color) {
        case 1 :
            li.classList.add('red');
            break
        case 2:
            li.classList.add('blue')
            break
        case 3:
            li.classList.add('yellow')
            break
        case 4:
            li.classList.add('green')
            break
        case 5:
            li.classList.add('orange')
            break
    }
}


//task 2
let text = document.getElementById('blockText');
function clickButton() {
    targetBlock = document.getElementById('classBlock');
    if (targetBlock.classList.contains('has-class')) {
        switch(targetBlock.classList.length) {
            case 7: 
            targetBlock.classList.remove('six');
            text.innerHTML = `Check The Classes In Developer Panel:
            Class six was removed`
            break
            case 6: 
            targetBlock.classList.remove('two')
            text.innerHTML = `Check The Classes In Developer Panel:
            Class two was removed`;
            break
            case 5: 
            targetBlock.classList.remove('three');
            text.innerHTML = `Check The Classes In Developer Panel:
            Class three was removed`
            break
            case 4: 
            targetBlock.classList.remove('four');
            text.innerHTML = `Check The Classes In Developer Panel:
            Class four was removed`
            break
            case 3: 
            targetBlock.classList.remove('one');
            text.innerHTML = `Check The Classes In Developer Panel:
            Class one was removed`
            break
            case 2: 
            targetBlock.classList.remove('five');
            text.innerHTML = `Check The Classes In Developer Panel:
            Class five was removed`;
            break
            case 1:
            targetBlock.classList.replace('has-class', 'no-class');
            text.innerHTML = 'all classes removed';
            break
        }
    }
    else if (targetBlock.classList.length >= 0) {
        switch(targetBlock.classList.length) {
            case 1:
                text.innerHTML = 'class one was added';
                targetBlock.classList.add('one');
            break
            case 2:
                targetBlock.classList.add('two');
                text.innerHTML = 'class two was added'
            break
            case 3:
                targetBlock.classList.add('three');
                text.innerHTML = 'class three was added'
            break
            case 4:
                targetBlock.classList.add('four');
                text.innerHTML = 'class four was added'
            break
            case 5:
                targetBlock.classList.add('five');
                text.innerHTML = 'class five was added'
            break
            case 6:
                targetBlock.classList.add('six');
                text.innerHTML = 'class six was added'
            break
            case 7:
                text.innerHTML = 'All classes added'
                targetBlock.classList.replace('no-class', 'has-class');
        }
    }
}

//task 3

function trafficLight() {
    let ul = document.getElementById('result-list');
    let li = document.getElementById('empty');
    let promise = new Promise((resolve, reject) => {
        setTimeout( () => {
            if (li.classList == 'green') {
                li.classList.remove('green');
            }
            else if (li.classList == 'text') {
                li.classList.remove('text');
                li.classList.add('red')
            }
            li.classList.add('red');
            li.innerHTML = 'Red';
            }, 1000);
        resolve()
    },1000);
    promise.then(data => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                li.innerHTML = 'Yellow'
                if (li.classList == 'red') {
                    li.classList.remove('red');
                    li.classList.add('yellow');
                }
                resolve(data)
            }, 2000);
        })
    }).then(trafficLightData => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                li.innerHTML = 'Green'
                if (li.classList == 'yellow') {
                    li.classList.remove('yellow');
                    li.classList.add('green');
                }
                resolve(trafficLightData)
            }, 1000);
        })
    }).then(finishedWorkText => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (li.classList == 'green') {
                    li.classList.remove('green')    
                }
                li.innerHTML = 'trafficLight has finised the work';
                li.classList.add('text');
                resolve(finishedWorkText);
            }, 2000);
        })
    }).then(finised => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                li.innerHTML = '';
                li.classList = '';
            }, 3000);
        })
    })
}

//task 4
function clickCount() {
    let result = 0;
    let count = document.getElementById('counter');
    document.addEventListener('keydown', event => {
        result++
        count.innerHTML = result;
        console.log(result)
    })
}