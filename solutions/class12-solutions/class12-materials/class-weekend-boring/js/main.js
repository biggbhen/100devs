document.querySelector('#check').addEventListener('click', check)




function check() {

  const answer = document.querySelector('#option').value;

  //Conditionals go here
  
  if(answer=== 'Yes' ||answer==='yes' ){
  document.querySelector('#placeToSee').innerText= "that's ok, you are making progress..dont't be so hard on yourself";
  document.querySelector('#placeToSee').style.color='blue';
     document.querySelector('#placeToSee').style.fontSize='2rem';
  }
  else if(answer=== 'No' || answer==='no' ){
    document.querySelector('#placeToSee').innerText= "thumbs up!!!";
    document.querySelector('#placeToSee').style.color='blue';
     document.querySelector('#placeToSee').style.fontSize='2rem';
  }else{
    alert('do not be on the fence')
  }

}

