const loadAllPost = async (searchValue="music" ) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchValue}`);
    const data = await res.json();
    const post = data.posts;
  
    const postContainer = document.getElementById('post-container');
    // let profileThumb = document.getElementById('profile-thumb');
    postContainer.innerHTML = ''
 
    post.forEach((item) => {
    

        // if (item?.isActive) {
          
        //   profileThumb.classList.add("online")
        // } else {
          
        //   profileThumb.classList.add("offline")
        // }

        

        const div = document.createElement('div')
        div.classList = 'flex flex-col lg:flex-row space-x-4  bg-[#F3F3F5] rounded-xl p-10 mb-6'
        div.innerHTML = `
        <div id="profile-thumb" class="profile-img">
        <img class="" src="${item.image}" alt="" />
      </div>
      <div class="">
        <div class="flex space-x-5 items-center">
          <h3 class="text-[#12132D80]"># ${item.category}</h3>
          <h2 class="text-[#12132D80]">Author: ${item.author.name} </h2>
        </div>
        <div>
          <h1 class="text-xl font-black my-4">
            ${item.title}
          </h1>
          <p class="text-[#12132D60] font-normal">
            ${item.description}
          </p>
        </div>
        <div class="flex items-center justify-between mt-6">
          <ul class="flex space-x-6  items-center">
            <li><i class="fa-regular fa-message"></i> ${item.comment_count}</li>
            <li><i class="fa-regular fa-eye"></i> ${item.view_count}</li>
            <li><i class="fa-regular fa-clock"></i> ${item.posted_time}min</li>
          </ul>
          <div>
            <button onclick="readMe('${item.title}', '${item.view_count}')" class="btn btn-active btn-accent text-white rounded-full"><i class="fa-regular fa-envelope-open"></i></button>
          </div>
        </div>
      </div>
        `
        
        postContainer.appendChild(div)
        
    });
    loadingSpinner(false)

    


}

let count = 0;
const viewContainer = document.getElementById('view-container')
const readCount = document.getElementById("view-count");
const readMe = (title, view_count) =>{
  
  const div = document.createElement('div')
  div.classList = 'bg-white flex p-4 justify-between items-center mt-4'
  div.innerHTML = `
  <h1 class="font-black my-4">
                   ${title}
                        </h1>
                        <div>
                          <div class="flex items-center justify-center">
                            <i class="fa-regular fa-eye"></i>  
                            <p class="ml-2">${view_count}</p>
                          </div>
                        </div>
  
  `;


  viewContainer.appendChild(div)
  
  
  count++;
  readCount.innerText = count;


 
 
}






const handleSearch = () =>{
  loadingSpinner(true);
 const searchText   = document.getElementById('input-field').value;
 
 loadAllPost(searchText);
  
  
}
loadAllPost();
const loadingSpinner = (isLoading) =>{
  const loader = document.getElementById('loading');
  if(isLoading){
    loader.classList.remove('hidden')
  }else{
    loader.classList.add('hidden')
  }
}









