// write your code here

let cardinfo;
function cardRender(card){
    // console.log(card)
    cardinfo = card
    cardTitleTag = document.querySelector('#card-title'),
    cardImageTag = document.querySelector('#card-image'),
    cardLikesTag = document.querySelector('#like-count'),
    cardLikesBtnTag = document.querySelector('#like-button'),
    cardListTag = document.querySelector('#comments-list'),
    cardCommentFormTag = document.querySelector('#comment-form'),
    cardCommentInputTag = document.querySelector('#comment'),


  cardTitleTag.textContent = card.title;
  cardImageTag.src = card.image;
  cardLikesTag.textContent = `${card.likes} likes`;
    
  while(cardListTag.hasChildNodes()){
    cardListTag.removeChild(cardListTag.lastChild)
}
};

