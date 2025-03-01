const logoutBtn = document.querySelector( '.logout-btn' );

logoutBtn.addEventListener( 'click', async function (e) {
  e.preventDefault();
  await fetch( 'http://localhost:8000/user/logout/', {
    method: 'POST',
    headers: {
      "Authorization": `Token ${ token }`,
      "Content-Type": "application/json",
    },
  } ).then( response => {
    if ( response.ok ) {
      localStorage.clear(token);
      localStorage.clear( userId );
      localStorage.clear( userType );
      window.location.href = 'index.html';
      return;
    };
    throw new Error( "Faild to logout." );
  } )
})