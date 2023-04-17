class Dog{
    constructor(data){
      Object.assign(this,data)
    }
    setDogHtml(){
      const{name,age,bio,avatar,hasBeenSwiped,
      hasBeenLiked}=this
      return`
        <div class='dog-container'>
          <img  src='${avatar}'>
          <div class='info'>
          <h1>${name} , ${age}</h1>
          <p>${bio}</p>
          </div>
          ${this.hasBeenLiked ? this.getLikeBadgeHtml() : this.hasBeenSwiped? this.getDislikeBadgeHtml() : ''}
        </div>
      `
      
    }
    getLikeBadgeHtml(){
      return `
        <div class='badge'><img src='images/badge-like.png'</div>
      `
    }
    getDislikeBadgeHtml(){
      return `
        <div class='badge'><img src='images/badge-nope.png'</div>
      `
    }
  }
  
  export default Dog