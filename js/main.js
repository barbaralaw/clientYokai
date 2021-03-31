document.querySelector('button').addEventListener('click', getYokaiInfo);

async function getYokaiInfo() {
  console.log('here')
  const yokaiName = document.querySelector('input').value
  try {
    // need to remember await key word for response and data
    const response = await fetch(`https://yokai-api.herokuapp.com/api/yokai/${yokaiName}`) // need http or https for cors
    const data = await response.json()

    console.log(data)
    document.querySelector('.directions').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
    document.getElementById('yokaiPicThumb').src = data.yokaiPicThumb
    document.getElementById('yokaiPicThumb').alt = `${data.name} thumbnail picture`
    document.getElementById('yokaiPic').href = data.yokaiPic
    document.querySelector('h2').innerText = data.name
    document.getElementById('medalPicThumb').src = data.medalPicThumb
    document.getElementById('medalPicThumb').alt = `${data.name} medal`
    document.getElementById('medalPic').href = data.medalPic
    document.getElementById('tribe').innerText = 'Tribe:   ' + data.tribe
    document.querySelector('#bio').innerText = data.medalliumBio
    document.querySelector('input').innerText = ''
    document.querySelector('input').placeholder = 'Enter another Yokai name'

  } catch(err) {
    console.log(err)
  }

}
