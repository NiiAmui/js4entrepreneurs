var users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png',
        age:20,
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.png',
        age: 25,
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.png',
        age:17,
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.png',
        age: 28,
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar5.png',
        age: 30,
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar6.png',
        age:22,
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png',
        age: 22,
    },
];

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');
    var min = document.getElementById('min');
    var min = document.getElementById('max');

    
    
    function search() {
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        
        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        
        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHtml += '<div class="person-row">\
                           <img src="images/' + users[i].avatar + '" />\
                           <div class="person-info">\
                           <div>' + users[i].name + '</div>\
                           <div>' + users[i].hobby + '</div></div>\
                            <button>Add as friend</button></div>';  
                
                if (users.filter((x) => x.age > min && x.age < max)){
                    resultsHtml += '<div class="person-row">\
                    <img src="images/' + users[i].avatar + '" />\
                    <div class="person-info">\
                    <div>' + users[i].name + '</div>\
                    <div>' + users[i].hobby + '</div></div>\
                     <button>Add as friend</button></div>'; 

                }
                }
            }
        }
        
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});