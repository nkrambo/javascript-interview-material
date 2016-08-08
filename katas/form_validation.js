
(function() {

  'use strict';

  const postForm = document.getElementById('post-form');

  const validForm = function() {
    const name = document.getElementById('name');
    if(name.value.length <= 3) {
      return false;
    }

    // append some type of messaging here...

    return true;
  }

  postForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if(validForm()) {
      postForm.submit();
    }
  });

})()
