console.log('hey how are you fine.');
let btn = document.getElementById('next')

let data = [
    {
        "name": "Faizan khan",
        "gender": "male",
        "age": "36",
        "language": "javascript",
        "framework": "Flask",
        "image" : "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        "name": "Salman sajjad",
        "gender": "male",
        "age": "36",
        "language": "html",
        "framework": "Django",
        "image" : "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
        "name": "Alishba khan",
        "gender": "female",
        "age": "38",
        "language": "PHP",
        "framework": "Flask",
        "image" : "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
        "name": "Naqeeb wazirwal",
        "gender": "male",
        "age": "36",
        "language": "javascript",
        "framework": "Flask",
        "image" : "https://randomuser.me/api/portraits/men/74.jpg"
    },
    {
        "name": "Sodasa Kasi",
        "gender": "female",
        "age": "35",
        "language": "Phython",
        "framework": "Django",
        "image" : "https://randomuser.me/api/portraits/men/80.jpg"
    },
]

function cvIterator(profiles) {
    cvIndex = 0
    return{
        next : function()
        {
            return cvIndex<profiles.length ? 
            {value : profiles[cvIndex++], done : false} :
            {done : true}
        }
    }
}

let candidate = cvIterator(data);

nextCV();

function nextCV() {
    let currentCandidate = candidate.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    console.log('hey how are you fine felling well');
      if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate['image']}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.gender}</li>
    <li class="list-group-item">${currentCandidate.age}</li>
    <li class="list-group-item">Currently works in ${currentCandidate.language}</li>
    <li class="list-group-item">With using the ${currentCandidate.framework} framework</li>
  </ul>`
      }
      else{
        alert('The applicant"s are finished');
        window.location.reload();
      }
}



btn.addEventListener('click',nextCV);

