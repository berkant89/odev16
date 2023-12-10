let button = document.querySelector('.button');
let liste = document.getElementById('kisiListesi');
let kisiler = [
    {
        id: 1,
        name: 'Bertie Yates',
        age: 29,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
        id: 2,
        name: 'Hester Hogan',
        age: 32,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
        id: 3,
        name: 'Larry Little',
        age: 36,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
        id: 4,
        name: 'Sean Walsh',
        age: 34,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
        id: 5,
        name: 'Lola Gardner',
        age: 29,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
];


kisiler.forEach(kisi => {
    var div = document.createElement('div');
    div.className = "kisi-container";
    div.innerHTML = `
          <div class="resim-container">
              <img src="${kisi.image}" alt="${kisi.name}">
          </div>
          <div class="icerik">
              <h2>${kisi.name}</h2>
              <p>${kisi.age} yaşında</p>
          </div>
  `;
    liste.appendChild(div);
});

button.addEventListener('click', () => {
    var kisiContainers = document.querySelectorAll('.kisi-container');

    kisiContainers.forEach(function (kisiContainer) {
        kisiContainer.remove();
    });
});