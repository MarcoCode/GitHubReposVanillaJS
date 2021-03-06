class Layout {
  
  static toggleText(value) {
    var text = document.getElementById('input_text');
    text.value = value;
  }
  
  static displayError() {
    var userInfo = document.getElementById('user_info'), userError;
    
    cleanElement(userInfo);
    document.getElementById('data_container').setAttribute('class', 'container_error');
    
    generateElement(userInfo, userError, 'div', 'error_div')
    .innerHTML = "Does not exist";
  }

  static displayHeader(data) {
    var userInfo = document.getElementById('user_info'), response, userAvatar, userName, userFullName, userLocation;
    response = JSON.parse(data);
    
    cleanElement(userInfo);
    document.getElementById('data_container').setAttribute('class', 'container_data');
    
    generateElement(userInfo, userAvatar, 'img', 'user_img')
    .setAttribute('src', response.avatar_url);
    generateElement(userInfo, userName, 'p', 'user_uname')
    .innerHTML = response.login;
    generateElement(userInfo, userFullName, 'h1', 'user_fullname')
    .innerHTML = (response.name || "Name unavailable");
    generateElement(userInfo, userLocation, 'p', 'user_bio')
    .innerHTML = (response.location || "location unavailable");
  }

  static displayList(data) {
    var response, userInfo; 
    response = JSON.parse(data);
    userInfo = document.getElementById('user_info');
    
    generateElement(userInfo, 'Title', 'h3', 'list_title')
    .innerHTML = "Repositories";
    generateElement(userInfo, 'title_hr', 'hr', 'title_hr');
    
    for (let i = 0; i < response.length; i++) {
      generateElement(userInfo, null, 'p', response[i].id, 'repos_list')
      .innerHTML = response[i].name;
      generateElement(userInfo, null, 'span', null, 'glyphicons_star')
      .innerHTML = response[i].stargazers_count;
      generateElement(userInfo, null, 'img', null, 'glyphicons_star_img' )
      .setAttribute('src', 'images/glyphicons-50-star.png');
      generateElement(userInfo, null, 'span', null, 'glyphicons_fork')
      .innerHTML = response[i].forks;
      generateElement(userInfo, null, 'img', null, 'glyphicons_fork_img' )
      .setAttribute('src', 'images/glyphicons-309-share-alt.png');
    }
  }
}