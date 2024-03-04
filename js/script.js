const allPostDefault =  async () =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
  const data = await res.json();
  const post = data.posts;

  
    const postContainer = document.getElementById('post-container');
    // let profileThumb = document.getElementById('profile-thumb');
    postContainer.innerHTML = ''
    post.forEach((item) => {
    
     
      const div = document.createElement('div')
      div.classList = 'flex flex-col lg:flex-row space-x-4 bg-[#F3F3F5] hover:bg-[#797DFC20] rounded-xl p-10 mb-6'
      div.innerHTML = `
      <div id="profile-thumb" class="profile-img lg:mb-0 mb-4">
        <div class="relative">
          <div class="w-4 h-4 rounded-full absolute top-0 right-0 ${item?.isActive ? "bg-[#10B981]" : "bg-[#FF3434]"} "> </div>
            <img class="" src="${item.image}" alt="" />
        </div>
    </div>
    <div class="w-full">
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
          <button onclick="readMe('${item.title.replace(/'/g,'')}', '${item.view_count}')" class="btn btn-active btn-accent text-white rounded-full"><i class="fa-regular fa-envelope-open"></i></button>
        </div>
      </div>
    </div>
      `
      
      postContainer.appendChild(div)
      
  });
  
  

}

allPostDefault();

const loadAllPost = async (searchValue) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchValue}`);
    const data = await res.json();
    const post = data.posts;
  
    const postContainer = document.getElementById('post-container');
    // let profileThumb = document.getElementById('profile-thumb');
    postContainer.innerHTML = ''
 
    post.forEach((item) => {
    
        const div = document.createElement('div')
        div.classList = 'flex flex-col lg:flex-row space-x-4 bg-[#F3F3F5] hover:bg-[#797DFC20] rounded-xl p-10 mb-6'
        div.innerHTML = `
        <div id="profile-thumb" class="profile-img lg:mb-0 mb-4">
          <div class="relative">
            <div class="w-4 h-4 rounded-full absolute top-0 right-0 ${item?.isActive ? "bg-[#10B981]" : "bg-[#FF3434]"} "> </div>
              <img class="" src="${item.image}" alt="" />
          </div>
        
      </div>
      <div class="w-full">
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
            <button onclick="readMe('${item.title.replace(/'/g, ' ')}', '${item.view_count}')" class="btn btn-active btn-accent text-white rounded-full"><i class="fa-regular fa-envelope-open"></i></button>
          </div>
        </div>
      </div>
        `
        
        postContainer.appendChild(div)
        
    });
    
    setTimeout(loadingSpinner, 2000, false)
    


}



let count = 0;
const viewContainer = document.getElementById('view-container')
const readCount = document.getElementById("view-count");
const readMe = (title, view_count) =>{
  
  const div = document.createElement('div')
  div.classList = 'bg-white flex p-4 justify-between items-center mt-4 rounded-xl'
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



// latest post conatainer  
const latestPost = async () =>{
  const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const post = await response.json();
    const latestPostContainer = document.getElementById('latest-post-container');
    
    post.forEach((item) => {

      const div = document.createElement('div');
      div.classList = 'card  bg-base-100 border border-gray-300';
      div.innerHTML = `
      <figure class="px-6 pt-6">
              <img src="${item.cover_image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body">
              <p class="text-[#12132D80]"><i class="fa-solid fa-calendar-check"></i> ${item.author.posted_date?item.author.posted_date:'No Publish Date'}</p>
              <h2 class="card-title text-[#12132D] font-extrabold">${item.title}</h2>
              <p class="text-[#12132D] font-normal">${item.description}</p>
              <div class="author-details flex items-center space-x-6 mt-2">
                <img class="w-14 rounded-full" src="${item.profile_image}" alt="">
                <div>
                  <h1 class="text-[#12132D] font-extrabold">${item.author.name}</h1>
                  <p class="text-[#12132D80]">${item.author.designation?item.author.designation:'Unknown'}</p>
                </div>
              </div>
            </div>
      `
      latestPostContainer.appendChild(div)

    });
  
    
}

latestPost();
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










