$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="box" data-message-id=${message.id}>
          <div class="info">
            <div class="user__name">
              ${message.user_name}
            </div>
            <div class="main__day">
              ${message.created_at}
            </div>
          </div>
          <div class="main__message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="box" data-message-id=${message.id}>
        <div class="info">
          <div class="user__name">
            ${message.user_name}
          </div>
          <div class="main__day">.
            ${message.created_at}
          </div>
        </div>
        <div class="main__message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.MessageField').append(html);      
      $('form')[0].reset();
      $('.MessageField').animate({ scrollTop: $('.MessageField')[0].scrollHeight});
      $('.Form__submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function(){
      $('.cc').prop("disabled", false);
    })
  });
});

