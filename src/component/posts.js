import {
  auth, logOut, newPosts, displayPosts, likePost, deletePost,
} from '../lib/firebase.js';

// main route

// cerrar sesion
const posts = () => {
  // Crea Nav Bar
  const mainRoute = document.getElementById('mainRoute');

  const navbarContainer = document.createElement('div');
  navbarContainer.setAttribute('id', 'navbarContainer');
  mainRoute.appendChild(navbarContainer);

  const logo = document.createElement('img');
  logo.setAttribute('class', 'logogg');
  logo.src = './assets/audifonito-sin-pixelado.png';
  navbarContainer.appendChild(logo);

  const title = document.createElement('h2');
  title.setAttribute('class', 'tittlepost');
  title.innerHTML = 'Good Game Girls';
  navbarContainer.appendChild(title);

  const buttonForLogOut = document.createElement('button', 'a');
  buttonForLogOut.setAttribute('id', 'buttonLogOut');
  buttonForLogOut.setAttribute('type', 'click');
  buttonForLogOut.innerHTML = '<a href="#/login ">Cerrar sesión</a>';
  buttonForLogOut.innerHTML = 'Cerrar sesión';
  navbarContainer.appendChild(buttonForLogOut);

  // Crea Div grande que contiene todos los posts
  const postsContainer = document.createElement('div');
  postsContainer.classList.add('postsContainer');

  // Crea Div de izquierda y sus dos hijos User y Trending
  const userDataContainer = document.createElement('div');
  userDataContainer.setAttribute('class', 'userDataContainer');
  postsContainer.appendChild(userDataContainer);

  const userDataDiv = document.createElement('div');
  userDataDiv.setAttribute('id', 'userDataDiv');
  userDataDiv.classList.add('insidePost');
  userDataContainer.appendChild(userDataDiv);

  const follow = document.createElement('h4');
  follow.innerHTML = '<span class="games"> ¡Siguenos y disfruta del contenido que tanto te gusta! <br /> </span>';
  userDataDiv.appendChild(follow);

  const socialMediaTwitter = document.createElement('h3');
  socialMediaTwitter.innerHTML = '<span class="socialmedia"><img src="./assets/twitteer.png"> Twitter @goodgamegirls </span>';
  userDataDiv.appendChild(socialMediaTwitter);

  const socialMediaFacebook = document.createElement('h3');
  socialMediaFacebook.innerHTML = '<span class="socialmedia"><img src="./assets/faceboook.png"> Facebook /goodgamegirls </span>';
  userDataDiv.appendChild(socialMediaFacebook);

  const socialMediaInstagram = document.createElement('h3');
  socialMediaInstagram.innerHTML = '<span class="socialmedia"><img src="./assets/instagramm.png"> Instagram @goodgamegirls.cl </span>';
  userDataDiv.appendChild(socialMediaInstagram);

  // trends
  const trendingDataDiv = document.createElement('div');
  trendingDataDiv.setAttribute('id', 'trendingDataDiv');
  trendingDataDiv.classList.add('insidePost');
  userDataContainer.appendChild(trendingDataDiv);

  const trendingGames = document.createElement('h2');
  trendingDataDiv.appendChild(trendingGames);

  const trendingtittle = document.createElement('h4');
  trendingGames.innerHTML = '<span class="fav"> 🔥¡Nuestras recomendaciones de juegos!🔥 <br /> </span>';
  trendingDataDiv.appendChild(trendingtittle);

  // puestos en ranking
  /* const divForPlaces = document.createElement('div');
  divForPlaces.setAttribute('class', 'divforplaces');
  trendingDataDiv.appendChild(divForPlaces);

  const placeTrend = document.createElement('h4');
  placeTrend.setAttribute('id', 'graficaPrimero');
  placeTrend.innerHTML = '<span class="placetrend">Primero</span>';
  divForPlaces.appendChild(placeTrend);

  const placeTrend2 = document.createElement('h4');
  placeTrend2.setAttribute('id', 'graficaSegundo');
  placeTrend2.innerHTML = '<span class="placetrend">Segundo</span>';
  divForPlaces.appendChild(placeTrend2);

  const placeTrend3 = document.createElement('h4');
  placeTrend3.setAttribute('id', 'graficaTercero');
  placeTrend3.innerHTML = '<span class="placetrend">Tercero</span>';
  divForPlaces.appendChild(placeTrend3);

  const placeTrend4 = document.createElement('h4');
  placeTrend4.setAttribute('id', 'graficaCuarto');
  placeTrend4.innerHTML = '<span class="placetrend">Cuarto</span>';
  divForPlaces.appendChild(placeTrend4);

  const placeTrend5 = document.createElement('h4');
  placeTrend5.setAttribute('id', 'graficaQuinto');
  placeTrend5.innerHTML = '<span class="placetrend">Quinto</span>';
  divForPlaces.appendChild(placeTrend5); */

  // button para hacer el calculo trend
  const trendingPlace1 = document.createElement('button');
  trendingPlace1.setAttribute('class', 'buttontrend');
  trendingPlace1.setAttribute('type', 'click');
  trendingPlace1.setAttribute('value', 'Primero');
  trendingPlace1.innerHTML = '1. Leage Of Legends';
  trendingDataDiv.appendChild(trendingPlace1);

  // let firstPlace = 0;
  // let counterVotes = 0;

  const trendingPlace2 = document.createElement('button');
  trendingPlace2.setAttribute('class', 'buttontrend');
  trendingPlace2.setAttribute('value', 'Segundo');
  trendingPlace2.setAttribute('type', 'click');
  trendingPlace2.innerHTML = '2. Valorant';
  trendingDataDiv.appendChild(trendingPlace2);

  // funcion de calculo lalala

  // let secondPlace = 0;

  const trendingPlace3 = document.createElement('button');
  trendingPlace3.setAttribute('value', 'Tercero');
  trendingPlace3.setAttribute('class', 'buttontrend');
  trendingPlace3.setAttribute('type', 'click');
  trendingPlace3.innerHTML = '3. Fortnite';
  trendingDataDiv.appendChild(trendingPlace3);

  // funcion de calculo lala

  // let thirdPlace = 0;

  const trendingPlace4 = document.createElement('button');
  trendingPlace4.setAttribute('value', 'Cuarto');
  trendingPlace4.setAttribute('class', 'buttontrend');
  trendingPlace4.setAttribute('type', 'click');
  trendingPlace4.innerHTML = '4. Minecraft';
  trendingDataDiv.appendChild(trendingPlace4);

  // funcion de calculo lala

  // let fourthPlace = 0;

  const trendingPlace5 = document.createElement('button');
  trendingPlace5.setAttribute('value', 'Quinto');
  trendingPlace5.setAttribute('class', 'buttontrend');
  trendingPlace5.setAttribute('type', 'click');
  trendingPlace5.innerHTML = '5. Overwatch 2';
  trendingDataDiv.appendChild(trendingPlace5);

  const trendingPlace6 = document.createElement('button');
  trendingPlace6.setAttribute('value', 'Quinto');
  trendingPlace6.setAttribute('class', 'buttontrend');
  trendingPlace6.setAttribute('type', 'click');
  trendingPlace6.innerHTML = '6. Roblox';
  trendingDataDiv.appendChild(trendingPlace6);

  const trendingPlace7 = document.createElement('button');
  trendingPlace7.setAttribute('value', 'Quinto');
  trendingPlace7.setAttribute('class', 'buttontrend');
  trendingPlace7.setAttribute('type', 'click');
  trendingPlace7.innerHTML = '7. Fall Guys';
  trendingDataDiv.appendChild(trendingPlace7);

  // funcion de calculo lalala

  /* let fifthPlace = 0;

  function counter(votes) {
    if (votes == 'Primero') {
      counterVotes += 5;
      firstPlace += 5;
    } else if (votes == 'Segundo') {
      counterVotes == counterVotes + 5;
      secondPlace += 5;
    } else if (votes == 'Tercero') {
      counterVotes == counterVotes + 5;
      thirdPlace += 5;
    } else if (votes == 'Cuarto') {
      counterVotes == counterVotes + 5;
      fourthPlace += 5;
    } else if (votes == 'Quinto') {
      counterVotes == counterVotes + 5;
      fifthPlace += 5;
    }

    document.getElementById('graficaPrimero').style.width = `${firstPlace}%`;
    document.getElementById('graficaPrimero').innerHTML = `<h3> + ${firstPlace} + %</h3>`;

    document.getElementById('graficaSegundo').style.width = `${secondPlace}%`;
    document.getElementById('graficaSegundo').innerHTML = `<h3> + ${secondPlace} + %</h3>`;

    document.getElementById('graficaTercero').style.width = `${thirdPlace}%`;
    document.getElementById('graficaTercero').innerHTML = `<h3> + ${thirdPlace} + %</h3>`;

    document.getElementById('graficaCuarto').style.width = `${fourthPlace}%`;
    document.getElementById('graficaCuarto').innerHTML = `<h3> + ${fourthPlace} + %</h3>`;

    document.getElementById('graficaQuinto').style.width = `${fifthPlace}%`;
    document.getElementById('graficaQuinto').innerHTML = `<h3> + ${fifthPlace} + %</h3>`;
  }

  if (counterVotes == 100) {
    document.getElementsByClassName('buttontrend').style.display = 'none';
    document.getElementsByClassName('divforplaces').style.display = 'block';
  } */

  /* trendingPlace1.addEventListener('click', counter);
  trendingPlace2.addEventListener('click', counter);
  trendingPlace3.addEventListener('click', counter);
  trendingPlace4.addEventListener('click', counter);
  trendingPlace5.addEventListener('click', counter); */

  /* function showPassword() {
    const logForPassword = document.getElementById('passwordLogin');
    if (logForPassword.type === 'password') {
      logForPassword.type = 'text';
      checkbox.setAttribute('class', 'ojitocerrado');
    } else {
      logForPassword.type = 'password';
      checkbox.setAttribute('class', 'ojitoabierto');
    }
  }
  checkbox.addEventListener('click', showPassword); */

  // Crea Div padre en donde se publica y muestran los Posts
  const divPosts = document.createElement('div');
  divPosts.classList.add('divPosts');
  postsContainer.appendChild(divPosts);

  const dataUser = document.createElement('h4');
  dataUser.setAttribute('id', 'dataUser');
  // console.log(auth.currentUser.displayName);
  let showName = auth.currentUser.displayName;
  const showId = auth.currentUser.uid;

  if (showName == null) {
    const emailAdress = auth.currentUser.email;
    showName = emailAdress.substring(0, emailAdress.lastIndexOf('@'));
  }
  // if displayName = null, mostrar email hasta la @
  dataUser.innerHTML = `<span class="h4bold">¡Hola!</span> ${showName}! <span class="h4"><b>¿Qué estás jugando?</b></span>`;
  // prueba
  // console.log(auth.currentUser);
  divPosts.appendChild(dataUser);

  // caja principal
  const inputMainContainer = document.createElement('div');
  inputMainContainer.setAttribute('class', 'inputMainContainer');
  divPosts.appendChild(inputMainContainer);

  let showPicture = auth.currentUser.photoURL;

  if (showPicture == null) {
    const profileNull = './assets/audifonito-sin-pixelado.png';
    showPicture = profileNull;
    // let = auth.currentUser.photoURL;
  }
  const profilePicturePost = document.createElement('img');
  profilePicturePost.setAttribute('class', 'profilePicturePost');
  profilePicturePost.src = `${showPicture}`;
  profilePicturePost.referrerPolicy = 'no-referrer';
  inputMainContainer.appendChild(profilePicturePost);

  const inputSubContainer = document.createElement('div');
  inputSubContainer.setAttribute('class', 'postsInput');
  inputMainContainer.appendChild(inputSubContainer);

  const inputForPost = document.createElement('textarea');
  inputForPost.setAttribute('id', 'postInput');
  inputForPost.setAttribute('class', 'transparent-input');
  inputForPost.setAttribute('placeholder', 'Cuéntanos...');
  inputSubContainer.appendChild(inputForPost);

  const buttonPost = document.createElement('button');
  buttonPost.setAttribute('id', 'buttonPost');
  buttonPost.innerHTML = 'Postear';
  inputSubContainer.appendChild(buttonPost);

  const allPosts = document.createElement('div');
  allPosts.setAttribute('class', 'allPosts');
  allPosts.setAttribute('id', 'allPosts');
  divPosts.appendChild(allPosts);

  // Función para traer todo los datos de los posts y creación de Div para contenerlos
  displayPosts().then(
    (value) => {
      value.forEach((doc) => {
        const postIdentifier = doc.date;

        const divPostMain = document.createElement('div');
        divPostMain.setAttribute('id', postIdentifier);
        divPostMain.setAttribute('class', 'divPostMain');
        allPosts.appendChild(divPostMain);

        const divPostPic = document.createElement('div');
        divPostPic.setAttribute('id', `${postIdentifier}pix`);
        divPostPic.setAttribute('class', 'divPostPic');
        divPostMain.appendChild(divPostPic);

        const picUrl = document.createElement('img');
        picUrl.setAttribute('id', 'picUrl');
        picUrl.setAttribute('referrerPolicy', 'no-referrer');
        picUrl.setAttribute('src', `${doc.pfp} `);
        divPostPic.appendChild(picUrl);

        //
        const divPostContent = document.createElement('div');
        divPostContent.setAttribute('class', 'contentBox');
        divPostMain.appendChild(divPostContent);

        // DIV NOMBRE
        const postName = document.createElement('div');
        const nameId = `${postIdentifier}name`;
        postName.setAttribute('class', 'postName');
        postName.setAttribute('id', nameId);
        divPostContent.appendChild(postName);
        document.getElementById(nameId).textContent += `${doc.name} `;

        // DIV DATE
        const postDate = document.createElement('div');
        const descDate = `${postIdentifier}date`;
        postDate.setAttribute('id', descDate);
        postDate.setAttribute('class', 'postDate');
        divPostContent.appendChild(postDate);
        // console.log(doc.date.seconds);
        const docToDate = new Date(doc.date.seconds * 1000);
        const day = docToDate.getDay();
        const month = docToDate.getMonth() + 1;
        const year = docToDate.getFullYear();
        const hour = docToDate.getHours();
        const minute = docToDate.getMinutes();
        const timeFormat = `Publicado el ${day}.${month}.${year} a las ${hour}:${minute}`;
        const finalDate = timeFormat;
        postDate.textContent += finalDate;
        // DIV EDIT
        const editDiv = document.createElement('div');
        editDiv.setAttribute('class', 'edit');
        postDate.appendChild(editDiv);

        const editedPosts = document.createElement('img');
        editedPosts.setAttribute('class', 'icons');
        editedPosts.setAttribute('id', 'editedPosts');
        editedPosts.setAttribute('id', 'btn-edit');
        editedPosts.setAttribute('src', './assets/edit.png');
        editDiv.appendChild(editedPosts);
        // DIV DELETE
        const deleteDiv = document.createElement('div');
        deleteDiv.setAttribute('class', 'delete');
        editDiv.appendChild(deleteDiv);

        const deletePosts = document.createElement('img');
        // deletePosts.setAttribute('class', 'deletePosts');
       // deletePosts.setAttribute('class', 'icons');
        deletePosts.setAttribute('id', 'btn-delete');
        // deletePosts.setAttribute(`data-id='${doc.id}`)
        deletePosts.setAttribute('src', './assets/bin.png');
        deletePosts.setAttribute('type', 'click');
        editDiv.appendChild(deletePosts);
        /* buttonForGoogle.addEventListener('click', signGoogle);
       alert('Estas segurx que quieres borrar este post?')
       return mainContainer;   */

// Caroooo
       deletePosts.addEventListener ('click',  (e) => {
        // console.log(btn)
        const id = auth.currentUser.uid;
         console.log(id);
         const deleteAlert = confirm('¿Estas seguro que quieres eliminar este post?')
           if(deleteAlert == true){
         deletePost(id)
         alert('se borro tu post')
       }else{
         alert('post no eliminado!')
       }
      }) 

       /* document.querySelectorAll('#btn-delete').forEach((element) => element.addEventListener('click', (e) => {
          const id = e.target.dataset.id;
          if (confirm('¿Quieres borrar este post?') === true) {
            deletePost(id);
         } else if(deletePost(id).forEach(element) == true ){
            alert('Se ha eliminado tu post!'

          const btnDelete = editDiv.document.getElementById('btn-delete');
         console.log(btnDelete);
        btnDelete.forEach(buttonPost => {
          buttonPost.addEventListener('click',  (e) => {
            //console.log(deletePosts)
            id = e.target.dataset.id;
            //console.log(id);
            const deleteAlert = confirm('¿Estas seguro que quieres eliminar este post?')
              if(deleteAlert == true){
            deletePost(id)
            alert('Se ha eliminado tu post')
          }else{
            alert('No se pudo eliminar tu post! Intenta nuevamente')
          }

              })
            }) */

        // DIV DESCRIPTION
        const descId = `${postIdentifier}desc`;
        postDesc.setAttribute('id', descId);
        postDesc.setAttribute('class', 'postDesc');
        divPostContent.appendChild(postDesc);
        document.getElementById(descId).textContent += doc.description;

        // DIV LIKES
        const likeDiv = document.createElement('div');
        likeDiv.setAttribute('class', 'likeIcons');
        divPostContent.appendChild(likeDiv);

        const likePosts = document.createElement('img');
        // likePost.setAttribute('type', 'likecito')
        likePosts.setAttribute('class', 'emptyLike');
        likePosts.setAttribute('id', 'btn-like');
        likePosts.setAttribute('src', './assets/heart.png');
        likeDiv.appendChild(likePosts);
        likePosts.addEventListener('click', (e) => {
          e.preventDefault();
          // el id es el id del autor
          // userid es el del currentuser
          // img es el <3
          likePost(doc.id);
        });

        // COMMENTS

        const commentPosts = document.createElement('img');
        editedPosts.setAttribute('class', 'ico');
        commentPosts.setAttribute('id', 'btn-comment');
        commentPosts.setAttribute('src', './assets/commeents.png');
        likeDiv.appendChild(commentPosts);

        /* <div class="likes-border">
              <button  class="btn-like" value=${doc.id}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm4.186 10.74L12 16.926L7.814 12.74a2.745 2.745 0 0 1 0-3.907a2.745 2.745 0 0 1 3.906 0l.28.279l.279-.279a2.745 2.745 0 0 1 3.906 0a2.745 2.745 0 0 1 .001 3.907z"/></svg>
            </button>
            <span id="like-count" class="like-count"> ${posts.numberLike}Me gusta</span>
            </div>

      const btnLike = postContainer.querySelectorAll('.likes');
        console.log(likes);
        likes.forEach((like) => {
          console.log(likes);
          like.addEventListener('click', () => {
          // id = e.target.dataset.id;
            console.log('ola');
            //const idLike = e.target.dataset.id;
            const userId =auth.currentUser.uid;
            likePost(like.value, userId);
            console.log(id);
          });
        });

        });

      }   */
        // DIV COMMENTS
        const commentsPosts = document.createElement('span');
        commentsPosts.setAttribute('id', 'comments');
        commentsPosts.innerHTML += '<i class="fa-regular fa-comment"></i>';
        divPostContent.appendChild(commentsPosts);

        // const postPicture = document.createElement('img')
        // DIV PARA POSTS

        // console.log(info);

        /* if (allPosts!= '') {
  let html = "";
  const querySnapShot = getDocs(posts);
  querySnapShot.forEach ((doc) => {
    const post = doc.data();
    html += `
        <h6>${post.name} publicó: ${post.description}</h6>`;
    console.log(post);
    return post
  });  */
        // `<h6>${post.name} publicó: ${post.description}</h6>`
        // let posteos = displayPosts()
        // document.getElementById('allPosts').innerHTML = posteos;
      });
    } /* fin del post */,
  );
  buttonPost.addEventListener('click', (e) => {
    e.preventDefault();
    const posts = document.getElementById('postInput').value;
    newPosts(posts);
    inputForPost.innerHTML = '';
  });

  // Funcionalidad
  buttonForLogOut.addEventListener('click', () => {
    logOut();
    console.log(buttonForLogOut);
  });

  return postsContainer;
};

export { posts };
